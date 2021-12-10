import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProfileComponent } from './components/profile/profile.component';

export const dashboardRouting: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
    {
      path: 'payment',
      component: PaymentComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
  ]}  
];
 