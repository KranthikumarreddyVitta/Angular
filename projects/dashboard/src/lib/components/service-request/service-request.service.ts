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
export class ServiceRequestService {
  constructor(
    private _http: HttpService,
    private _env: EnvironmentService,
    private _user: UserService
  ) {}

  getServiceList(): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'getUserOptionalAccountData',
      JSON.stringify({
        user_id: this._user.getUser().getId(),
        type: 'services',
      })
    );
  }
  getOrderList(): Observable<any> {
    return this._http.sendGETRequest(
      this._env.getEndPoint() +
        'load/customer/quotes?source_type=all&type=orders&user_id=' +
        this._user.getUser().getId()
    );
  }

  createServiceRequest(obj:any) {
    let json = {
      user_id: this._user.getUser().getId(),
      ...obj
    };
    return this._http.sendPOSTRequest(this._env.getEndPoint()+'createServiceReqOnDashB    ', JSON.stringify(json));
  }
}
