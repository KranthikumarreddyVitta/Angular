import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '../../../../../core/src/lib/services/dialog.service';
import { DashboardService } from '../../dashboard.service';
import { ToasterService, UserService } from '../../../../../core/src/public-api';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'lib-lease-agreement',
  templateUrl: './lease-agreement.component.html',
  styleUrls: ['./lease-agreement.component.scss']
})
export class LeaseAgreementComponent implements OnInit {

  rowData: Observable<any[]> = new Observable();
  constructor(private _dashboardService: DashboardService,
    private _toaster: ToasterService,   
    private _user: UserService,
    private _dailog: DialogService,
    private _route: Router) { }

  ngOnInit(): void {
    this.getInvoicesList();
  }
  getInvoicesList(){
    this.rowData = this._dashboardService.getAccountData('invoices').pipe(
      map((data: any) => {
        return data.result;
      })
    );
  }

}
