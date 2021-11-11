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
  getUnits(quoteId: number,floorPlanId:number): Observable<any>{
    return this.http.sendGETRequest(this.env.getEndPoint()+'getFloorPlanUnits?quote_id='+quoteId+'&floorplan_id='+floorPlanId)
  }
}
