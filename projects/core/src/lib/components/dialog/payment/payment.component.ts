import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ToasterService } from '../../../services/toaster.service';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  option: 'card' | 'bank' = 'card';
  constructor(
    public dialogRef: MatDialogRef<PaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _paymentService: PaymentService,
    private _toaster: ToasterService
  ) {}

  ngOnInit() {}

  cancel() {
    this.dialogRef.close();
  }
  submit() {
    let success = (data: any) => this.dialogRef.close(data);
    let error = (error: any) => this._toaster.error(error);
    if (this.option === 'card') {
      this._paymentService.makeCardPayment().subscribe(success, error);
    } else {
      this._paymentService.makeBankPayment().subscribe(success, error);
    }
  }
}
