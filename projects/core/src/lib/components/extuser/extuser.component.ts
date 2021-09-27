import { Component, OnInit } from '@angular/core';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';
import { from, Observable } from 'rxjs';
import { EditCellRendererComponent } from './edit-cell-renderer/edit-cell-renderer.component';
import { ExtuserService } from './extuser.service';

@Component({
  selector: 'app-extuser',
  templateUrl: './extuser.component.html',
  styleUrls: ['./extuser.component.scss']
})
export class ExtuserComponent implements OnInit {
  columnDefs = [
    { field: 'first_name', headerName: 'First Name' },
    { field: 'last_name', headerName: 'Last Name' },
    { field: 'company', headerName: 'Company Name' },
    { field: 'user_id', headerName: 'User ID' },
    {
      field: 'last_pass_change_date',
      headerName: 'Last Password Change Date Time',
    },
    {
      field: 'last_login',
      headerName: 'Last Login Date Time'
    },{
      field:'',
      headerName: 'Reset Password',
      cellRenderer: 'EditCellRendererComponent',
    }
  ];

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
  gridOptions: GridOptions = {
    rowHeight: 50,
    onGridReady: (api: GridReadyEvent) => this.onGridReady(api),
  };

  frameworkComponents = {
    EditCellRendererComponent : EditCellRendererComponent,
  };
  constructor(private externalUser: ExtuserService) { }

  ngOnInit(): void {
  }

  onGridReady(api: GridReadyEvent){
    this.rowData = this.externalUser.getExternalUser();
    api.api.sizeColumnsToFit();
  }

}
