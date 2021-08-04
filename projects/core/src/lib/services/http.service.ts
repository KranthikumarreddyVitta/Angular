import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
export interface IHttpOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
};
observe?: any;
params?: HttpParams | {
    [param: string]: string | string[];
};
reportProgress?: boolean;
responseType?: any;
withCredentials?: boolean;
}


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }


  sendGETRequest<T>(url: string,httpOptions?: IHttpOptions ) : Observable<T>{
    return this.http.get<T>(url,httpOptions);
  }

  sendPOSTRequest<T>(url:string,Json: string,httpOptions? :IHttpOptions): Observable<T>{
    return this.http.post<T>(url,Json);
  }
}
