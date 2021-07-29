import { Injectable } from '@angular/core';
import { HttpService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoodboardService {

  constructor(private http: HttpService) { }
  getStateList<T>(): Observable<T> {
    let url = 'load/states';
    return this.http.sendGETRequest(url, {});
  }
  getProjectList<T>(): Observable<T> {
    let url = 'getMoodBoardProjectFilter?project_name=';
    return this.http.sendGETRequest(url, {});
  }
  getMoodBoardList<T>(): Observable<T> {
    let url = 'getMoodBoard?supplier_id=0&project_name=&user_id=98';
    return this.http.sendGETRequest(url, {});
  }
  getMyMoodBoardList<T>(): Observable<T> {
    let url = 'getMoodBoardByUser?supplier_id=0&project_name=&user_id=98';
    return this.http.sendGETRequest(url, {});
  }
  createMoodboard(param:any): Observable <any> {
    let url = 'createMoodBoard'
    return this.http.sendPOSTRequest<any>(url,param,{});
  }
}
