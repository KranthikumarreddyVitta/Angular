import { Injectable } from '@angular/core';
import { EnvironmentService } from 'projects/core/src/lib/services/environment.service';
import { HttpService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { map  } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class QuoteListService {
  constructor(private http: HttpService, private env: EnvironmentService) {}

  getQuoteList<T>(): Observable<T>{
    return this.http.sendGETRequest<T>(this.env.getEndPoint()+'load/customer/quotes').pipe(map((data:any)=>{return data.quote}))
  }

  getMyQuoteList<T>(userId:number,type?:string,source_type?:string): Observable<T> {
    let url = 'load/customer/quotes?user_id='+userId+'&source_type=my&type=quotes'
    return this.http.sendGETRequest(this.env.getEndPoint() +url).pipe(map((data:any)=>{return data.quote}))
  }
}
