import { Injectable } from '@angular/core';
import { EnvironmentService, HttpService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private _http: HttpService, private _env: EnvironmentService) {}

  getProducts({
    start,
    count,
    category = null,
    supplier = null,
    warehouse = null,
    min_price = 0,
    max_price = 0,
    min_price_inventory = 0
  }: {
    start: number;
    count: number;
    category?: string | null;
    supplier?: string | null;
    warehouse?: string | null;
    min_price?: number;
    max_price?: number;
    min_price_inventory?: number;
  }): Observable<any> {
    return this._http.sendGETRequest(
      this._env.getEndPoint() +
        'product/filter2?start=' +
        start +
        '&count=' +
        count +
        '&category=' +
        category +
        '&supplier=' +
        supplier +
        '&warehouse=' +
        warehouse +
        '&price_option_1=purchase&price_option_2=range&min_price=' + 
        min_price + '&min_price_inventory='+ min_price_inventory +'&inventory_filter_request_type=all'
        + '&max_price=' + max_price
    );
  }
}
