import * as THREE from 'three';
import { StudentNPC, StudentConfig } from './StudentNPC';
import { Laptop } from '../entities/Laptop';
import { Credential } from '../entities/Credential';
import { audio } from '../audio/AudioManager';
import { inventory } from '../inventory/InventoryManager';
import { loanManager } from '../loan/LoanManager';
import { events } from '../core/EventBus';

export type NPCWorkflow =
  | 'ENTERING'
  | 'AT_COUNTER'
  | 'WAITING_VALIDATION'
  | 'WAITING_EQUIPMENT'
  | 'RECEIVING_EQUIPMENT'
  | 'WALKING_TO_DESK'
  | 'WORKING'
  | 'RETURNING_TO_COUNTER'
  | 'AT_COUNTER_RETURNING'
  | 'EXITING'
  | 'COMPLETED';

export class NPCManager {
  public student: StudentNPC;
  public currentState: NPCWorkflow = 'ENTERING';

  // Rutas en el módulo
  private readonly entrancePos = new THREE.Vector3(0.65, 0, 3.7);
  private readonly counterPos = new THREE.Vector3(0.65, 0, 0.55);
  private readonly workChairPos = new THREE.Vector3(-1.6, 0, 2.05);

  private credentialRef?: Credential;
  private laptopsRef: Laptop[] = [];
  private studySessionTimeout: any = null;
  private isCredentialScanned: boolean = false;
  private isUserValidated: boolean = false;

  // Banderas de entrega y devolución de credencial institucional
  private hasStudentReceivedCredentialInitial: boolean = false;
  private isReturnCredentialScanned: boolean = false;
  private isLaptopStoredInCart: boolean = false;
  private hasReturnedCredentialFinal: boolean = false;
  private isSimulationStarted: boolean = false;

  constructor(scene: THREE.Scene) {
    // 1. Configuración de Juan Pérez López (NPC 1 - Alumno Correcto)
    const juanConfig: StudentConfig = {
      id: 'student_juan_perez',
      name: 'Juan Pérez López',
      accountNumber: '32145678',
      career: 'Facultad de Ingeniería',
      jacketColor: 0x002B49, // Azul UNAM
      pantsColor: 0x1E293B,  // Pantalón casual
      hairColor: 0x1F2937    // Cabello oscuro
    };

    this.student = new StudentNPC(juanConfig);
    this.student.group.position.copy(this.entrancePos);
    this.student.group.rotation.y = Math.PI; // Mirando hacia el mostrador
    scene.add(this.student.group);

    this.setupListeners();
  }

  public setCredential(cred: Credential): void {
    this.credentialRef = cred;
  }

  public setLaptops(laptops: Laptop[]): void {
    this.laptopsRef = laptops;
  }

