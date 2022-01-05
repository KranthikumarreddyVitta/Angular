import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CoreModule } from 'projects/core/src/public-api';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [ShopComponent,ProductDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatDialogModule,
    MatStepperModule,
    FlexLayoutModule,
    MatCardModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    CoreModule,
    MatSliderModule,
    MatDividerModule,
    InfiniteScrollModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [ShopComponent, ProductDetailsComponent],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})

export class ShopCommonModule {}
