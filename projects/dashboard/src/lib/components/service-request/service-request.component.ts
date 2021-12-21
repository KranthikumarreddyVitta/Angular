import { Component, OnInit } from '@angular/core';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';
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
  orderLIst: Array<any> = [];
  subjectList: Array<any> = [];
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
  constructor(private serviceRequestService: ServiceRequestService) {}

  ngOnInit(): void {}

  onGridReady(api: GridReadyEvent) {
    api.api.sizeColumnsToFit();
    this.rowData = this.getServiceList();
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
}
