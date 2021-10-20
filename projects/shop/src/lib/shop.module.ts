import { NgModule } from '@angular/core';
import { ShopComponent } from './components/shop/shop.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { shopRouting } from './shop.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from "@angular/common";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import { CoreModule } from '../../../core/src/public-api';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ZeroZeroSevenComponent } from './components/zero-zero-seven/zero-zero-seven.component';
import {MatSliderModule} from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [ShopComponent, ProductDetailsComponent, ZeroZeroSevenComponent],
  imports: [
    RouterModule.forChild(shopRouting),
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
    MatDividerModule
  ],
  exports: [ShopComponent],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class ShopModule {}
