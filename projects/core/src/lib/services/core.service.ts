import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  getStateList(): Observable<Array<any>> {
    return this._http.sendGETRequest(this._env.getEndPoint() + 'load/states').pipe(map((data:any)=>data.states));
  }
}
