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
import { InvoiceComponent } from './components/invoice/invoice.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LeaseAgreementComponent } from './components/lease-agreement/lease-agreement.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ServiceRequestComponent } from './components/service-request/service-request.component';
import { MatStepperModule } from '@angular/material/stepper';

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
    InvoiceComponent,
    LeaseAgreementComponent,
    MyOrdersComponent,
    ServiceRequestComponent,
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
    MatTooltipModule,
    MatExpansionModule,
    MatStepperModule,
    MatSlideToggleModule,
    RouterModule.forChild(dashboardRouting),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
