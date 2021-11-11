import { Injectable } from '@angular/core';
import { EnvironmentService, HttpService, UserService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(    
      private _http: HttpService,
      private _env: EnvironmentService,
      private _user: UserService
    ) { }
    getFPList(id: any): Observable<any> {
      let url = 'getFloorplanDetails';
      return this._http.sendPOSTRequest(
        this._env.getEndPoint() + url,
        JSON.stringify({"quote_id" : id})
      );
    }
    getFPTypeList(): Observable<any> {
      let url = 'getFloorplanType';
      return this._http.sendGETRequest(
        this._env.getEndPoint() + url
      );
    }
}
