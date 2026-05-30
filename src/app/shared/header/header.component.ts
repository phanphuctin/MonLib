import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, AvatarModule, ToggleSwitchModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly themeService = inject(ThemeService);

  onThemeToggle(value: boolean): void {
    if (value !== this.themeService.isDarkMode()) {
      this.themeService.toggle();
    }
  }
} 