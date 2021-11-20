import { Injectable } from '@angular/core';
import { EnvironmentService } from 'projects/core/src/lib/services/environment.service';
import { HttpService, UserService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuoteHeaderService {
  constructor(
    private _http: HttpService,
    private _env: EnvironmentService,
    private _user: UserService
  ) {}

  getQuoteSummary<T>(quoteId: any): Observable<T> {
    return this._http.sendGETRequest(
      this._env.getEndPoint() + 'quote/items?quote_id=' + quoteId
    );
  }

  getUnitQuoteSummary<T>(unitId: any, floorplanId: any, quoteId: any): Observable<T> {
    const data = {'unit_id':unitId,'floorplan_id':floorplanId,'quote_id': quoteId};
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'load/floorplan/unit/products', JSON.stringify(data)
    );
  }

  getMoodboardInQuote<T>(quoteId: number): Observable<T> {
    let data = {
      quote_id: quoteId,
    };
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'quote/defaultUnit/MbAndIndivisualProds',
      JSON.stringify(data)
    );
  }

  getQuoteInformation<T>(quoteId: number): Observable<T> {
    return this._http
      .sendGETRequest(
        this._env.getEndPoint() + 'load/quote/info?quote_id=' + quoteId
      )
      .pipe(map((data: any) => data.quote));
  }

  getMoodBoardByUser(): Observable<[]> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'getMoodBoardByUser',
      JSON.stringify({ userid: this._user.getUser().getId() })
    );
  }

  addMoodboard(quoteId: number, moodboardId: number) {
    let obj = {
      moodboard_id: moodboardId,
      quote_id: quoteId,
      user_id: this._user.getUser().getId(),
    };
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'add/defaultunit/moodboard',
      JSON.stringify(obj)
    );
  }

  // default unit
  addMDtoFloorPlan(): Observable<any> {
    return this._http.sendGETRequest('');
  }

  getMoodboardItems(mdId: number): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'load/moodboard/items',
      JSON.stringify({ moodboard_id: mdId })
    );
  }

  addMDtoUnit(): Observable<any> {
    return this._http.sendGETRequest('');
  }
  removeMDfromQuote(quoteId: number, moodboardId: number): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'removeMoodBoardFromQuote',
      JSON.stringify({ quote_id: quoteId, moodboard_id: moodboardId })
    );
  }
  removeProductfromQuote(quoteId: number, item_id: number): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'remove/quote/items',
      JSON.stringify({ quote_id: quoteId, item_id: item_id })
    );
  }
  
}
