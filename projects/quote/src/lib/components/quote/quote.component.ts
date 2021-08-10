import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToasterService } from 'projects/core/src/lib/services/toaster.service';
import { PaymentComponent, UserService } from 'projects/core/src/public-api';
import { QuoteHeaderComponent } from '../../common/components/quote-header/quote-header.component';
import { QuoteDetailService } from './quote-detail.service';

@Component({
  selector: 'lib-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  quoteId: number = 0;
  @ViewChild('quoteHeader') quoteHeader: QuoteHeaderComponent =
    {} as QuoteHeaderComponent;
  constructor(
    private _route: ActivatedRoute,
    private _quoteDetailService: QuoteDetailService,
    private _toaster: ToasterService,
    private _dialog: MatDialog,
    private _user: UserService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.quoteId = params.id;
    });
  }

  saveQuote() {
    let quoteData: Array<any> = [];
    let quoteDetails = this.quoteHeader.quoteDetails;
    let pinnedRowData = this.quoteHeader.pinnedBottomRowData;
    let agGrid = this.quoteHeader.agGrid;
    agGrid?.api?.forEachNode((rowNode) => {
      let node = rowNode.data;
      let obj: any = {
        sgid: node?.sgid,
        button_type: node?.button_type,
        quote_id: quoteDetails.sgid,
        sub_total: pinnedRowData[0].is_total,
        old_month: node.old_month,
        monthly_rent: quoteDetails.monthly_rent,
        delivery_fee: quoteDetails.delivery_fee,
        pickup_fee: quoteDetails.pickup_fee,
        tax: pinnedRowData[2].is_total,
        net_total: quoteDetails.net_total,
        qty: node.is_qty,
        discount: node.discount || 0,
        quote_discount: quoteDetails.discount || 0,
        quote_discount_price: quoteDetails.discount_price || 0,
        percentage_discount: node.percentage_discount || 0,
        months: node.months,
        total: node.is_total,
        price: node.price,
        buy_price: node.buy_price,
        sale_price: node.price,
        apply_b2b_discount: node.b2b_discount || 0,
      };
      quoteData.push(obj);
    });
    this._quoteDetailService.updateQuote(quoteData).subscribe(
      (data) => {
        this._toaster.success('Quote Saved Successfully');
      },
      (error) => {
        this._toaster.error(error);
      }
    );
  }

  continueToPayment() {
    this._dialog
      .open(PaymentComponent, {
        height: '15rem',
        data: { quoteId: this.quoteHeader?.quoteDetails?.sgid },
      })
      .afterClosed()
      .subscribe(
        (data) => {
          data['quote_id'] = this.quoteHeader?.quoteDetails?.sgid;
          data['sgid'] = this._user.getUser().getId();
          this._quoteDetailService.createOrder(data).subscribe(
            (data) => {
              this._toaster.success('Payment Done');
            },
            (error) => {
              this._toaster.success('Payment Fails');
            }
          );
        },
        (error) => {}
      );
  }
}
