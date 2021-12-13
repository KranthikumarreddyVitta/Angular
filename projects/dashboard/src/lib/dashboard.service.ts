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
  addBankCardDetails(param : any): Observable<any>{
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'payment/create/card',
      param
    ); 
  }
  addDefault(param: any): Observable<any>{
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'payment/default/card',
      param
    ); 
  }
  removeCard(param: any): Observable<any>{
    return this._http.sendGETRequest(
      this._env.getEndPoint() + 'payment/remove/card?sgid='+param.sgid+'&card_id='+ param.card_id); 
  }
}
