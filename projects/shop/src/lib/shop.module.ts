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
import { CoreModule } from 'projects/core/src/public-api';


@NgModule({
  declarations: [ShopComponent, ProductDetailsComponent],
  imports: [
    RouterModule.forChild(shopRouting),
    MatCardModule,
    MatButtonModule,
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    FlexLayoutModule,
    CommonModule,
    MatExpansionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    CoreModule
  ],
  exports: [ShopComponent],
})
export class ShopModule {}
