import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MainContentComponent } from './shared/main-content/main-content.component';
import { HeaderComponent } from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, SidebarComponent, MainContentComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MonLibrary';
}
