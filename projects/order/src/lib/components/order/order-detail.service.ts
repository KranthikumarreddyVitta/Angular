import { Injectable } from '@angular/core';
import { HttpService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailService {
  constructor(private _http: HttpService) {}

  getOrderSummary<T>(orderId:number): Observable<T> {
    return this._http.sendGETRequest(''+orderId);
  }
}
