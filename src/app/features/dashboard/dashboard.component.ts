import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cards = [
    {
      title: 'Total Books',
      icon: 'pi pi-book',
      iconClass: 'books',
      value: '5,284',
      trendIcon: 'pi pi-arrow-up',
      trendText: '5% from last month'
    },
    {
      title: 'Active Members',
      icon: 'pi pi-users',
      iconClass: 'members',
      value: '1,523',
      trendIcon: 'pi pi-arrow-up',
      trendText: '12% from last month'
    },
    {
      title: 'Books on Loan',
      icon: 'pi pi-sort-alt',
      iconClass: 'loans',
      value: '487',
      trendIcon: 'pi pi-arrow-down',
      trendText: '3% from last week'
    },
    {
      title: 'Overdue Books',
      icon: 'pi pi-exclamation-circle',
      iconClass: 'overdue',
      value: '34',
      trendIcon: 'pi pi-arrow-down',
      trendText: '25% from last week'
    }
  ];
}