  private setupListeners(): void {
    events.on('SIMULATION_STARTED', () => {
      if (!this.isSimulationStarted) {
        this.isSimulationStarted = true;
        this.startStudentFlow();
      }
    });

    // Escaneo de credencial
    events.on('CREDENTIAL_SCANNED', () => {
      this.isCredentialScanned = true;
      if (this.currentState === 'AT_COUNTER') {
        this.currentState = 'WAITING_VALIDATION';
        this.student.say('¡Perfecto! Ya leyó mi credencial. Valida mis datos en el monitor.', 4.0);
      } else if (this.currentState === 'AT_COUNTER_RETURNING') {
        this.isReturnCredentialScanned = true;
        this.student.say('¡Excelente! Ya registraste la credencial de devolución. Ahora por favor revisa el equipo.', 4.5);
        events.emit('RETURN_CREDENTIAL_SCANNED');
      }
    });

    // Validación de usuario en pantalla
    events.on('USER_VALIDATION_TOGGLED', (isValid: boolean) => {
      this.isUserValidated = isValid;
      if (isValid) {
        if (this.currentState === 'WAITING_VALIDATION' || this.currentState === 'AT_COUNTER' || this.currentState === 'ENTERING') {
          if (this.currentState !== 'ENTERING') {
            this.currentState = 'WAITING_EQUIPMENT';
            this.student.say('¡Excelente! Mis datos están validados. Por favor devuélveme mi credencial para recibir la laptop.', 4.5);
          }
        }
      }
    });

    // Laptop colocada en mostrador inicialmente
    events.on('INVENTORY_UPDATED', (data: { item: { id: string; status: string } }) => {
      if (data.item.status === 'EN_MOSTRADOR') {
        const laptop = this.laptopsRef.find((l) => l.id === data.item.id);
        if (!laptop) return;

        if (this.currentState === 'WAITING_EQUIPMENT') {
          if (!this.hasStudentReceivedCredentialInitial) {
            this.student.say('Por favor devuélveme primero mi credencial de estudiante para poder recibir la laptop.', 4.5);
            return;
          }

          if (laptop.isMaintenance) {
            this.student.say('Disculpa, este equipo tiene etiqueta de mantenimiento. ¿Podrías darme uno funcional por favor?', 4.5);
          } else {
            this.deliverLaptopToStudent(laptop);
          }
        } else if (this.currentState === 'AT_COUNTER') {
          this.student.say('Por favor escanea primero mi credencial y valida mis datos en el monitor.', 4.0);
        } else if (this.currentState === 'WAITING_VALIDATION') {
          this.student.say('Por favor confirma mi validación en la pantalla antes de entregarme el equipo.', 4.0);
        }
      }
    });

    // Laptop resguardada en el Carro 01 durante la devolución
    events.on('LAPTOP_SNAPPED_TO_CART', () => {
      if (this.currentState === 'AT_COUNTER_RETURNING') {
        this.isLaptopStoredInCart = true;
        this.student.say('¡Equipo resguardado con éxito! Por favor devuélveme mi credencial para retirarme.', 4.5);
      }
    });

    // Solicitud manual de devolución de equipo desde el monitor
    events.on('REQUEST_STUDENT_RETURN', () => {
      this.startReturnFlow();
    });

    // Dictamen técnico emitido en monitor (Fase 5)
    events.on('INSPECTION_DECISION_MADE', (verdict: 'BUEN_ESTADO' | 'INCIDENCIA') => {
      if (this.currentState === 'AT_COUNTER_RETURNING') {
        if (verdict === 'BUEN_ESTADO') {
          this.student.say('¡Excelente! Dictamen conforme. Resguarda la laptop en el Carro 01 y devuélveme mi credencial.', 5.0);
          audio.playVictoryChime();
        } else {
          this.student.say('Entendido, firmaré el reporte de incidencia. Resguarda la laptop y devuélveme mi credencial.', 5.0);
          audio.playWarningBeep();
        }
      }
    });

    // Reinicio de turno institucional (Fase 6)
    events.on('SHIFT_RESET', () => {
      this.resetNPC();
    });
  }

  private checkForLaptopOnCounter(): void {
    if (this.currentState !== 'WAITING_EQUIPMENT') return;
    if (!this.hasStudentReceivedCredentialInitial) return;
    const laptopOnCounter = this.laptopsRef.find(
      (l) => !l.isGrabbed() && inventory.getItem(l.id)?.status === 'EN_MOSTRADOR' && !l.isMaintenance
    );
    if (laptopOnCounter) {
      this.deliverLaptopToStudent(laptopOnCounter);
    }
  }

  private startStudentFlow(): void {
    // Iniciar caminata desde la puerta hacia el mostrador de atención
    setTimeout(() => {
      this.student.setTarget(this.counterPos, 1.4);
      this.student.say('¡Hola! Vengo a solicitar un préstamo de laptop.', 4.0);
    }, 1200);
  }

  private deliverLaptopToStudent(laptop: Laptop): void {
    this.currentState = 'RECEIVING_EQUIPMENT';
    this.student.say('¡Muchas gracias! Voy a la mesa a avanzar mi proyecto.', 4.5);
    events.emit('STUDENT_RECEIVED_LAPTOP', { laptopId: laptop.id, studentName: this.student.config.name });

    // Pequeño retardo natural para recoger la laptop
    setTimeout(() => {
      this.student.receiveLaptop(laptop);
      inventory.updateStatus(laptop.id, 'PRESTADO');
      loanManager.registerActiveLoan(laptop.id, laptop.tag);
      this.currentState = 'WALKING_TO_DESK';

      // Caminar hacia la silla de estudio
      this.student.setTarget(this.workChairPos, 1.3);
    }, 1200);
  }

