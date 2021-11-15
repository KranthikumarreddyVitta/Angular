import { Injectable } from '@angular/core';
import { EnvironmentService, HttpService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private http: HttpService, private env: EnvironmentService) {}
  getCompanyList(): Observable<any> {
    return this.http.sendGETRequest(
      this.env.getEndPoint() + 'getCompanyListNew'
    );
  }

  getProjectList(companyId: any): Observable<any> {
    return this.http.sendGETRequest(
      this.env.getEndPoint() + 'getProjectListNew?company_id=' + companyId
    );
  }

  getFloorPlan(quoteId: number): Observable<any> {
    return this.http.sendPOSTRequest(
      this.env.getEndPoint() + 'getFloorplanDetails',
      JSON.stringify({ quote_id: quoteId })
    );
  }

  createFloorPlan(obj: any): Observable<any> {
    return this.http.sendPOSTRequest(
      this.env.getEndPoint() + 'addFloorPlan',
      JSON.stringify(obj)
    );
  }

  removeFloorPlanFromQuote(
    quoteId: number,
    floorPlanId: number
  ): Observable<any> {
    return this.http.sendGETRequest('');
  }
  getUnits(quoteId: number, floorPlanId: number): Observable<any> {
    return this.http.sendGETRequest(
      this.env.getEndPoint() +
        'getFloorPlanUnits?quote_id=' +
        quoteId +
        '&floorplan_id=' +
        floorPlanId
    );
  }

  addOptionalUnits(obj: any): Observable<any> {
    return this.http.sendPOSTRequest(
      this.env.getEndPoint() + 'addUnit/optional/floorplan',
      JSON.stringify(obj)
    );
  }
  addMBQuote(obj: any) {
    return this.http.sendPOSTRequest(
      this.env.getEndPoint() + 'add/moodboard/quote',
      JSON.stringify(obj)
    );
  }
  addProductQuote(obj: any) {
    return this.http.sendPOSTRequest(
      this.env.getEndPoint() + 'put/product/commonQuoteForProductAndMoodboard',
      JSON.stringify(obj)
    );
  }
  getFpu(obj: any) {
    return this.http.sendPOSTRequest(
      this.env.getEndPoint() + 'add/moodboard/quote',
      JSON.stringify(obj)
    );
  }
  getFpus(obj: any){
    return this.http.sendPOSTRequest(this.env.getEndPoint()+'getFloorPlanUnits' ,JSON.stringify(obj));
  }
  getFpuWithoutFP(obj: any){
    return this.http.sendPOSTRequest(this.env.getEndPoint()+'getUnitsWithoutDefaultUnit' ,JSON.stringify(obj));
  }
  addFPMB(obj: any){
    return this.http.sendPOSTRequest(this.env.getEndPoint()+'add/floorplan/moodboard' ,JSON.stringify(obj));

  }
  addFPUMB(obj: any){
    return this.http.sendPOSTRequest(this.env.getEndPoint()+'add/moodboard/all/units' ,JSON.stringify(obj));

  }
  addFPQuote(obj: any){
    return this.http.sendPOSTRequest(this.env.getEndPoint()+'addProduct/Quote/FloorplanUnits' ,JSON.stringify(obj));

  }

  addFPUQuote(obj: any){
    return this.http.sendPOSTRequest(this.env.getEndPoint()+'addProduct/Quote/AllUnits' ,JSON.stringify(obj));

  }

  addQuoteMoodboard(obj: any) {
    return this.http.sendPOSTRequest(
      this.env.getEndPoint() + 'add/defaultunit/moodboard',
      JSON.stringify(obj)
    );
  }

}
