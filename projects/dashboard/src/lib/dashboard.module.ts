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
import {MatCardModule} from '@angular/material/card';
import { ProfileComponent } from './components/profile/profile.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [DashboardComponent, PaymentComponent, ProfileComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    AgGridModule,
    RouterModule.forChild(dashboardRouting),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
