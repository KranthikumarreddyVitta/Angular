import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  
  private _production = false;
  private _endPoint : string = '';
  private _appName : string = '';
  constructor() { }

  getAppName(): string{
    return this._appName;
  }
  isProduction():boolean {
    return this._production;
  }
  getEndPoint(): string {
    return this._endPoint;
  }

  setEnvironment(appData:any){
    this._production = appData.production;
    this._endPoint = appData.endPoint;
    this._appName = appData.appName;
  }
}
