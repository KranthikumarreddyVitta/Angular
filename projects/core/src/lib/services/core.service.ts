import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EnvironmentService } from './environment.service';
import { HttpService } from './http.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CoreService {

  cartCount = new BehaviorSubject(null);
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

  getCartCount() {
    this._http
      .sendGETRequest(
        this._env.getEndPoint() + 'show/cartProductcount?' + `user_id=${this._user.getUser().getId()}`
      )
      .pipe().subscribe((data: any) => {
        if (data) {
          this.cartCount.next(data);
        }
      })
  }
}
