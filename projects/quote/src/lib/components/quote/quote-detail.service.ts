import { Injectable } from '@angular/core';
import { EnvironmentService } from 'projects/core/src/lib/services/environment.service';
import { HttpService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuoteDetailService {
  constructor(private _http: HttpService, private _env: EnvironmentService) {}

  updateQuote(json: Array<any>): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'save/quote/items',
      JSON.stringify(json)
    );
  }

  createOrder(params: any) {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'create/order',
      JSON.stringify(params)
    );
  }
}
