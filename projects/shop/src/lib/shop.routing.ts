import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './common/product-details/product-details.component';
import { ZeroZeroSevenComponent } from './components/zero-zero-seven/zero-zero-seven.component';
import { ShopHomeComponent } from './components/shop-home/shop-home.component';
import { ProductresolverGuard } from './service/productresolver.guard';

export const shopRouting: Routes = [
  {
    path: '',
    component: ShopHomeComponent,
  }, {
    path: ':productId/:warehouseId/:variationId',
    component: ProductDetailsComponent,
    resolve: {
      product: ProductresolverGuard
    }
  }, {
    path: ':productId/:warehouseId/:variationId/007',
    component: ZeroZeroSevenComponent
  }
];
