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
}
