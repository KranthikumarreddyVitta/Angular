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

  getUnitMoodBoards(quoteId: string, fpId: string, unitID: any): Observable<any> {
    const data = {sgid: unitID};
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() +
        'getUnitMoodboards', JSON.stringify(data)
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

  getFPList(id: any): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'getFloorplanDetails',
      JSON.stringify({quote_id : id})
    );
  }

  getFloorPlanDetails(quoteId: string, fpId: string): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'getFloorplanDetails',
      JSON.stringify({ quote_id: quoteId, floorplan_id: fpId })
    );
  }

  addFloorPlanUnit(unit: any, floorplan_id: any, quote_id: any, sgid: any) {
    const data = {unit, floorplan_id, quote_id, sgid};
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'addUnitFloorPlan',
      JSON.stringify(data)
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

  removeMoodboardFromFP(
    quoteId: string,
    fpId: string,
    mdId: string
  ): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'remove/floorplan/moodboard',
      JSON.stringify({
        quote_id: quoteId,
        moodboard_id: mdId,
        floorplan_id: fpId,
      })
    );
  }
  getMoodboardWithUnits(quoteId: string, fpId: string): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'quote/moodboardInFloorplan/units',
      JSON.stringify({ quote_id: quoteId, floorplan_id: fpId })
    );
  }

  changeUnitName(
    quoteId: string,
    unitId: string,
    unitName: string
  ): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'update/UnitName',
      JSON.stringify({
        unit_id: unitId,
        quote_id: quoteId,
        unit_name: unitName,
      })
    );
  }

  addUnitsToFp(quoteId: string, fpId: string, units: string): Observable<any> {
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + 'addFloorPlanUnits',
      JSON.stringify({ quote_id: quoteId, unit: units, floorplan_id: fpId })
    );
  }
}
