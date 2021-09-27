import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-edit-cell-renderer',
  templateUrl: './edit-cell-renderer.component.html',
  styleUrls: ['./edit-cell-renderer.component.scss']
})
export class EditCellRendererComponent implements OnInit , ICellRendererAngularComp{

  constructor() { }

  ngOnInit(): void {
  }

  agInit(params: ICellRendererParams) : void{

  }
  refresh(): boolean{
      return true;
  }

}
