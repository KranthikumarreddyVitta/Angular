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
    return this.http.sendGETRequest<T>(this.env.getEndPoint()+'load/customer/quotes').pipe(map((data:any)=>{console.log(data.quote);return data.quote}))
  }
}
