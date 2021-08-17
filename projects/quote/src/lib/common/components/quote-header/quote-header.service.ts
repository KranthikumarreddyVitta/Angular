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

  getQuoteSummary<T>(quoteId: number): Observable<T> {
    return this._http
      .sendGETRequest(
        this._env.getEndPoint() + 'quote/items?quote_id=' + quoteId
      )
      .pipe(
        map((data: any) => {
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
      units: null,
    };
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'add/floorplan/moodboard',
      JSON.stringify(obj)
    );
  }
}
