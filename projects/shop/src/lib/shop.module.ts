import { NgModule } from '@angular/core';
import { ShopComponent } from './components/shop/shop.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailsComponent
  ],
  imports: [
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
