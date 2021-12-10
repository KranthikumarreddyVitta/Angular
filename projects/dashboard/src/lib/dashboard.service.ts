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
export class DashboardService {
  constructor(
    private _http: HttpService,
    private _env: EnvironmentService,
    private _user: UserService
  ) {}
  getDashboardData(): Observable<any> {
    return this._http.sendGETRequest(
      this._env.getEndPoint() +
        'getDashboard?supplier_id=' +
        this._user.getUser().getSupplierId() +
        '&roll_type=' +
        this._user.getUser().getRole() +
        '&user_id=' +
        this._user.getUser().getId()
    );
  }

  updatePassword(obj: any): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'update/password',
      JSON.stringify(obj)
    );
  }
  getBankCardDetails(): Observable<any>{
    return this._http.sendGETRequest(
      this._env.getEndPoint() + 'payment/getcards?sgid='+ this._user.getUser().getId()
    ); 
  }
  getTransationList(): Observable<any>{
    let param: any = {"user_id":this._user.getUser().getId(),"type":"transactions"};
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'getUserOptionalAccountData',
      param 
    ); 
  }
  addBankCardDetails(): Observable<any>{
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'payment/create/card',
      ''
    ); 
  }
}
