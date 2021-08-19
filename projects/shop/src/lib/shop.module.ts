import { NgModule } from '@angular/core';
import { ShopComponent } from './components/shop/shop.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { shopRouting } from './shop.routing';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ShopComponent, ProductDetailsComponent],
  imports: [
    RouterModule.forChild(shopRouting),
    MatCardModule,
    MatButtonModule,
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [ShopComponent],
})
export class ShopModule {}
