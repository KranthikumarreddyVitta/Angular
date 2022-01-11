import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { CoreService } from '../../services/core.service';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  passWordHide = false;
  constructor(
    private _auth: AuthenticationService,
    private _router: Router,
    private _toaster: ToasterService,
    private _coreService:CoreService
  ) {}
  logInForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.logInForm.addControl('email', new FormControl('', Validators.email));
    this.logInForm.addControl(
      'password',
      new FormControl('', Validators.pattern(''))
    );
  }

  onSubmit() {
    this._auth.logIn(this.logInForm.value).subscribe(
      (data) => {
        localStorage.setItem('u', btoa(JSON.stringify(data)));
        if (this._auth.isLoggedIn()) {
          this._coreService.getCartCount();
          this._router.navigate(['business/shop']);
        } else {
          this._toaster.error('Invalid Credential', { duration: 500 });
        }
      },
      (error) => {
        this._toaster.error('Invalid Credential', { duration: 500 });
      }
    );
  }
}
