import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ComputationService } from 'projects/core/src/public-api';

@Component({
  selector: 'lib-total-cell-renderer',
  templateUrl: './total-cell-renderer.component.html',
  styleUrls: ['./total-cell-renderer.component.scss'],
})
export class TotalCellRendererComponent
  implements OnInit, ICellRendererAngularComp
{
  isDelete = false;
  value: number = 0;
  constructor(private _computationService: ComputationService) {}

  ngOnInit(): void {}

  agInit(params: ICellRendererParams): void {
    let isExtraRow = params?.data?.isExtraRow;
    this.isDelete = params?.data?.isDeleteOption;
    if (isExtraRow) {
      let keys = params.data.sgid;
      switch (keys) {
        case 'SUB TOTAL ($)':
          this.value = this._computationService.getSubTotal(params);
          break;
        case 'TOTAL ($)':
          let subTotal = this._computationService.getSubTotal(params);
          let deliveryFee = parseFloat(
            params.api.getValue('is_total', params.api.getPinnedBottomRow(1))
          );
          let taxAmount = parseFloat(
            params.api.getValue('is_total', params.api.getPinnedBottomRow(2))
          );
          this.value = this._computationService.getTotalAmount(
            subTotal,
            deliveryFee,
            taxAmount
          );
          break;
        default:
          this.value = params.value;
          break;
      }
    } else {
      let price = this.getItemPrice(params);
      let discount = parseFloat(params.data.discount ?? 0);
      let quantity = parseFloat(params.data.is_qty ?? 0);
      this.value = this._computationService.getProductTotalAmount(
        price,
        discount,
        quantity
      );
    }
    params.node.setDataValue(params.column?.getId() as string, this.value);
    // params.api.redrawRows();
  }

  refresh(params: ICellRendererParams): boolean {
    this.agInit(params);
    return true;
  }

  getItemPrice(params: ICellRendererParams): number {
    let price =
      params.data.button_type === 0
        ? params.data.price ?? 0
        : params.data.buy_price ?? 0;
    return parseFloat(price);
  }
}
