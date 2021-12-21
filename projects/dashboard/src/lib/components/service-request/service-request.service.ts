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
}
