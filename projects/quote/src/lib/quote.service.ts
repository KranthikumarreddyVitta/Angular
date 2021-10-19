import { Injectable } from '@angular/core';
import { EnvironmentService, HttpService } from 'projects/core/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpService, private env: EnvironmentService) { }
  getCompanyList(){
    return this.http.sendGETRequest(this.env.getEndPoint() + 'getCompanyListNew');
  }

  getProjectList(companyId: any){
    return this.http.sendGETRequest( this.env.getEndPoint() + 'getProjectListNew?company_id='+companyId)
  }

}
