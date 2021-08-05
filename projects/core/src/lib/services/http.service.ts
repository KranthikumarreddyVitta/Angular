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

  /**
   * Send Get Request
   * @param url 
   * @param httpOptions 
   * @returns 
   */
  sendGETRequest<T>(url: string,httpOptions?: IHttpOptions ) : Observable<T>{
    return this.http.get<T>(url,httpOptions);
  }

  /**
   * Send Post Request
   * @param url 
   * @param Json 
   * @param httpOptions 
   * @returns 
   */
  sendPOSTRequest<T>(url:string,Json: string,httpOptions? :IHttpOptions): Observable<T>{
    return this.http.post<T>(url,Json);
  }
}
