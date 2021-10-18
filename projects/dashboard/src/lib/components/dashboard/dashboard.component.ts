import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'lib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  value = '';
  constructor(
    private _dashboardService: DashboardService,
    private _router: Router,
    private _toasterService: ToasterService,
    public _user: UserService
  ) {}
  dashboardData: any = null;
  navigationList = [
    {
      name: 'Profile',
      route: 'a',
    },
    {
      name: 'Payment',
      route: '',
    },
    {
      name: 'Invoices',
      route: 'B',
    },
    {
      name: 'Service Request',
      quote: '',
    },
    {
      name: 'Credit Application',
      route: '',
    },
    {
      name: 'Lease Agreement',
      route: '',
    },
  ];
  resetPassword = new FormGroup({});
  companyName= "";
  email="";
  phone = "";
  ngOnInit(): void {
    let user = this._user.getUser();
    this.companyName = user.getCompanyName();
    this.email =  user.getEmail();
    this.phone= "";
    this.getDashboardData();
    this.resetPassword.addControl('current_password', new FormControl(''));
    this.resetPassword.addControl('password', new FormControl('',[Validators.required]));
    this.resetPassword.addControl('confirm_password', new FormControl('',[Validators.required]));
  }

  getDashboardData() {
    this._dashboardService.getDashboardData().subscribe((data) => {
      this.dashboardData = data;
    });
  }

  gotoPage(route: string) {
    this._router.navigate([route]);
  }

  updatePassword() {
    if(this.resetPassword.invalid){
      return ;
    }
    if(this.resetPassword.value.password != this.resetPassword.value.confirm_password){
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
      } else {
        this._toasterService.error(data.message);
      }
    });
  }
}
