import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private _http: HttpService, private _env: EnvironmentService) {}

  /**
   * Get All State 
   * @returns 
   */
  getStateList(): Observable<any> {
    return this._http.sendGETRequest(this._env.getEndPoint() + '');
  }
}
