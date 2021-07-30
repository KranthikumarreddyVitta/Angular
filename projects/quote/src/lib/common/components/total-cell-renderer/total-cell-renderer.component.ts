import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Column, ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'lib-total-cell-renderer',
  templateUrl: './total-cell-renderer.component.html',
  styleUrls: ['./total-cell-renderer.component.scss'],
})
export class TotalCellRendererComponent
  implements OnInit, ICellRendererAngularComp
{
  value: number = 0;
  constructor() {}

  ngOnInit(): void {}

  agInit(params: ICellRendererParams): void {
    let isExtraRow = params?.data?.isExtraRow;
    if (isExtraRow) {
      let keys = params.data.sgid;
      switch (keys) {
        case 'SUB TOTAL':
          this.value = this.getSubTotal(params);
          break;
        case 'DELIVERY FEE':
          this.value = params.value;
          break;

        default:
          break;
      }
    } else {
      this.value = params.valueFormatted ? params.valueFormatted : params.value;
    }
  }
  
  refresh(params: ICellRendererParams): boolean {
    this.agInit(params);
    return true;
  }

  getSubTotal(params: ICellRendererParams) {
    let total = 0;
    params.api.forEachNode((node) => {
      total =
        total + params.api.getValue(params?.column?.getColId() as string, node);
    });
    return total;
  }
}
