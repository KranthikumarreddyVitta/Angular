import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { CoreService } from '../../services/core.service';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  passWordHide = false;
  signUpForm: FormGroup;

  constructor(
    private _auth: AuthenticationService,
    private _router: Router,
    private _toaster: ToasterService,
    private _coreService: CoreService
  ) {
    this.signUpForm = new FormGroup({
      company: new FormControl('', Validators.required),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, this.matchValidator('confirm_password', true)]),
      confirm_password: new FormControl('', [Validators.required, this.matchValidator('password')])
    });
  }
  
  ngOnInit(): void {
  }

  matchValidator(
    matchTo: string,
    reverse?: boolean
  ): ValidatorFn {
    return (control: AbstractControl):
    ValidationErrors | null => {
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!control.parent &&
        !!control.parent.value &&
        control.value ===
        (control.parent?.controls as any)[matchTo].value
        ? null
        : { matching: true };
    };
  }

  onSubmit() {
    this._auth.signUp(this.signUpForm.getRawValue()).subscribe(
      (data: any) => {
        if (data.access_token) {
          // this.loginUser(data);
          this._toaster.success('Sign Up successful.', { duration: 500 });
          setTimeout(() => {
            this._router.navigate(['login']);
          }, 1500);
        } else {
          this._toaster.error('Something went wrong. Please try again later.', { duration: 500 });
        }
      }, (error) => {
        this._toaster.error('Something went wrong. Please try again later.', { duration: 500 });
      });
  }

  loginUser(data: any) {
    this._auth.logIn(data).subscribe(
      (resp) => {
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
