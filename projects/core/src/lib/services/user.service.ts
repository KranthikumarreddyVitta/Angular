import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser, User } from '../interfaces/user';
import { EnvironmentService } from './environment.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user: User = {} as User;
  constructor(private _http: HttpService,private _env: EnvironmentService) {}

  /**
   * Get User Details
   * @returns 
   */
  getUser(): User {
    return this._user;
  }

  /**
   * Set user 
   * @param user 
   */
  private setUser(user: IUser): void {
    this._user = new User(user);
  }

  /**
   * Load User
   * @returns 
   */
  loadUser(): Observable<any> {
    let obj = { email: 'parul@inhabitr.in', password: '123456' };
    return this._http
      .sendPOSTRequest<IUser>(this._env.getEndPoint()+'getToken', JSON.stringify(obj))
      .pipe(tap((user: IUser) => {
        this.setUser(user);
      }));
  }
}
