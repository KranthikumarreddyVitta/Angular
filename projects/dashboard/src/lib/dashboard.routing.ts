import { Routes } from '@angular/router';
import { CreditAppComponent } from './components/credit-app/credit-app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LeaseAgreementComponent } from './components/lease-agreement/lease-agreement.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ServiceRequestComponent } from './components/service-request/service-request.component';

export const dashboardRouting: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'orders',
        component: MyOrdersComponent,
      },
      {
        path: 'payment',
        component: PaymentComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'creApp',
        component: CreditAppComponent,
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
      },
      {
        path: 'lease',
        component: LeaseAgreementComponent,
      },
      {
        path: 'serviceReq',
        component: ServiceRequestComponent,
      },
    ],
  },
];
