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
    MatSelectModule
  ],
  exports: [ShopComponent],
})
export class ShopModule {}
