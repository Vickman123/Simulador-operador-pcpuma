import * as THREE from 'three';
import { Laptop } from '../entities/Laptop';

export interface StudentConfig {
  id: string;
  name: string;
  accountNumber: string;
  career: string;
  jacketColor: number;
  pantsColor: number;
  hairColor: number;
}

export class StudentNPC {
  public readonly config: StudentConfig;
  public readonly group: THREE.Group;

  // Extremidades para animación procedural
  private leftLeg!: THREE.Group;
  private rightLeg!: THREE.Group;
  private leftKnee!: THREE.Group;
  private rightKnee!: THREE.Group;
  private leftArm!: THREE.Group;
  private rightArm!: THREE.Group;
  private head!: THREE.Group;
  private torso!: THREE.Group;

  // Globo de diálogo 3D
  private speechBubble!: THREE.Mesh;
  private speechCanvas!: HTMLCanvasElement;
  private speechCtx!: CanvasRenderingContext2D;
  private speechTex!: THREE.CanvasTexture;
  private speechTimer: number = 0;

  // Estado de locomoción
  public isWalking: boolean = false;
  public isSeated: boolean = false;
  private walkTime: number = 0;
  private targetPosition: THREE.Vector3 | null = null;
  private walkSpeed: number = 1.6;

  // Laptop en posesión
  public heldLaptop: Laptop | null = null;

  constructor(config: StudentConfig) {
    this.config = config;
    this.group = new THREE.Group();
    this.group.name = `StudentNPC_${this.config.name.replace(/\s+/g, '_')}`;

    this.buildHumanoidModel();
    this.buildSpeechBubble();
  }

