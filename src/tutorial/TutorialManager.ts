import { events } from '../core/EventBus';

export interface TutorialTask {
  id: string;
  title: string;
  description: string;
  hint: string;
  completed: boolean;
}

export class TutorialManager {
  private static instance: TutorialManager;

  public tasks: TutorialTask[] = [
    {
      id: 'task_receive_student',
      title: '1. Recepción del Estudiante',
      description: 'Recibe a Juan Pérez López en el mostrador de atención PC PUMA.',
      hint: 'Espera a que el alumno llegue al mostrador con su credencial universitaria.',
      completed: false
    },
    {
      id: 'task_scan_nfc',
      title: '2. Escaneo en Lector NFC',
      description: 'Toma la credencial de Juan y colócala en el lector NFC con diana dorada (o pulsa [F]).',
      hint: 'Acerca la credencial al lector NFC del mostrador hasta escuchar el tono y ver el LED verde.',
      completed: false
    },
    {
      id: 'task_validate',
      title: '3. Validación en Computadora',
      description: 'En el monitor ampliado de 32", haz click en el botón [ VALIDAR USUARIO ].',
      hint: 'Apunta a la pantalla y pulsa [ VALIDAR USUARIO ] para confirmar al alumno.',
      completed: false
    },
    {
      id: 'task_deliver_laptop',
      title: '4. Asignación y Entrega de Laptop',
      description: 'Acércate al Carro 01, toma la Laptop 02 con [E] o [F] y colócala en el mostrador.',
      hint: 'Apunta a la Bahía 02 y pulsa [E] o [F] para extraer la Laptop 02 y deposítala en la zona de entrega.',
      completed: false
    },
    {
      id: 'task_return_reception',
      title: '5. Recepción de Devolución',
      description: 'Recibe a Juan de regreso en el mostrador con el equipo para su revisión técnica.',
      hint: 'Espera el término de su práctica o pulsa [ 🔔 SOLICITAR DEVOLUCIÓN ] en la pestaña DEVOLUCIÓN.',
      completed: false
    },
    {
      id: 'task_inspect',
      title: '6. Peritaje e Inspección Técnica',
      description: 'En la pestaña 6. INSPECCIÓN, revisa el equipo y emite dictamen [ ✔ EQUIPO EN BUEN ESTADO ].',
      hint: 'Apunta a la pantalla y haz click en [ ✔ EQUIPO EN BUEN ESTADO ] para dar visto bueno.',
      completed: false
    },
    {
      id: 'task_return_to_cart',
      title: '7. Resguardo en Carro 01',
      description: 'Toma la Laptop 02 con [E] o Click y presiona [F] cerca del Carro 01 para guardarla.',
      hint: 'Acércate al Carro 01 y pulsa [F] (o [E]/Click) para guardarla y conectarla a carga en la Bahía 02.',
      completed: false
    },
    {
      id: 'task_view_results',
      title: '8. Balance y Resultados de Operación',
      description: 'En el monitor, abre la pestaña 7. RESULTADOS y consulta las métricas del préstamo.',
      hint: 'Haz click en la pestaña RESULTADOS para ver la puntuación de 1,250 pts y 100% de eficiencia.',
      completed: false
    }
  ];

  private currentStepIndex: number = 0;
  private totalDistanceWalked: number = 0;

  private constructor() {
    this.setupListeners();
  }

  public static getInstance(): TutorialManager {
    if (!TutorialManager.instance) {
      TutorialManager.instance = new TutorialManager();
    }
    return TutorialManager.instance;
  }

  private setupListeners(): void {
    // 1. Recepción del estudiante
    events.on('STUDENT_AT_COUNTER', () => {
      this.completeTask('task_receive_student');
    });

    // Movimiento adicional para familiarización
    events.on('PLAYER_MOVED', (distance: number) => {
      this.totalDistanceWalked += distance;
    });

    // 2. Escaneo NFC
    events.on('CREDENTIAL_SCANNED', () => {
      this.completeTask('task_scan_nfc');
    });

    // 3. Validación de usuario
    events.on('USER_VALIDATION_TOGGLED', (isValidated: boolean) => {
      if (isValidated) {
        this.completeTask('task_validate');
      }
    });

    // 4. Entrega de laptop
    events.on('STUDENT_RECEIVED_LAPTOP', () => {
      this.completeTask('task_deliver_laptop');
    });

    // 5. Recepción de devolución en mostrador
    events.on('LOAN_RETURN_READY_FOR_INSPECTION', () => {
      this.completeTask('task_return_reception');
    });

    // 6. Dictamen de inspección técnica
    events.on('INSPECTION_DECISION_MADE', () => {
      this.completeTask('task_inspect');
    });

    // 7. Resguardo en Carro 01
    events.on('LAPTOP_SNAPPED_TO_CART', () => {
      if (this.tasks.find((t) => t.id === 'task_inspect')?.completed) {
        this.completeTask('task_return_to_cart');
      }
    });

    // 8. Consulta de resultados
    events.on('SCREEN_TAB_CHANGED', (tab: string) => {
      if (tab === 'RESULTADOS') {
        this.completeTask('task_view_results');
      }
    });
  }

  public completeTask(taskId: string): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task && !task.completed) {
      task.completed = true;

      this.updateCurrentStep();

      events.emit('TUTORIAL_TASK_COMPLETED', {
        task,
        progress: this.getProgressPercentage(),
        currentTask: this.getCurrentTask(),
        allCompleted: this.isAllCompleted()
      });

      if (this.isAllCompleted()) {
        events.emit('TUTORIAL_FINISHED');
      }
    }
  }

  private updateCurrentStep(): void {
    const nextIdx = this.tasks.findIndex((t) => !t.completed);
    this.currentStepIndex = nextIdx !== -1 ? nextIdx : this.tasks.length;
  }

  public getCurrentTask(): TutorialTask | null {
    if (this.currentStepIndex < this.tasks.length) {
      return this.tasks[this.currentStepIndex];
    }
    return null;
  }

  public getProgressPercentage(): number {
    const completedCount = this.tasks.filter((t) => t.completed).length;
    return Math.round((completedCount / this.tasks.length) * 100);
  }

  public isAllCompleted(): boolean {
    return this.tasks.every((t) => t.completed);
  }

  public resetTutorial(): void {
    this.tasks.forEach((t) => (t.completed = false));
    this.currentStepIndex = 0;
    this.totalDistanceWalked = 0;
    events.emit('TUTORIAL_RESET');
  }
}

export const tutorial = TutorialManager.getInstance();
