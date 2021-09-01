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

  getBase64Image(url: string): Observable<any>{
    return this._http.sendGETRequest(this._env.getEndPoint()+'image/convert/base64?img_url=' + url).pipe(map((data:any)=> data.imageurl))
  }

  updateMDItem(md:any){
    let obj ={
      "sgid":md.sgid,
      "moodboard_id":md.moodboard_id,
      "qty":md.is_qty,
      "months":md.months,
      "total":md.is_total,
      "price":md.price,
      sale_price : md.sale_price,
      "asset_value":md.asset_value,
      "button_type":md.button_type,
      "buy_price" : md.buy_price,
    }
    return this._http.sendPOSTRequest( this._env.getEndPoint() + 'update/moodboard/singleitem',JSON.stringify(obj))
  }
}
