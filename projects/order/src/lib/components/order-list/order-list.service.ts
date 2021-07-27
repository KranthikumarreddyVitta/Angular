import { Injectable } from '@angular/core';
import { EnvironmentService } from 'projects/core/src/lib/services/environment.service';
import { HttpService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrderListService {
  constructor(private _http: HttpService, private _env: EnvironmentService) {}

  /**
   * Get Order list 
   * @param userId 
   * @param sourceType 
   * @param type 
   * @returns 
   */
  getOrderList<T>(
    userId: number,
    sourceType: 'all' | 'my' = 'all',
    type: 'orders' = 'orders'
  ): Observable<T> {
    let url =
      'load/customer/quotes?' +
      'user_id=' +
      userId +
      '&source_type=' +
      sourceType +
      '&type=' +
      type;
    return this._http
      .sendGETRequest(this._env.getEndPoint() + url)
      .pipe(map((data: any) => data.quote));
  }
}
