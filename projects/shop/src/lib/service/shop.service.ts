import { Injectable } from '@angular/core';
import { EnvironmentService, HttpService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { UserService } from '../../../../core/src/lib/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(
    private _http: HttpService,
    private _env: EnvironmentService,
    private userService: UserService
  ) {}

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
    rental_min_price,
    rental_max_price,
    min_price_inventory,
    keywords,
    preferred_delivery_start_date = null,
    preferred_delivery_end_date = null
  }: {
    start: number;
    count: number;
    category?: string | null;
    supplier?: string | null;
    warehouse?: string | null;
    min_price?: number;
    max_price?: number;
    rental_min_price?: number;
    rental_max_price?: number;
    min_price_inventory?: number;
    keywords?: string | null;
    preferred_delivery_start_date?:any;
    preferred_delivery_end_date?:any
  }): Observable<any> {
    let price = '';
    if (undefined != min_price) {
      price +=
        '&price_option_1=purchase&price_option_2=range&min_price=' + min_price;
    }
    if (undefined != min_price_inventory) {
      price +=
        '&min_price_inventory=' +
        min_price_inventory +
        '&inventory_filter_request_type=all';
      if (undefined != max_price) price += '&max_price=' + max_price;
      if (rental_min_price) price += '&rental_min_price=' + rental_min_price;
      if (rental_max_price) price += '&rental_max_price=' + rental_max_price;
      let search = '';
      if (undefined != keywords) search += '&keywords=' + keywords;
    }
    if (undefined != max_price) {
      price += '&max_price=' + max_price;
    }
    if (rental_min_price) {
      price += '&rental_min_price=' + rental_min_price;
    }
    if (rental_max_price) {
      price += '&rental_max_price=' + rental_max_price;
    }
    if (undefined != keywords) {
      price += '&keywords=' + keywords;
    }
    if (preferred_delivery_start_date != null) {
      price += '&preferred_delivery_start_date=' + preferred_delivery_start_date
    }
    if (preferred_delivery_end_date != null) {
      price += '&preferred_delivery_end_date=' + preferred_delivery_end_date
    }
    return this._http.sendGETRequest(
      this._env.getEndPoint() +
        'product/filter2?start=' +
        start +
        '&user_id=' +
        this.userService.getUser().getId() +
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

  resetFilters(): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'clearSearchFilterParams',
      JSON.stringify({ user_id: this.userService.getUser().getId() })
    );
  }
}