  public startReturnFlow(): void {
    if (this.currentState !== 'WORKING' && this.currentState !== 'WALKING_TO_DESK') return;

    if (this.studySessionTimeout) {
      clearTimeout(this.studySessionTimeout);
      this.studySessionTimeout = null;
    }

    if (this.currentState === 'WORKING') {
      this.student.standFromDesk();
    }
    this.currentState = 'RETURNING_TO_COUNTER';
    this.student.say('¡Listo! Ya terminé mi práctica de laboratorio. Voy a devolver la laptop al mostrador.', 4.5);

    // Pausa breve para levantarse y enfilarse al mostrador
    setTimeout(() => {
      this.student.setTarget(this.counterPos, 1.3);
    }, 600);
  }

  public resetNPC(): void {
    if (this.studySessionTimeout) {
      clearTimeout(this.studySessionTimeout);
      this.studySessionTimeout = null;
    }
    this.currentState = 'ENTERING';
    this.isCredentialScanned = false;
    this.isUserValidated = false;
    this.hasStudentReceivedCredentialInitial = false;
    this.isReturnCredentialScanned = false;
    this.isLaptopStoredInCart = false;
    this.hasReturnedCredentialFinal = false;

    this.student.standFromDesk();
    this.student.group.visible = true;
    this.student.group.position.copy(this.entrancePos);
    this.student.group.rotation.y = Math.PI;
    if (this.credentialRef) {
      this.credentialRef.group.visible = false;
    }
    if (this.isSimulationStarted) {
      this.startStudentFlow();
    }
  }

