import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShopComponent } from './components/shop/shop.component';

export const shopRouting: Routes = [
  {
    path: '',
    component: ShopComponent,
  }, {
    path:':productId/:warehouseId/:variationId',
    component : ProductDetailsComponent
  }
];
