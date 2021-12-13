import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { dashboardRouting } from './dashboard.routing';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PaymentComponent } from './components/payment/payment.component';
import { MatCardModule } from '@angular/material/card';
import { ProfileComponent } from './components/profile/profile.component';
import { AgGridModule } from 'ag-grid-angular';
import { CreditAppComponent } from './components/credit-app/credit-app.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CompanyInfoComponent } from './components/credit-app/company-info/company-info.component';
import { PropertyInfoComponent } from './components/credit-app/property-info/property-info.component';
import { DocumentComponent } from './components/credit-app/document/document.component';
import { GuarantorInfoComponent } from './components/credit-app/guarantor-info/guarantor-info.component';
import { PaymentAuthComponent } from './components/credit-app/payment-auth/payment-auth.component';
import { TAndCComponent } from './components/credit-app/tand-c/tand-c.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    DashboardComponent,
    PaymentComponent,
    ProfileComponent,
    CreditAppComponent,
    CompanyInfoComponent,
    PropertyInfoComponent,
    DocumentComponent,
    GuarantorInfoComponent,
    PaymentAuthComponent,
    TAndCComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    AgGridModule,
    MatCheckboxModule,
    MatExpansionModule,
    RouterModule.forChild(dashboardRouting),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
