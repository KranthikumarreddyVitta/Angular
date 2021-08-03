import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'lib-item-type',
  templateUrl: './item-type.component.html',
  styleUrls: ['./item-type.component.scss'],
})
export class ItemTypeComponent implements OnInit, ICellRendererAngularComp {
  status = 0;

  constructor() {}

  ngOnInit(): void {}

  agInit(params: ICellRendererParams): void {
    this.status = params.data.button_type;
  }

  refresh(params: ICellRendererParams): boolean {
    this.status = params.data.button_type;
    return false;
  }
}
