import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EnvironmentService } from 'projects/core/src/lib/services/environment.service';
import { HttpService, UserService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteCreateService {
  constructor(
    private _http: HttpService,
    private _env: EnvironmentService,
    private _user: UserService
  ) {}

  getParams(form: FormGroup) {
    let obj = form.value;
    obj.user_id = this._user.getUser().getId();
    obj.userid = this._user.getUser().getId();
    return obj;
  }
  copyQuote(obj: string): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'clone/quote',
      obj
    );
  }

  editQuote(obj: string): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'save/quote',
      obj
    );
  }

  createQuote(obj: string): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'save/quote',
      obj
    );
  }
}
