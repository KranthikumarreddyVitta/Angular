import { Injectable } from '@angular/core';
import {
  EnvironmentService,
  HttpService,
  ToasterService,
} from 'projects/core/src/public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FloorPlanDetailsService {
  constructor(
    private _http: HttpService,
    private _env: EnvironmentService,
    private _toaster: ToasterService
  ) {}

  getMoodBoards(quoteId: string, fpId: string): Observable<any> {
    return this._http.sendGETRequest(
      this._env.getEndPoint() +
        'load/floorplan/moodboards?quote_id=' +
        quoteId +
        '&floorplan_id=' +
        fpId
    );
  }
  getFloorPlanUnits(quoteId: string, fpId: string) {
    return this._http.sendGETRequest(
      this._env.getEndPoint() +
        'getFloorPlanUnits?quote_id=' +
        quoteId +
        '&floorplan_id=' +
        fpId
    );
  }

  getFPSummary(quoteId: string, fpId: string, unitId: string): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'load/floorplan/unit/products',
      JSON.stringify({ unit_id: unitId, floorplan_id: fpId, quote_id: quoteId })
    );
  }

  getFloorPlanDetails(quoteId: string, fpId: string): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'getFloorplanDetails',
      JSON.stringify({ quote_id: quoteId, floorplan_id: fpId })
    );
  }

  removeUnitFromFp(
    quoteId: string,
    unitName: string,
    unitId: string
  ): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'removeUnit',
      JSON.stringify({ quote_id: quoteId, unit: unitName, sgid: unitId })
    );
  }

  getMoodboardWithUnits(quoteId: string, fpId: string): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'quote/moodboardInFloorplan/units',
      JSON.stringify({ quote_id: quoteId, floorplan_id: fpId })
    );
  }
}
