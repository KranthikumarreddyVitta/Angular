import { forwardRef, Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { MoodboardService } from 'projects/moodboard/src/public-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShopService } from './shop.service';

@Injectable({
  providedIn: 'root'
}
)
export class ProductresolverGuard implements Resolve<any> {

  constructor(private router: ActivatedRoute, private product: ShopService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.product.getProductDetails(route.params?.productId, route.params?.warehouseId)
      .pipe(map((data: any) => data))
  }

}
