import { Injectable } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Injectable({
  providedIn: 'root',
})
export class ComputationService {
  constructor() {}

  /**
   * Get product total price
   * @param price
   * @param discount
   * @param quantity
   * @returns
   */
  getProductTotalAmount(price: number, discount: number, quantity: number) {
    return (price - discount) * quantity;
  }

  /**
   * Get subtotal of all product
   * @param params
   * @returns
   */
  getSubTotal(params: ICellRendererParams) {
    let total = 0;
    params.api.forEachNode((node) => {
      total =
        total + parseFloat(params.api.getValue(params?.column?.getColId() as string, node));
    });
    return total;
  }

  /**
   * Get Quote Total amount
   * @param subTotal
   * @param deliveryFee
   * @param taxAmount
   * @returns
   */
  getTotalAmount(
    subTotal: number,
    deliveryFee: number,
    taxAmount: number
  ): number {
    return subTotal + deliveryFee + taxAmount;
  }
}
