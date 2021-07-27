import { Injectable } from '@angular/core';
import { HttpService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoodboardService {

  constructor(private http: HttpService) { }
 
  getMoodBoardList<T>(): Observable<T> {
    let url = 'getMoodBoard?supplier_id=0&project_name=&user_id=98';
    return this.http.sendGETRequest(url, {});
  }
  getMyMoodBoardList<T>(): Observable<T> {
    let url = 'getMoodBoardByUser?supplier_id=0&project_name=&user_id=98';
    return this.http.sendGETRequest(url, {});
  }
  
}
