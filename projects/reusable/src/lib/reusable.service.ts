import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReusableService {

  constructor(private http:HttpClient) { }

  getList() {
    return this.http.get<any>("assets/reusable/db.json");
  }

  getPersonal() {
    return this.http.get<any>("assets/reusable/personal.json");
  }
}
