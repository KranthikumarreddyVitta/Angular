import { Component, OnInit } from '@angular/core';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'lib-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
})
export class MyOrdersComponent implements OnInit {
  columnDefs = [
    {
      field: 'sgid',
      headerName: 'Customer Name',
    },
    {
      field: 'sgid',
      headerName: 'Company Name',
    },
    {
      field: 'sgid',
      headerName: 'Project Name',
    },
    {
      field: 'sgid',
      headerName: 'Quote Created Date',
    },
    {
      field: 'sgid',
      headerName: 'Order Submitted',
    },
  ];
  gridOptions: GridOptions = {
    onGridReady: (api: GridReadyEvent) => {
      this.onGridReady(api);
    },
    rowHeight: 100,
    headerHeight: 100,
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
  rowData = []
  constructor() {}

  ngOnInit(): void {}
  onGridReady(api: GridReadyEvent) {}
}
