import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private _production = false;
  private _endPoint: string = '';
  private _appName: string = '';
  constructor() {}
  /**
   * Get application name
   * @returns string
   */
  getAppName(): string {
    return this._appName;
  }

  /**
   * Check production mode
   * @returns boolean
   */
  isProduction(): boolean {
    return this._production;
  }
  /**
   * Get Application end point
   * @returns string
   */
  getEndPoint(): string {
    return this._endPoint;
  }

  /**
   * Set All environment variables
   * @param appData
   */
  setEnvironment(appData: any) {
    this._production = appData.production;
    this._endPoint = appData.endPoint;
    this._appName = appData.appName;
  }
}
