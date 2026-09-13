import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { events } from '../core/EventBus';

export interface XRControllerData {
  index: number;
  controller: THREE.XRTargetRaySpace;
  grip: THREE.XRGripSpace;
  ray: THREE.Line;
}

export class XRManager {
  public isXRPresenting: boolean = false;
  public controllers: XRControllerData[] = [];
  public hands: THREE.XRHandSpace[] = [];

  private renderer: THREE.WebGLRenderer;
  private xrRig: THREE.Group;

  constructor(renderer: THREE.WebGLRenderer, xrRig: THREE.Group) {
    this.renderer = renderer;
    this.xrRig = xrRig;

    this.setupVRButton();
    this.setupControllers();
    this.setupHands();
    this.setupSessionListeners();
  }

  private setupVRButton(): void {
    const button = VRButton.createButton(this.renderer);
    button.id = 'VRButton';
    document.body.appendChild(button);
  }

  private setupControllers(): void {
    const createLaserRay = () => {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -2.5)
      ]);
      const material = new THREE.LineBasicMaterial({
        color: 0xD59F0F,
        transparent: true,
        opacity: 0.65
      });
      const line = new THREE.Line(geometry, material);
      line.name = 'LaserRay';
      return line;
    };

    for (let i = 0; i < 2; i++) {
      // Ray space (apuntador)
      const controller = this.renderer.xr.getController(i);
      const ray = createLaserRay();
      controller.add(ray);
      this.xrRig.add(controller);

      // Grip space (agarre de mando)
      const grip = this.renderer.xr.getControllerGrip(i);
      
      // Malla visual básica de mando (placeholder cilíndrico ergonómico)
      const gripMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.02, 0.025, 0.12),
        new THREE.MeshStandardMaterial({ color: 0x1E293B, roughness: 0.5, metalness: 0.8 })
      );
      gripMesh.rotation.x = Math.PI / 4;
      grip.add(gripMesh);
      this.xrRig.add(grip);

      // Eventos de interacción en VR
      controller.addEventListener('selectstart', () => {
        events.emit('VR_TRIGGER_DOWN', { controllerIndex: i, controller });
      });

      controller.addEventListener('selectend', () => {
        events.emit('VR_TRIGGER_UP', { controllerIndex: i, controller });
      });

      controller.addEventListener('squeezestart', () => {
        events.emit('VR_GRIP_DOWN', { controllerIndex: i, controller });
      });

      controller.addEventListener('squeezeend', () => {
        events.emit('VR_GRIP_UP', { controllerIndex: i, controller });
      });

      this.controllers.push({
        index: i,
        controller,
        grip,
        ray
      });
    }
  }

  private setupHands(): void {
    // Soporte para Hand Tracking en Meta Quest
    for (let i = 0; i < 2; i++) {
      const hand = this.renderer.xr.getHand(i);
      this.xrRig.add(hand);
      this.hands.push(hand);

      hand.addEventListener('pinchstart', () => {
        events.emit('VR_HAND_PINCH_START', { handIndex: i, hand });
      });

      hand.addEventListener('pinchend', () => {
        events.emit('VR_HAND_PINCH_END', { handIndex: i, hand });
      });
    }
  }

  private setupSessionListeners(): void {
    this.renderer.xr.addEventListener('sessionstart', () => {
      this.isXRPresenting = true;
      console.log('[XRManager] WebXR Session activa en Meta Quest / Visor.');
      events.emit('XR_SESSION_STATE', true);
    });

    this.renderer.xr.addEventListener('sessionend', () => {
      this.isXRPresenting = false;
      console.log('[XRManager] WebXR Session finalizada.');
      events.emit('XR_SESSION_STATE', false);
    });
  }

  public getActiveRaycasters(): { origin: THREE.Vector3; direction: THREE.Vector3 }[] {
    const rays: { origin: THREE.Vector3; direction: THREE.Vector3 }[] = [];

    for (const ctrlData of this.controllers) {
      const tempMatrix = new THREE.Matrix4();
      tempMatrix.identity().extractRotation(ctrlData.controller.matrixWorld);

      const origin = new THREE.Vector3();
      ctrlData.controller.getWorldPosition(origin);

      const direction = new THREE.Vector3(0, 0, -1).applyMatrix4(tempMatrix);
      rays.push({ origin, direction });
    }

    return rays;
  }

  public getControllerGamepads(): {
    right?: Gamepad;
    left?: Gamepad;
  } {
    const session = this.renderer.xr.getSession();
    if (!session) return {};

    const result: { right?: Gamepad; left?: Gamepad } = {};
    for (const source of session.inputSources) {
      if (source.gamepad) {
        if (source.handedness === 'right') {
          result.right = source.gamepad;
        } else if (source.handedness === 'left') {
          result.left = source.gamepad;
        }
      }
    }
    return result;
  }

  public updateLocomotion(delta: number): void {
    if (!this.isXRPresenting) return;

    const { left, right } = this.getControllerGamepads();

    // Desplazamiento suave con el thumbstick del mando izquierdo
    if (left && left.axes && left.axes.length >= 4) {
      const stickX = left.axes[2];
      const stickZ = left.axes[3];
      const deadzone = 0.15;

      if (Math.abs(stickX) > deadzone || Math.abs(stickZ) > deadzone) {
        const speed = 2.0 * delta;
        const cameraDirection = new THREE.Vector3();
        this.renderer.xr.getCamera().getWorldDirection(cameraDirection);
        cameraDirection.y = 0;
        cameraDirection.normalize();

        const rightVec = new THREE.Vector3();
        rightVec.crossVectors(cameraDirection, new THREE.Vector3(0, 1, 0)).normalize();

        this.xrRig.position.addScaledVector(cameraDirection, -stickZ * speed);
        this.xrRig.position.addScaledVector(rightVec, stickX * speed);

        // Limitar dentro del área de servicio del operador (detrás del mostrador)
        this.xrRig.position.x = THREE.MathUtils.clamp(this.xrRig.position.x, -2.4, 2.4);
        this.xrRig.position.z = THREE.MathUtils.clamp(this.xrRig.position.z, -3.4, -0.6);
      }
    }

    // Giro suave o snap con thumbstick del mando derecho
    if (right && right.axes && right.axes.length >= 4) {
      const turnX = right.axes[2];
      const turnDeadzone = 0.35;
      if (Math.abs(turnX) > turnDeadzone) {
        this.xrRig.rotation.y -= turnX * 1.5 * delta;
      }
    }
  }
}
