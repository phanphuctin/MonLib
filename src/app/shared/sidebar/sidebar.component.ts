import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  navItems = [
    { label: 'Dashboard', icon: 'pi pi-home', route: '/dashboard' },
    { label: 'Books', icon: 'pi pi-book', route: '/books' },
    { label: 'Members', icon: 'pi pi-users', route: '/members' },
    { label: 'Loan Records', icon: 'pi pi-sort-alt', route: '/loans' },
    { label: 'Reservations', icon: 'pi pi-calendar', route: '/reservations' },
    { label: 'Overdue Items', icon: 'pi pi-exclamation-circle', route: '/overdue' },
    { label: 'Settings', icon: 'pi pi-cog', route: '/settings' },
    { label: 'Help', icon: 'pi pi-question-circle', route: '/help' },
  ];

  activeIndex = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }
}
