import * as THREE from 'three';

export type Updatable = (delta: number, elapsedTime: number) => void;

export class Engine {
  public readonly scene: THREE.Scene;
  public readonly camera: THREE.PerspectiveCamera;
  public readonly renderer: THREE.WebGLRenderer;
  public readonly xrRig: THREE.Group;
  
  private clock: THREE.Clock;
  private updatables: Set<Updatable> = new Set();
  private container: HTMLElement;

  constructor(containerId: string = 'app') {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Contenedor DOM con id '${containerId}' no encontrado.`);
    }
    this.container = container;

    // 1. Reloj de alta precisión
    this.clock = new THREE.Clock();

    // 2. Escena 3D
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x07111e);
    this.scene.fog = new THREE.FogExp2(0x07111e, 0.035);

    // 3. Cámara en primera persona
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.05, 50);
    this.camera.position.set(0, 1.65, -1.2); // Altura de los ojos del operador
    this.camera.lookAt(0, 1.3, 0.5); // Mirando al mostrador

    // 4. Plataforma XR Rig para anclar la cámara y los mandos/manos
    this.xrRig = new THREE.Group();
    this.xrRig.name = 'XR_Rig';
    this.xrRig.add(this.camera);
    this.scene.add(this.xrRig);

    // 5. Renderer WebGL + WebXR
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.renderer.xr.enabled = true; // Activar capacidad WebXR

    this.container.appendChild(this.renderer.domElement);

    // 6. Event listeners de redimensionamiento
    window.addEventListener('resize', this.onWindowResize.bind(this));

    // 7. Iluminación base
    this.setupLighting();

    // 8. Iniciar bucle de renderizado compatible con WebXR
    this.startLoop();
  }

  private setupLighting(): void {
    // Luz ambiental suave para sombras no totalmente negras
    const ambientLight = new THREE.AmbientLight(0xdbeafe, 0.85);
    this.scene.add(ambientLight);

    // Luz principal de techo centrada en el mostrador
    const ceilingSpot = new THREE.SpotLight(0xffffff, 2.5);
    ceilingSpot.position.set(0, 3.1, 0.2);
    ceilingSpot.target.position.set(0, 1.0, 0.2);
    ceilingSpot.angle = Math.PI / 3;
    ceilingSpot.penumbra = 0.5;
    ceilingSpot.castShadow = true;
    ceilingSpot.shadow.mapSize.width = 1024;
    ceilingSpot.shadow.mapSize.height = 1024;
    ceilingSpot.shadow.camera.near = 0.5;
    ceilingSpot.shadow.camera.far = 5;
    ceilingSpot.shadow.bias = -0.001;
    this.scene.add(ceilingSpot);
    this.scene.add(ceilingSpot.target);

    // Luz de relleno cálida institucional
    const fillLight = new THREE.DirectionalLight(0xe2e8f0, 0.6);
    fillLight.position.set(2, 2.8, -2);
    this.scene.add(fillLight);
  }

  private onWindowResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  public addUpdatable(fn: Updatable): void {
    this.updatables.add(fn);
  }

  public removeUpdatable(fn: Updatable): void {
    this.updatables.delete(fn);
  }

  private startLoop(): void {
    // setAnimationLoop es requerido para WebXR (funciona tanto en 2D como en visores XR)
    this.renderer.setAnimationLoop((_time, _frame) => {
      const delta = Math.min(this.clock.getDelta(), 0.1);
      const elapsed = this.clock.getElapsedTime();

      // Ejecutar lógica de componentes actualizables
      for (const updatable of this.updatables) {
        updatable(delta, elapsed);
      }

      // Renderizar escena
      this.renderer.render(this.scene, this.camera);
    });
  }
}
