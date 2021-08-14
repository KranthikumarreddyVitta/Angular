import { Injectable } from '@angular/core';
import { EnvironmentService } from 'projects/core/src/lib/services/environment.service';
import { HttpService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoodboardService {

  constructor(private http: HttpService,private env: EnvironmentService) { }
  
  getStateList<T>(): Observable<T> {
    let url = this.env.getEndPoint()+'load/states';
    return this.http.sendGETRequest(url, {});
  }
  getItems<T>(param: any): Observable<T> {
    let url = this.env.getEndPoint()+'product/filter2';
    return this.http.sendGETRequest(url, {params: param});
  }
  getCityList<T>(): Observable<T> {
    let url = this.env.getEndPoint()+'warehouse';
    return this.http.sendGETRequest(url, {});
  }
  getCategoryList<T>(): Observable<T> {
    let url = this.env.getEndPoint()+'getCategory';
    return this.http.sendGETRequest(url, {});
  }
  getProjectList<T>(): Observable<T> {
    let url = this.env.getEndPoint()+'getMoodBoardProjectFilter?project_name=';
    return this.http.sendGETRequest(url, {});
  }
  getMoodBoard<T>(id: any): Observable<T> {
    let url = this.env.getEndPoint()+'load/moodboard/items?moodboard_id='+id;
    return this.http.sendGETRequest(url, {});
  }
  getMoodBoardList<T>(): Observable<T> {
    let url = this.env.getEndPoint()+'getMoodBoard?supplier_id=0&project_name=&user_id=98';
    return this.http.sendGETRequest(url, {});
  }
  getMyMoodBoardList<T>(): Observable<T> {
    let url = this.env.getEndPoint()+'getMoodBoardByUser?supplier_id=0&project_name=&user_id=98';
    return this.http.sendGETRequest(url, {});
  }
  updateMoodboard(param:any): Observable <any> {
    let url = this.env.getEndPoint()+'updateMoodBoard'
    return this.http.sendPOSTRequest<any>(url,param,{});
  }
  createMoodboard(param:any): Observable <any> {
    let url = this.env.getEndPoint()+'createMoodBoard'
    return this.http.sendPOSTRequest<any>(url,param,{});
  }
  getMBQuote(param:any): Observable <any> {
    let url = this.env.getEndPoint()+'load/customer/quotes?user_id=98&source_type=my&type=null'
    return this.http.sendGETRequest(url, {});
  }
}
