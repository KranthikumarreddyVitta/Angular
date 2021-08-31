import { Injectable } from '@angular/core';
import { EnvironmentService, HttpService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { UserService } from '../../../../core/src/lib/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private _http: HttpService, private _env: EnvironmentService,  private userService: UserService) {}

  addItemToMoodboard(obj: any): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'add/moodboard/items',
      JSON.stringify(obj)
    );
  }
  getProducts({
    start,
    count,
    category = null,
    supplier = null,
    warehouse = null,
    min_price,
    max_price,
    min_price_inventory,
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
    let price = '';
    if(undefined != min_price) price += '&price_option_1=purchase&price_option_2=range&min_price=' + min_price;
    if (undefined != min_price_inventory) price += '&min_price_inventory=' + min_price_inventory +'&inventory_filter_request_type=all';
    if (undefined != max_price) price += '&max_price=' +  max_price;
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
        price
    );
  }

  addItemToQuote(obj: any): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'put/product/commonQuoteForProductAndMoodboard',
      JSON.stringify(obj)
    );
  }
}
