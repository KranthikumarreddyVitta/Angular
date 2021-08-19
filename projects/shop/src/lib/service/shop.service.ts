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
  }: {
    start: number;
    count: number;
    category: string | null;
    supplier: string | null;
    warehouse: string | null;
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
        warehouse
    );
  }
}
