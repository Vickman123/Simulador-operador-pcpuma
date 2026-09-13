import { events } from '../core/EventBus';
import { scoreManager } from '../score/ScoreManager';

export class DesktopHUD {
  private reticle: HTMLElement | null;
  private actionPrompt: HTMLElement | null;
  private promptText: HTMLElement | null;
  private statusMode: HTMLElement | null;
  private statusHolding: HTMLElement | null;
  private statusState: HTMLElement | null;
  private statusScore: HTMLElement | null;
  private statusStreak: HTMLElement | null;
  private statusTimer: HTMLElement | null;
  private floatingContainer: HTMLElement | null;

  constructor() {
    this.reticle = document.getElementById('reticle');
    this.actionPrompt = document.getElementById('action-prompt');
    this.promptText = document.getElementById('prompt-text');
    this.statusMode = document.getElementById('status-mode');
    this.statusHolding = document.getElementById('status-holding');
    this.statusState = document.getElementById('status-state');
    this.statusScore = document.getElementById('status-score');
    this.statusStreak = document.getElementById('status-streak');
    this.statusTimer = document.getElementById('status-timer');
    this.floatingContainer = document.getElementById('floating-scores-container');

    this.setupEventListeners();
    this.setupMenuModals();
  }

  private setupEventListeners(): void {
    // 1. Hover sobre objeto interactuable
    events.on('OBJECT_HOVER_START', (data: { id: string; prompt: string; key?: string }) => {
      if (this.reticle) {
        this.reticle.classList.add('active');
      }
      if (this.actionPrompt && this.promptText) {
        const badge = this.actionPrompt.querySelector('.key-badge') as HTMLElement;
        if (badge) {
          badge.textContent = data.key || 'E';
        }
        this.promptText.textContent = data.prompt;
        this.actionPrompt.classList.remove('hidden');
      }
    });

    events.on('OBJECT_HOVER_END', () => {
      if (this.reticle) {
        this.reticle.classList.remove('active');
      }
      if (this.actionPrompt) {
        this.actionPrompt.classList.add('hidden');
      }
    });

    // 2. Objeto Agarrado
    events.on('OBJECT_GRABBED', (data: { id: string; name: string }) => {
      if (this.reticle) {
        this.reticle.classList.remove('active');
        this.reticle.classList.add('holding');
      }
      if (this.actionPrompt && this.promptText) {
        const badge = this.actionPrompt.querySelector('.key-badge') as HTMLElement;
        if (badge) {
          badge.textContent = 'Q / R';
        }
        this.promptText.textContent = 'Rotar  |  [E] Soltar en Mostrador  |  [F] Acción Rápida';
        this.actionPrompt.classList.remove('hidden');
      }
      if (this.statusHolding) {
        this.statusHolding.textContent = data.name;
        this.statusHolding.style.color = '#38BDF8';
      }
      if (this.statusState) {
        this.statusState.textContent = 'Manipulando Equipo';
      }
    });

    // 3. Objeto Soltado
    events.on('OBJECT_RELEASED', () => {
      if (this.reticle) {
        this.reticle.classList.remove('holding');
      }
      if (this.actionPrompt) {
        this.actionPrompt.classList.add('hidden');
      }
      if (this.statusHolding) {
        this.statusHolding.textContent = 'Libre';
        this.statusHolding.style.color = '#FFFFFF';
      }
      if (this.statusState) {
        this.statusState.textContent = 'Operador Activo';
      }
    });

    // 4. Conmutación a WebXR
    events.on('XR_SESSION_STATE', (isVR: boolean) => {
      if (this.statusMode) {
        this.statusMode.textContent = isVR ? 'WebXR (Meta Quest)' : 'Escritorio (WASD)';
        this.statusMode.style.color = isVR ? '#10B981' : '#FFFFFF';
      }

      const hudOverlay = document.getElementById('hud-overlay');
      if (hudOverlay) {
        // En VR podemos atenuar el HUD de pantalla 2D ya que la interacción ocurre en el espacio 3D
        hudOverlay.style.opacity = isVR ? '0.2' : '1.0';
      }
    });

    // 5. Actualización de Score y Racha en Vivo (Fase 6)
    events.on('SCORE_UPDATED', (data: { score: number; streak: number }) => {
      if (this.statusScore) {
        this.statusScore.textContent = `${data.score.toLocaleString()} PTS`;
      }
      if (this.statusStreak) {
        this.statusStreak.textContent = `x${data.streak} ${data.streak > 1 ? '🔥' : ''}`;
        this.statusStreak.style.color = data.streak > 1 ? '#F59E0B' : '#10B981';
      }
    });

    // 6. Notificaciones flotantes de puntuación
    events.on('FLOATING_SCORE_DISPLAY', (data: { text: string; streak?: string; isBonus: boolean }) => {
      this.showFloatingScore(data);
    });
  }

  private showFloatingScore(data: { text: string; streak?: string; isBonus: boolean }): void {
    if (!this.floatingContainer) return;

    const popup = document.createElement('div');
    popup.className = `floating-score-item ${data.isBonus ? 'bonus' : 'penalty'}`;
    popup.innerHTML = `
      <span class="score-val">${data.text}</span>
      ${data.streak ? `<span class="score-streak">${data.streak}</span>` : ''}
    `;

    this.floatingContainer.appendChild(popup);

    setTimeout(() => {
      popup.classList.add('fade-out');
      setTimeout(() => {
        popup.remove();
      }, 400);
    }, 1800);
  }

  private setupMenuModals(): void {
    const btnControls = document.getElementById('btn-controls');
    const modalControls = document.getElementById('modal-controls');
    const btnCloseControls = document.getElementById('btn-close-controls');
    const btnControlsOk = document.getElementById('btn-modal-controls-ok');

    const btnSettings = document.getElementById('btn-settings');
    const modalSettings = document.getElementById('modal-settings');
    const btnCloseSettings = document.getElementById('btn-close-settings');
    const btnSettingsSave = document.getElementById('btn-modal-settings-save');

    const openModal = (modal: HTMLElement | null) => {
      if (modal) modal.classList.remove('hidden');
    };

    const closeModal = (modal: HTMLElement | null) => {
      if (modal) modal.classList.add('hidden');
    };

    btnControls?.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(modalControls);
    });

    btnCloseControls?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal(modalControls);
    });

    btnControlsOk?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal(modalControls);
    });

    btnSettings?.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(modalSettings);
    });

    btnCloseSettings?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal(modalSettings);
    });

    btnSettingsSave?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal(modalSettings);
    });

    // Control deslizante de volumen de audio
    const volumeSlider = document.getElementById('setting-volume') as HTMLInputElement | null;
    const volumeVal = document.getElementById('volume-val');
    volumeSlider?.addEventListener('input', () => {
      if (volumeVal) {
        volumeVal.textContent = `${volumeSlider.value}%`;
      }
      events.emit('SETTING_VOLUME_CHANGED', parseInt(volumeSlider.value, 10) / 100);
    });
  }

  public update(): void {
    if (this.statusTimer) {
      this.statusTimer.textContent = scoreManager.getFormattedShiftTime();
    }
  }
}
