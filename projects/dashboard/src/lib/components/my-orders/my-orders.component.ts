import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';
import {
  EnvironmentService,
  HttpService,
  UserService,
} from 'projects/core/src/public-api';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lib-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
})
export class MyOrdersComponent implements OnInit {
  columnDefs = [
    {
      field: 'name',
      headerName: 'Customer Name',
    },
    {
      field: 'company_name',
      headerName: 'Company Name',
    },
    {
      field: 'project_name',
      headerName: 'Project Name',
    },
    {
      field: 'created_at',
      headerName: 'Quote Created Date',
    },
    {
      field: 'order_date',
      headerName: 'Order Submitted',
    },
  ];
  gridOptions: GridOptions = {
    onGridReady: (api: GridReadyEvent) => {
      this.onGridReady(api);
    },
  };
  defaultColDef = {
    wrapText: true,
    cellClass: 'grid-cell',
    cellStyle: {
      'line-height': 'normal',
      'align-items': 'center',
      'justify-content': 'center',
      display: 'flex',
      padding: '0 0.5rem',
    },
  };
  rowData: Observable<any[]> = new Observable();
  constructor(
    private _http: HttpService,
    private _env: EnvironmentService,
    private _user: UserService,
    private _route: Router
  ) {}
  redirectToOrder(id: any){
    this._route.navigate(['business/order',id]);
  }
  ngOnInit(): void {
    this.rowData = this.getMyOrders();

  }
  onGridReady(api: GridReadyEvent) {
    api.api.sizeColumnsToFit();
  }

  getMyOrders(): Observable<any> {
    let obj = {
      user_id: this._user.getUser().getId(),
      source_type: 'all',
      type: 'orders',
    };
    return this._http
      .sendGETRequest(
        this._env.getEndPoint() +
          'load/customer/quotes?source_type=all&type=orders&user_id=' +
          this._user.getUser().getId()
      )
      .pipe(
        map((x: any) => {
          if (x.statusCode == 200) {
            return x.quote;
          }
          return [];
        })
      );
  }
}
