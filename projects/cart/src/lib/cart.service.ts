import { Injectable } from '@angular/core';
import { EnvironmentService, HttpService, UserService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http: HttpService,
    private _env: EnvironmentService,
    private _user: UserService) { }

  getCartSummary(cartId: number): Observable<any> {
    return this._http
      .sendGETRequest(
        this._env.getEndPoint() + 'show/cartItems?' + `cart_id=${cartId}`
      )
      .pipe(map((data: any) => data))
  }
 }
