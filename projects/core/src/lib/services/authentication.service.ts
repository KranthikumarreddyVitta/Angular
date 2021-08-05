import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  logIn(){

  }

  signUp(){

  }

  resetPassword(){

  }

  /**
   * Checks user status
   * @returns 
   */
  isLoggedIn(): boolean{
    return true;
  }
}
