import { Injectable } from '@angular/core';
import {
  EnvironmentService,
  HttpService,
  UserService,
} from 'projects/core/src/public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreAppService {
  constructor(
    private _http: HttpService,
    private _env: EnvironmentService,
    private _user: UserService
  ) {}

  getApplicationData(): Observable<any> {
    let obj = {
      user_sgid: this._user.getUser().getId(),
    };
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'user/businessCreditApp/Get',
      JSON.stringify(obj)
    );
  }

  saveApplicationData(obj: any): Observable<any> {
    obj.user_sgid = this._user.getUser().getId();
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'user/businessCreditApp/Save',
      JSON.stringify(obj)
    );
  }
}
