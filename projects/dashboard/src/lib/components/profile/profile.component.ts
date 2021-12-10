import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'lib-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private _dashboardService: DashboardService,
    private _router: Router,
    private _toasterService: ToasterService,
    public _user: UserService
  ) { }
  resetPassword = new FormGroup({});
  editProfileForm = new FormGroup({});
  companyName = '';
  email = '';
  phone = '';
  editProfile: boolean = false;
  editPassword: boolean = false;
  dashboardData: any = null;

  ngOnInit(): void {
    let user = this._user.getUser();

    this.companyName = user.getCompanyName();
    this.email = user.getEmail();
    this.phone = '';

    this.editProfileForm.addControl(
      'company',
      new FormControl(this.companyName, [Validators.required])
    );
    this.editProfileForm.addControl(
      'email',
      new FormControl(this.email, [Validators.required])
    );
    this.editProfileForm.addControl(
      'mobile',
      new FormControl(this.phone, [Validators.required])
    );
    this.getDashboardData();
    this.resetPassword.addControl('current_password', new FormControl(''));
    this.resetPassword.addControl(
      'password',
      new FormControl('', [Validators.required])
    );
    this.resetPassword.addControl(
      'confirm_password',
      new FormControl('', [Validators.required])
    );

  }
  updatePassword() {
    if (this.resetPassword.invalid) {
      return;
    }
    if (
      this.resetPassword.value.password !=
      this.resetPassword.value.confirm_password
    ) {
      this._toasterService.error('Password is not Matched');
      return;
    }
    let obj = {
      current_password: this.resetPassword.value.current_password,
      password: this.resetPassword.value.password,
      email: this.email,
    };
    this._dashboardService.updatePassword(obj).subscribe((data) => {
      if (data.statusCode == 200) {
        this._toasterService.success(data.message);
        this.editPassword = false;
      } else {
        this._toasterService.error(data.message);
      }
    });
  }
  getDashboardData() {
    this._dashboardService.getDashboardData().subscribe((data) => {
      this.dashboardData = data;
    });
  }

  editProfileToggle(value: boolean) {
    this.editProfile = value;
  }
  updateProfile(value: boolean) {
    this.editProfile = value;
    let  {
      email,
      mobile,
      company
    } = this.editProfileForm.value;
    let obj = {
      id_user :this._user.getUser().getId(),
      first_name: this._user.getUser().getFirstName(),
      last_name: this._user.getUser().getLastName(),
      email,
      mobile,
      company
    }
    this._user.updateUserInfo(obj).subscribe((resp:any)=>{
      if (resp.statusCode == 200) {
        this._toasterService.success(resp.message);
        this.editProfile = false;
      } else {
        this._toasterService.error(resp.message);
      }
    })
  }
}
