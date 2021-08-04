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

  getQuoteSummary<T>(quoteId: number): Observable<T> {
    return this._http
      .sendGETRequest(
        this._env.getEndPoint() + 'quote/items?quote_id=' + quoteId
      )
      .pipe(
        map((data: any) => {
          data.quote_items.push({
            subTotal: 'abc',
            sgid: 'SUB TOTAL',
            is_total: '100',
            isExtraColumn: true,
          },{
            subTotal: 'abc',
            sgid: 'DELIVERY FEE',
            is_total: '100',
            isExtraColumn: true,
          },{
            subTotal: 'abc',
            sgid: 'TAXES (8.6%)',
            is_total: '100',
            isExtraColumn: true,
          },{
            subTotal: 'abc',
            sgid: 'TOTAL',
            is_total: '100',
            isExtraColumn: true,
          });
          return data.quote_items;
        })
      );
  }

  getMoodboardInQuote<T>(quoteId: number): Observable<T> {
    let data = {
      quote_id: quoteId,
    };
    return this._http
      .sendPOSTRequest(
        this._env.getEndPoint() + 'getMoodboardInQuote',
        JSON.stringify(data)
      )
      .pipe(
        map((data: any) => {
          if (!Array.isArray(data.result)) {
            return [];
          }
          return data.result;
        })
      );
  }

  getQuoteInformation<T>(quoteId: number): Observable<T> {
    return this._http
      .sendGETRequest(
        this._env.getEndPoint() + 'load/quote/info?quote_id=' + quoteId
      )
      .pipe(map((data: any) => data.quote));
  }

  updateQuote(json:Array<any>) : Observable<any>{
    return this._http.sendPOSTRequest(this._env.getEndPoint()+'save/quote/items',JSON.stringify(json))
  }
}
