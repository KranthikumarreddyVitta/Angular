import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';
import { ToasterService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceRequestService } from './service-request.service';

@Component({
  selector: 'lib-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.scss'],
})
export class ServiceRequestComponent implements OnInit {
  addRequest = true;
  orderList: Array<any> = [];
  subjectList: Array<any> = [
    {
      name: 'Order issue',
      value: 'Order issue',
    },
    { name: 'Delivery issue', value: 'Delivery issue' },
    { name: 'Upgrade issue', value: 'Upgrade issue' },
    { name: 'Furniture damage/issue', value: 'Furniture damage/issue' },
    { name: 'Payment related issue', value: 'Payment related issue' },
    { name: 'Pickup scheduling', value: 'Pickup scheduling' },
    { name: 'Extend lease/Buyout', value: 'Extend lease/Buyout' },
    { name: 'Others', value: 'Others' },
  ];
  columnDefs = [
    {
      field: 'order_no',
      headerName: 'Order No',
    },
    {
      field: 'subject',
      headerName: 'Subject',
    },
    {
      field: 'request_date',
      headerName: 'Request Date',
    },
    {
      field: 'open_since',
      headerName: 'Open Since',
    },
    {
      field: 'status',
      headerName: 'Status',
    },
  ];
  selectedOrder = '';
  selectedSubject = '';
  message = '';
  gridOptions: GridOptions = {
    onGridReady: (api: GridReadyEvent) => {
      this.onGridReady(api);
    },
    headerHeight: 90,
    rowHeight: 90,
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
    private serviceRequestService: ServiceRequestService,
    private _toaster: ToasterService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.getOrders();
    this.rowData = this.getServiceList();
  }
  redirectToOrder(id: any){
    this._route.navigate(['/order',id]);
  }
  onGridReady(api: GridReadyEvent) {
    api.api.sizeColumnsToFit();
    this.rowData = this.getServiceList();
  }

  getOrders() {
    this.serviceRequestService.getOrderList().subscribe((resp) => {
      if (resp.statusCode == 200) {
        this.orderList = resp.quote;
      } else {
        this.orderList = [];
      }
    });
  }

  getServiceList(): Observable<any> {
    return this.serviceRequestService.getServiceList().pipe(
      map((data) => {
        if (data.statusCode) {
          return data.result;
        } else {
          return [];
        }
      })
    );
  }

  submit() {
    let obj = {
      order_id: this.selectedOrder,
      subject: this.selectedSubject,
      message: this.message,
    };
    this.serviceRequestService
      .createServiceRequest(obj)
      .subscribe((resp: any) => {
        if (resp.statusCode == 200) {
          this.addRequest = true;
          this.getServiceList();
          this._toaster.success('Service request added.');
        } else {
        }
      });
  }
}
