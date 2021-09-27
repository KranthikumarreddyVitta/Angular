import { Injectable } from '@angular/core';
import { HttpService } from './../../services/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EnvironmentService } from './../../services/environment.service';
@Injectable({
  providedIn: 'root'
})
export class ExtuserService {

  constructor(private _env: EnvironmentService, private _http: HttpService) { }

  getExternalUser() : Observable<any>{
    return this._http.sendGETRequest(this._env.getEndPoint() + 'getExternalUser').pipe(map((data:any)=> data.data ?? []))
  }
}
