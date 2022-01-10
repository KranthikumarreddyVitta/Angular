import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentComponent } from 'projects/core/src/public-api';

@Component({
  selector: 'lib-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  continueToPayment() {
    this._dialog
      .open(PaymentComponent, {
        height: '15rem',
      })
  }

}
