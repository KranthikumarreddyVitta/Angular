import { Injectable } from '@angular/core';
import { EnvironmentService } from 'projects/core/src/lib/services/environment.service';
import { HttpService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteCreateService {
  constructor(private _http: HttpService, private _env: EnvironmentService) {}

  copyQuote(obj: string): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'clone/quote',
      obj
    );
  }

  editQuote(obj: string): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'update/customer/info',
      obj
    );
  }

  createQuote(obj: string): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'create/customer/info',
      obj
    );
  }
}