  private buildHumanoidModel(): void {
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xF5D0C5, roughness: 0.6 });
    const jacketMat = new THREE.MeshStandardMaterial({ color: this.config.jacketColor, roughness: 0.5 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: this.config.pantsColor, roughness: 0.6 });
    const hairMat = new THREE.MeshStandardMaterial({ color: this.config.hairColor, roughness: 0.8 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0xF8FAFC, roughness: 0.4 });
    const backpackMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.7 });

    // 1. TORSO Y CUELLO
    this.torso = new THREE.Group();
    this.torso.position.set(0, 0.82, 0);

    // Chamarra institucional
    const jacket = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.52, 0.22), jacketMat);
    jacket.position.y = 0.26;
    jacket.castShadow = true;
    this.torso.add(jacket);

    // Franja dorada decorativa en chamarra
    const trim = new THREE.Mesh(
      new THREE.BoxGeometry(0.384, 0.04, 0.224),
      new THREE.MeshStandardMaterial({ color: 0xD59F0F, metalness: 0.5, roughness: 0.4 })
    );
    trim.position.y = 0.22;
    this.torso.add(trim);

    // Mochila en espalda
    const backpack = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.38, 0.14), backpackMat);
    backpack.position.set(0, 0.28, -0.16);
    backpack.castShadow = true;
    this.torso.add(backpack);

    // Cuello
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.08), skinMat);
    neck.position.y = 0.56;
    this.torso.add(neck);

    this.group.add(this.torso);

    // 2. CABEZA Y CABELLO
    this.head = new THREE.Group();
    this.head.position.set(0, 1.45, 0);

    const headMesh = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.22, 0.20), skinMat);
    headMesh.position.y = 0.11;
    headMesh.castShadow = true;
    this.head.add(headMesh);

    // Cabello estilizado
    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.10, 0.22), hairMat);
    hair.position.y = 0.21;
    this.head.add(hair);

    // Ojos estilizados
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x1E293B });
    const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.01), eyeMat);
    leftEye.position.set(-0.05, 0.12, 0.105);
    this.head.add(leftEye);

    const rightEye = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.01), eyeMat);
    rightEye.position.set(0.05, 0.12, 0.105);
    this.head.add(rightEye);

    this.group.add(this.head);

    // 3. BRAZOS ARTICULADOS EN HOMBROS
    const buildArm = (isLeft: boolean) => {
      const armPivot = new THREE.Group();
      const xSign = isLeft ? -1 : 1;
      armPivot.position.set(xSign * 0.24, 1.34, 0);

      // Manga / Brazo superior
      const sleeve = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.26, 0.11), jacketMat);
      sleeve.position.y = -0.13;
      sleeve.castShadow = true;
      armPivot.add(sleeve);

      // Mano
      const hand = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.14, 0.09), skinMat);
      hand.position.y = -0.32;
      hand.castShadow = true;
      armPivot.add(hand);

      this.group.add(armPivot);
      return armPivot;
    };

    this.leftArm = buildArm(true);
    this.rightArm = buildArm(false);

    // 4. PIERNAS ARTICULADAS (CADERA + RODILLA)
    const buildLeg = (isLeft: boolean) => {
      const hipPivot = new THREE.Group();
      const xSign = isLeft ? -1 : 1;
      hipPivot.position.set(xSign * 0.11, 0.82, 0);

      // Muslo (Thigh) - longitud 0.38m
      const thigh = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.38, 0.13), pantsMat);
      thigh.position.y = -0.19;
      thigh.castShadow = true;
      hipPivot.add(thigh);

      // Rodilla articulada a -0.38m de la cadera
      const kneePivot = new THREE.Group();
      kneePivot.position.set(0, -0.38, 0);

      // Pantorrilla (Shin) - longitud 0.38m
      const shin = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.38, 0.12), pantsMat);
      shin.position.y = -0.19;
      shin.castShadow = true;
      kneePivot.add(shin);

      // Zapato en la base de la pantorrilla
      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.09, 0.18), shoeMat);
      shoe.position.set(0, -0.38, 0.02);
      shoe.castShadow = true;
      kneePivot.add(shoe);

      hipPivot.add(kneePivot);
      this.group.add(hipPivot);

      if (isLeft) {
        this.leftKnee = kneePivot;
      } else {
        this.rightKnee = kneePivot;
      }

      return hipPivot;
    };

    this.leftLeg = buildLeg(true);
    this.rightLeg = buildLeg(false);
  }

  private buildSpeechBubble(): void {
    this.speechCanvas = document.createElement('canvas');
    this.speechCanvas.width = 512;
    this.speechCanvas.height = 256;
    this.speechCtx = this.speechCanvas.getContext('2d')!;

    this.speechTex = new THREE.CanvasTexture(this.speechCanvas);
    this.speechTex.generateMipmaps = false;
    this.speechTex.minFilter = THREE.LinearFilter;

    const mat = new THREE.MeshBasicMaterial({
      map: this.speechTex,
      transparent: true,
      depthWrite: false
    });

    this.speechBubble = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.6), mat);
    this.speechBubble.position.set(0, 2.05, 0);
    this.speechBubble.visible = false;
    this.group.add(this.speechBubble);
  }

  public say(text: string, durationSec: number = 4.5): void {
    const ctx = this.speechCtx;
    const w = this.speechCanvas.width;
    const h = this.speechCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // Globo estilo institucional
    ctx.fillStyle = 'rgba(0, 27, 48, 0.95)';
    ctx.strokeStyle = '#D59F0F';
    ctx.lineWidth = 6;

    // Cuerpo del globo
    ctx.beginPath();
    ctx.roundRect(10, 10, w - 20, h - 50, 24);
    ctx.fill();
    ctx.stroke();

    // Piquito inferior del globo
    ctx.beginPath();
    ctx.moveTo(w / 2 - 20, h - 50);
    ctx.lineTo(w / 2, h - 10);
    ctx.lineTo(w / 2 + 20, h - 50);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Nombre del Alumno
    ctx.fillStyle = '#D59F0F';
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${this.config.name} (${this.config.career})`, w / 2, 50);

    // Texto del mensaje
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '22px sans-serif';
    
    // Auto-salto de línea sencillo
    const words = text.split(' ');
    let line = '';
    let y = 95;
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > w - 60 && i > 0) {
        ctx.fillText(line, w / 2, y);
        line = words[i] + ' ';
        y += 32;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, w / 2, y);

    this.speechTex.needsUpdate = true;
    this.speechBubble.visible = true;
    this.speechTimer = durationSec;
  }

  public setTarget(target: THREE.Vector3, speed: number = 1.6): void {
    this.targetPosition = target.clone();
    this.walkSpeed = speed;
    this.isWalking = true;
  }

  public receiveLaptop(laptop: Laptop): void {
    this.heldLaptop = laptop;
    // Emparentar la laptop a los brazos del estudiante
    this.group.add(laptop.group);
    laptop.group.position.set(0, 1.05, 0.28);
    laptop.group.rotation.set(0.2, 0, 0);
    laptop.setOpen(false); // Cerrada mientras camina

    // Poner brazos en postura de cargar laptop
    this.leftArm.rotation.x = -Math.PI / 3;
    this.rightArm.rotation.x = -Math.PI / 3;
  }

  public sitAtDesk(chairPos: THREE.Vector3): void {
    this.isSeated = true;
    this.isWalking = false;
    this.targetPosition = null;

    // Altura del asiento: Y = 0.46m. Como la cadera local está en Y = 0.82m:
    // Y del grupo = 0.46 - 0.82 = -0.36m (Posición anatómica perfecta sobre el asiento)
    this.group.position.set(chairPos.x, -0.36, chairPos.z);
    this.group.rotation.set(0, 0, 0); // Mirando hacia la mesa

    // 1. Caderas a 90° (muslos horizontales sobre la silla)
    this.leftLeg.rotation.x = -Math.PI / 2;
    this.rightLeg.rotation.x = -Math.PI / 2;

    // 2. Rodillas a 90° (pantorrillas verticales hacia el piso)
    this.leftKnee.rotation.x = Math.PI / 2;
    this.rightKnee.rotation.x = Math.PI / 2;

    // 3. Colocar la laptop abierta sobre la mesa justo frente a él
    if (this.heldLaptop) {
      const parentScene = this.group.parent;
      if (parentScene) {
        parentScene.add(this.heldLaptop.group);
      }
      // Colocar sobre la mesa del estudiante (Y = 0.77m, Z = chairPos.z + 0.35m)
      this.heldLaptop.group.position.set(chairPos.x, 0.77, chairPos.z + 0.35);
      this.heldLaptop.group.rotation.set(0, Math.PI, 0); // Orientada hacia el estudiante
      this.heldLaptop.setOpen(true);
    }

    // 4. Brazos descansando sobre la mesa para teclear en la laptop
    this.leftArm.rotation.x = -Math.PI / 2.7;
    this.rightArm.rotation.x = -Math.PI / 2.7;
  }

  public standFromDesk(): void {
    this.isSeated = false;
    this.isWalking = false;
    this.targetPosition = null;

    // Regresar a postura de pie sobre el suelo
    this.group.position.y = 0;
    this.leftLeg.rotation.set(0, 0, 0);
    this.rightLeg.rotation.set(0, 0, 0);
    this.leftKnee.rotation.set(0, 0, 0);
    this.rightKnee.rotation.set(0, 0, 0);

    // Si tiene laptop sobre la mesa, cerrarla y recogerla en brazos
    if (this.heldLaptop) {
      this.heldLaptop.setOpen(false);
      this.group.add(this.heldLaptop.group);
      this.heldLaptop.group.position.set(0, 1.05, 0.28);
      this.heldLaptop.group.rotation.set(0.2, 0, 0);

      // Brazos en postura de sujeción
      this.leftArm.rotation.x = -Math.PI / 3;
      this.rightArm.rotation.x = -Math.PI / 3;
    }
  }

  public returnLaptopToCounter(): Laptop | null {
    if (!this.heldLaptop) return null;

    const laptop = this.heldLaptop;
    this.heldLaptop = null;

    // Depositar sobre la superficie del mostrador (Y = 1.101m) en la zona de atención
    const parentScene = this.group.parent;
    if (parentScene) {
      parentScene.add(laptop.group);
    }
    laptop.group.position.set(0.65, 1.101, 0.05);
    laptop.group.rotation.set(0, -Math.PI / 8, 0);
    laptop.setOpen(false);

    // Brazos a posición natural
    this.leftArm.rotation.x = 0;
    this.rightArm.rotation.x = 0;

    return laptop;
  }

  public exitRoom(doorPos: THREE.Vector3): void {
    this.setTarget(doorPos, 1.35);
  }

  public update(delta: number, cameraPosition: THREE.Vector3): void {
    // 1. Temporizador del globo de diálogo
    if (this.speechTimer > 0) {
      this.speechTimer -= delta;
      if (this.speechTimer <= 0) {
        this.speechBubble.visible = false;
      }
    }

    // 2. Hacer que el globo de diálogo siempre mire hacia la cámara (Billboard horizontal exacto)
    if (this.speechBubble.visible) {
      const bubbleWorldPos = new THREE.Vector3();
      this.speechBubble.getWorldPosition(bubbleWorldPos);
      this.speechBubble.lookAt(cameraPosition.x, bubbleWorldPos.y, cameraPosition.z);
    }

    // 3. Animación de tecleo si está sentado en la mesa de estudio
    if (this.isSeated) {
      this.walkTime += delta * 5.0;
      this.leftArm.rotation.x = -Math.PI / 2.7 + Math.sin(this.walkTime * 2.5) * 0.03;
      this.rightArm.rotation.x = -Math.PI / 2.7 + Math.cos(this.walkTime * 2.5) * 0.03;
      return;
    }

    // 4. Respiración sutil / Idle si está de pie esperando
    if (!this.isWalking) {
      this.walkTime += delta * 1.8;
      this.torso.position.y = 0.82 + Math.sin(this.walkTime) * 0.005;
      return;
    }

    // 5. Animación y desplazamiento si está caminando
    if (this.isWalking && this.targetPosition) {
      const currentPos = this.group.position;
      const dir = new THREE.Vector3().subVectors(this.targetPosition, currentPos);
      dir.y = 0; // Solo en plano horizontal
      const dist = dir.length();

      if (dist > 0.08) {
        dir.normalize();
        
        // Orientación del cuerpo hacia el objetivo
        const angle = Math.atan2(dir.x, dir.z);
        this.group.rotation.y = THREE.MathUtils.lerp(this.group.rotation.y, angle, delta * 8.0);

        // Desplazamiento
        currentPos.addScaledVector(dir, this.walkSpeed * delta);

        // Animación procedural de caminado con flexión de rodillas
        this.walkTime += delta * 7.5;
        const legSwing = Math.sin(this.walkTime) * 0.55;
        this.leftLeg.rotation.x = legSwing;
        this.rightLeg.rotation.x = -legSwing;
        this.leftKnee.rotation.x = Math.max(0, -legSwing * 0.5);
        this.rightKnee.rotation.x = Math.max(0, legSwing * 0.5);

        // Si no está cargando una laptop, balancear brazos naturalmente
        if (!this.heldLaptop) {
          this.leftArm.rotation.x = -legSwing * 0.45;
          this.rightArm.rotation.x = legSwing * 0.45;
        }

        // Cadencia vertical del torso
        this.torso.position.y = 0.82 + Math.abs(Math.sin(this.walkTime)) * 0.03;
      } else {
        // Llegó al objetivo
        this.isWalking = false;
        this.leftLeg.rotation.x = 0;
        this.rightLeg.rotation.x = 0;
        this.leftKnee.rotation.x = 0;
        this.rightKnee.rotation.x = 0;
        if (!this.heldLaptop) {
          this.leftArm.rotation.x = 0;
          this.rightArm.rotation.x = 0;
        }
        this.torso.position.y = 0.82;
      }
    }
  }
}
