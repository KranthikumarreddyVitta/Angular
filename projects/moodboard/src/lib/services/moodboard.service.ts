import { Injectable } from '@angular/core';
import { EnvironmentService } from 'projects/core/src/lib/services/environment.service';
import { HttpService, UserService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoodboardService {

  constructor(private http: HttpService,private env: EnvironmentService, private userService: UserService) { }
  
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
  getMBSummary<T>(id: number): Observable<T> {
    return this.http
      .sendGETRequest(
        this.env.getEndPoint() + 'load/moodboard/items?moodboard_id=' + id
      )
      .pipe(
        map((data: any) => {
          return data.moodboard_items.map((item: any) => {item['is_total'] = parseFloat(item.net_total); item['is_qty'] = parseFloat(item.total_warehouse_quantity); return item;});
        })
      );
  }

  getMoodBoardList<T>(): Observable<T> {
    let url = this.env.getEndPoint()+'getMoodBoard?supplier_id=0&project_name=&user_id=98';
    return this.http.sendGETRequest(url, {});
  }
  getMyMoodBoardList<T>(): Observable<T> {
    let url = this.env.getEndPoint()+'getMoodBoardByUser';
    let param = {project_name: '', userid: this.userService.getUser().getId()};    
    return this.http.sendPOSTRequest(url, JSON.stringify(param) ,{});
  }
  getDisabledMBList<T>(): Observable<T> {
    let url = this.env.getEndPoint()+'disable_moodboards?userid=98&project_name=';
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
