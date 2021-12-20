import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EnvironmentService } from './environment.service';
import { HttpService } from './http.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(
    private _http: HttpService,
    private _env: EnvironmentService,
    private _user: UserService
  ) {}

  /**
   * Get All State
   * @returns
   */
  getStateList(): Observable<Array<any>> {
    return this._http
      .sendGETRequest(this._env.getEndPoint() + 'load/states')
      .pipe(map((data: any) => data.states));
  }

  validateZipCode(
    city: string,
    stateId: number,
    zipCode: string
  ): Observable<any> {
    let params = {
      city_name: city,
      state_id: stateId,
      zipcode: zipCode,
    };
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'validateCityAndZipcode',
      JSON.stringify(params)
    );
  }

  getBase64Image(url: string): Observable<any> {
    return this._http
      .sendGETRequest(
        this._env.getEndPoint() + 'image/convert/base64?img_url=' + url
      )
      .pipe(map((data: any) => data.imageurl));
  }

  loadUserPreference(): Observable<any> {
    // return of({warehouse:[21,14,10]});
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'getSearchFilterParams',
      JSON.stringify({ user_id: this._user.getUser().getId() })
    );
  }
}