  public update(delta: number, cameraPos: THREE.Vector3): void {
    this.student.update(delta, cameraPos);

    // 1. Detección de llegada al mostrador al inicio
    if (this.currentState === 'ENTERING' && !this.student.isWalking) {
      const dist = this.student.group.position.distanceTo(this.counterPos);
      if (dist < 0.25) {
        this.student.group.rotation.y = Math.PI; // Mirando hacia el operador
        if (this.credentialRef) {
          this.credentialRef.group.visible = true;
          audio.playThudSound();
        }
        if (this.isUserValidated) {
          this.currentState = 'WAITING_EQUIPMENT';
          this.student.say('¡Hola! Veo que ya validaste mis datos. Devuélveme mi credencial para recibir la laptop.', 4.0);
        } else if (this.isCredentialScanned) {
          this.currentState = 'WAITING_VALIDATION';
          this.student.say('¡Hola! Ya escaneaste mi credencial. Por favor confirma mi validación en el monitor.', 4.0);
        } else {
          this.currentState = 'AT_COUNTER';
          this.student.say('¡Hola! Vengo a solicitar un préstamo de laptop. Aquí tienes mi credencial.', 4.5);
        }
        events.emit('STUDENT_AT_COUNTER', { studentName: this.student.config.name });
      }
    }

    // 2. Detección de llegada a la silla de trabajo
    if (this.currentState === 'WALKING_TO_DESK' && !this.student.isWalking) {
      const dist = this.student.group.position.distanceTo(this.workChairPos);
      if (dist < 0.2) {
        this.currentState = 'WORKING';
        this.student.sitAtDesk(this.workChairPos);
        this.student.say('Listo, comenzando a trabajar en la laptop.', 4.0);
        audio.playVictoryChime();
        events.emit('STUDENT_STARTED_WORKING', { studentName: this.student.config.name });

        // Temporizador de sesión de estudio: después de 18 segundos, devuelve el equipo
        this.studySessionTimeout = setTimeout(() => {
          this.startReturnFlow();
        }, 18000);
      }
    }

    // 3. Detección de llegada al mostrador para DEVOLUCIÓN
    if (this.currentState === 'RETURNING_TO_COUNTER' && !this.student.isWalking) {
      const dist = this.student.group.position.distanceTo(this.counterPos);
      if (dist < 0.2) {
        this.currentState = 'AT_COUNTER_RETURNING';
        this.student.group.rotation.y = Math.PI; // Mirando hacia el operador
        const returnedLaptop = this.student.returnLaptopToCounter();
        if (returnedLaptop) {
          inventory.updateStatus(returnedLaptop.id, 'EN_MOSTRADOR');
          events.emit('LAPTOP_RETURNED_TO_COUNTER', { laptopId: returnedLaptop.id, laptop: returnedLaptop });
        }

        // Juan también coloca su credencial sobre el mostrador para el registro de devolución
        if (this.credentialRef) {
          this.credentialRef.group.position.set(0.35, 1.102, 0.12);
          this.credentialRef.group.rotation.set(0, -Math.PI / 10, 0);
          this.credentialRef.group.visible = true;
        }
        this.isReturnCredentialScanned = false;
        this.isLaptopStoredInCart = false;
        this.hasReturnedCredentialFinal = false;

        audio.playThudSound();
        this.student.say('Aquí tienes la laptop y mi credencial para registrar la devolución. ¿Todo en orden?', 5.0);
        events.emit('LOAN_RETURN_READY_FOR_INSPECTION');
      }
    }

    // 3b. Detección de devolución de credencial a Juan en el mostrador
    if (this.credentialRef && this.credentialRef.group.visible && !this.credentialRef.isGrabbed()) {
      const credWorldPos = new THREE.Vector3();
      this.credentialRef.group.getWorldPosition(credWorldPos);

      // Zona del mostrador frente a Juan (X: [0.20, 0.90], Z: [-0.15, 0.40], Y: [1.05, 1.25])
      const isNearJuanDesk = credWorldPos.x >= 0.20 && credWorldPos.x <= 0.90 &&
                             credWorldPos.z >= -0.15 && credWorldPos.z <= 0.40 &&
                             credWorldPos.y >= 1.05 && credWorldPos.y <= 1.25;

      // A) Fase 1: Devolución de credencial en el préstamo inicial
      if (this.currentState === 'WAITING_EQUIPMENT' && this.isUserValidated && !this.hasStudentReceivedCredentialInitial && isNearJuanDesk) {
        this.credentialRef.group.visible = false;
        this.hasStudentReceivedCredentialInitial = true;
        audio.playVictoryChime();
        this.student.say('¡Muchas gracias por devolverme mi credencial! Ahora quedo a la espera de la laptop.', 4.5);
        events.emit('STUDENT_RECEIVED_CREDENTIAL', { studentName: this.student.config.name });
        this.checkForLaptopOnCounter();
      }

      // B) Fase 2: Devolución final de credencial al concluir la devolución
      if (this.currentState === 'AT_COUNTER_RETURNING' && this.isLaptopStoredInCart && this.isReturnCredentialScanned && !this.hasReturnedCredentialFinal && isNearJuanDesk) {
        this.credentialRef.group.visible = false;
        this.hasReturnedCredentialFinal = true;
        audio.playVictoryChime();
        this.student.say('¡Todo en orden y completo! Muchas gracias por la atención y por entregarme mi credencial. ¡Hasta luego!', 5.0);
        events.emit('STUDENT_RECEIVED_CREDENTIAL_RETURN', { studentName: this.student.config.name });

        setTimeout(() => {
          this.currentState = 'EXITING';
          this.student.exitRoom(this.entrancePos);
        }, 1600);
      }
    }

    // 4. Detección de salida del aula por la puerta general
    if (this.currentState === 'EXITING' && !this.student.isWalking) {
      const dist = this.student.group.position.distanceTo(this.entrancePos);
      if (dist < 0.25) {
        this.currentState = 'COMPLETED';
        this.student.group.visible = false;
        events.emit('STUDENT_EXITED_ROOM');
      }
    }
  }
}
