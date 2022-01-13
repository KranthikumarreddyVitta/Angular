import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';
import { EnvironmentService } from './environment.service';
import { HttpService } from './http.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private _user: UserService, private _router: Router, private _env: EnvironmentService,
    private _http: HttpService) {}

  logIn(userData: { email: string; password: string }): Observable<any> {
    return this._user.loadUser(userData);
  }

  signUp(data: any) {
    return this._http.sendPOSTRequest(this._env.getEndPoint() + 'signup', data);
  }

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

  logout() {
    localStorage.clear();
    this._user.setUser({} as IUser);
    this._router.navigate(['home']);
  }
}
