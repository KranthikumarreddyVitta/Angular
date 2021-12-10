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
  hideAccounts = true;
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
      route: 'profile',
    },
    {
      name: 'Payment',
      route: 'payment',
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
      route: 'creApp',
    },
    {
      name: 'Lease Agreement',
      route: '',
    },
  ];
  ngOnInit(): void {
    let user = this._user.getUser();
  }

  getDashboardData() {
    this._dashboardService.getDashboardData().subscribe((data) => {
      this.dashboardData = data;
    });
  }

  gotoPage(route: string | undefined) {
    this._router.navigate([route]);
  }



  toggleAccount() {
    this.hideAccounts = !this.hideAccounts;
  }
}
