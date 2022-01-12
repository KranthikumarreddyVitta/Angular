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

  agInit(params: any): void {
    let isExtraRow = params?.data?.isExtraRow;
    if (params?.colDef?.isDeleteOption && !params?.data?.isExtraRow) this.isDelete = true;
    if (isExtraRow) {
      let keys = params.data.sgid;
      switch (keys) {
        case 'SUB TOTAL ($)':
          this.value = Math.round(this._computationService.getSubTotal(params));
          break;
        case 'TOTAL ($)':
          let subTotal = this._computationService.getSubTotal(params);
          let deliveryFee = this.getDeliveryFee(params);
          let taxPercent = this.getTaxPercentage(params);
          let taxAmount = this._computationService.getTaxAmount(
            subTotal,
            deliveryFee,
            taxPercent
          );
          this.value = this._computationService.getTotalAmount(
            subTotal,
            deliveryFee,
            taxAmount
          );
          break;
        default:
          if (keys.includes('TAXES')) {
            let subTotal = this._computationService.getSubTotal(params);
            let deliveryFee = this.getDeliveryFee(params);
            let taxPercent = this.getTaxPercentage(params);
            this.value = this._computationService.getTaxAmount(
              subTotal,
              deliveryFee,
              taxPercent
            );
          } else {
            this.value = params.value;
          }
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

  getDeliveryFee(params: ICellRendererParams) {
    return parseFloat(
      params.api.getValue('is_total', params.api.getPinnedBottomRow(1))
    );
  }

  getTaxPercentage(params: ICellRendererParams) {
    return parseFloat(params.api.getPinnedBottomRow(2).data.taxPercent ?? 1);
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
