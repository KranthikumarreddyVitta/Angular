import { Component, OnInit } from '@angular/core';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.scss']
})
export class ServiceRequestComponent implements OnInit {

  addRequest = true;
  orderLIst : Array<any> = [];
  subjectList : Array<any> = [];
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
  constructor() { }

  ngOnInit(): void {
  }

  onGridReady(api: GridReadyEvent){

  }

}
