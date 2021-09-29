import { Injectable } from '@angular/core';
import { EnvironmentService } from 'projects/core/src/lib/services/environment.service';
import { HttpService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuoteListService {
  constructor(private http: HttpService, private env: EnvironmentService) {}

  getQuoteList<T>(
    userId: number,
    type?: string,
    sourceType?: string,
    projectName: string = ''
  ): Observable<T> {
    let url =
      'load/customer/quotes?user_id=' +
      userId +
      '&source_type=' +
      type +
      '&type=' +
      sourceType +
      '&project_name=' +
      projectName;
    return this.http.sendGETRequest(this.env.getEndPoint() + url).pipe(
      map((data: any) => {
        return data.quote;
      })
    );
  }

  getProjectList(sourceType: string, userId: number) {
    return this.http.sendGETRequest(
      this.env.getEndPoint() +
        'getQuoteProjectFilter?project_name=' +
        '&source_type=' +
        sourceType +
        '&userid=' +
        userId
    );
  }
}
