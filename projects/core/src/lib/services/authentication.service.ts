import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private _user: UserService) {}

  logIn(userData: { email: string; password: string }): Observable<any> {
    return this._user.loadUser(userData);
  }

  signUp() {}

  resetPassword() {}

  checkUser(): boolean {
    let data = localStorage.getItem('u');
    if (data) {
      let user = JSON.parse(atob(data)) as IUser;
      this._user.setUser(user);
    }
    return this.isLoggedIn();
  }

  /**
   * Checks user status
   * @returns
   */
  isLoggedIn(): boolean {
    return !!this._user.getUser()?.getId();
  }
}
