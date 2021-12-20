import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '../../../../../core/src/lib/services/dialog.service';
import { DashboardService } from '../../dashboard.service';
import { ToasterService, UserService } from '../../../../../core/src/public-api';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'lib-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  rowData: Observable<any[]> = new Observable();
  color: ThemePalette = 'accent';
  checked = false;

  constructor(private _dashboardService: DashboardService,
    private _toaster: ToasterService,   
    private _user: UserService,
    private _dailog: DialogService,
    private _route: Router) { }

  ngOnInit(): void {
    this.getInvoicesList();
  }
  redirectToOrder(id: any){
    this._route.navigate(['/order',id]);
  }

  getInvoicesList(){
    this.rowData = this._dashboardService.getAccountData('invoices').pipe(
      map((data: any) => {
        // data.result.forEach((element: any, index: any) => {
        //   data.result[index]['checked'] = element.auto_charge == 'N' ? false : true;  
        // });
        return data.result;
      })
    );
  }

}
