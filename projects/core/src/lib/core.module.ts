import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { ImageComponent } from './components/image/image.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CartComponent } from './components/cart/cart.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ImageRendererComponent } from './cell-renderer/image-renderer/image-renderer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CounterComponent } from './cell-renderer/counter/counter.component';
import { CreateFormHeaderComponent } from './components/create-form-header/create-form-header.component';
import { PaymentComponent } from './components/dialog/payment/payment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { ExtuserComponent } from './components/extuser/extuser.component';
import { AgGridModule } from 'ag-grid-angular';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { EditCellRendererComponent } from './components/extuser/edit-cell-renderer/edit-cell-renderer.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { PipeModule } from '../lib/pipe/pipe.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ConfirmationDialogComponent } from './components/dialog/confirmation-dialog/confirmation-dialog.component';
@NgModule({
  declarations: [
    HeaderComponent,
    ImageComponent,
    NavbarComponent,
    BannerComponent,
    TabsComponent,
    CartComponent,
    FooterComponent,
    ImageRendererComponent,
    CounterComponent,
    CreateFormHeaderComponent,
    PaymentComponent,
    LoginComponent,
    ExtuserComponent,
    ResetPasswordComponent,
    EditCellRendererComponent,
    ImageSliderComponent,
    SearchBarComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
    MatSnackBarModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatRadioModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    AgGridModule,
    PipeModule,
  ],
  exports: [
    ImageRendererComponent,
    CounterComponent,
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    TabsComponent,
    CartComponent,
    FooterComponent,
    CreateFormHeaderComponent,
    PaymentComponent,
    LoginComponent,
    ExtuserComponent,
    ImageSliderComponent,
    SearchBarComponent,
    ConfirmationDialogComponent,
  ],
})
export class CoreModule {}
