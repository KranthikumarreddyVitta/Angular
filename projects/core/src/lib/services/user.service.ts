import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser, User } from '../interfaces/user';
import { EnvironmentService } from './environment.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user: User = new User({} as IUser);
  constructor(private _http: HttpService, private _env: EnvironmentService) {}

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
  setUser(user: IUser): void {
    this._user = new User(user);
  }

  /**
   * Load User
   * @returns
   */
  loadUser(userData: { email: string; password: string }): Observable<any> {
    return this._http
      .sendPOSTRequest<IUser>(
        this._env.getEndPoint() + 'getToken',
        JSON.stringify(userData)
      )
      .pipe(
        tap((user: IUser) => {
          if (user.userId) {
            this.setUser(user);
          }
        })
      );
  }
}
