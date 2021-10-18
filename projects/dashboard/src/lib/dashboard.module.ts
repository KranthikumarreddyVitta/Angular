import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { dashboardRouting } from './dashboard.routing';
import {MatListModule} from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [DashboardComponent, PaymentComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatListModule,
    RouterModule.forChild(dashboardRouting),
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
