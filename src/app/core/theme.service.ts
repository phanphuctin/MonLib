import { Injectable, signal, effect } from '@angular/core';

const DARK_MODE_KEY = 'monlibrary-dark-mode';
const DARK_CLASS = 'app-dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDarkMode = signal<boolean>(this.getInitialDarkMode());

  constructor() {
    effect(() => {
      const dark = this.isDarkMode();
      document.documentElement.classList.toggle(DARK_CLASS, dark);
      localStorage.setItem(DARK_MODE_KEY, String(dark));
    });
  }

  toggle(): void {
    this.isDarkMode.update(v => !v);
  }

  private getInitialDarkMode(): boolean {
    const stored = localStorage.getItem(DARK_MODE_KEY);
    if (stored !== null) return stored === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
