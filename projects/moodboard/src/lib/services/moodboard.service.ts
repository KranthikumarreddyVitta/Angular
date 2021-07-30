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
  createMoodboard(param:any): Observable <any> {
    let url = this.env.getEndPoint()+'createMoodBoard'
    return this.http.sendPOSTRequest<any>(url,param,{});
  }
}
