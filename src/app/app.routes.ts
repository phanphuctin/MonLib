import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { BooksComponent } from './features/books/books.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'books', component: BooksComponent },
  // { path: 'members', component: MembersComponent },
  // { path: 'loans', component: LoansComponent },
  // { path: 'reservations', component: ReservationsComponent },
  // { path: 'overdue', component: OverdueComponent },
  // { path: 'settings', component: SettingsComponent },
  // { path: 'help', component: HelpComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
