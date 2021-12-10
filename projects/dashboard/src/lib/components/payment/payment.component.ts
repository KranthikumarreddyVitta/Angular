import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { ToasterService } from 'projects/core/src/lib/services/toaster.service';
import { UserService} from 'projects/core/src/public-api';
import { environment } from '../../../../../business/src/environments/environment';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lib-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private _dashboardService: DashboardService,
    private _toaster: ToasterService,   
    private _user: UserService
     ) { }
  bankcardList: any = [];
  columnDefs = [
    { field: 'payment_date', headerName: 'Payment Date' },
    { field: 'order_no', headerName: 'Order No' },
    { field: 'invoice_no', headerName: 'Invoice No' },
    { field: 'amount_paid', headerName: 'Amount Paid' },
    { field: 'invoice_date', headerName: 'Invoice Date' },
    { field: 'payment_type', headerName: 'Payment Type' },
  ];
  defaultColDef = {
    wrapText: true,
    cellClass: 'grid-cell',
    cellStyle: {
      'line-height': 'normal',
      'align-items': 'center',
      'justify-content': 'center',
      display: 'flex',
      padding: '0 0.25rem',
    },
  };
  onGridReady(api: GridReadyEvent) {
    this.getTransactionList()
    api.api.sizeColumnsToFit();
  }

  onRowClicked(param: any) {
  }

  rowData: Observable<any[]> = new Observable();
  gridOptions: GridOptions = {
    onRowClicked: (param) => this.onRowClicked(param),
    // headerHeight: 100
    rowHeight: 50,
    onGridReady: (api: GridReadyEvent) => this.onGridReady(api),
  };

  ngOnInit(): void {
    this.getCardBankDetails();
//    this.getTransactionList();
  }
  getTransactionList(){
    this.rowData = this._dashboardService.getTransationList().pipe(
      map((data: any) => {
        console.log(data);
        return data.result;
      })
    );
    // .subscribe((rsp: any)=>{
    //   this.rowData = rsp.result;
    // });
  }
  getCardBankDetails(){
    this._dashboardService.getBankCardDetails().subscribe((rsp: any)=>{
      this.bankcardList = rsp;
    });
  }
  AddDefault(){}
  AddCard(){
    const handler = (window as any).StripeCheckout.configure({
      key: environment.stripeKey,
      locale: 'USD',
      panelLabel: 'Confirm',
      token(response: any) {
        this.user_id = this._user.getUser().getId();
        const token = response.id;
        let param = {
          "payment_method" : 'stripe',
          "payment_token" : token,
          "sgid":this.user_id,
        }
        this._dashboardService.addBankCardDetails().subscribe((rsp: any)=>{
          this._toaster.success(rsp); 
          this.getCardBankDetails(); 
          //this.bankcardList = rsp;
        });
      }
    });
    handler.open({
      name: 'Inhabitr',
      description: '',
      currency: 'USD',
      email: this._user.getUser().getEmail(),
      allowRememberMe: true
    });


  }
  AddAccount(){
    const handler = (window as any).Plaid.create({
      env: 'production',
      clientName: 'Inhabitr',
      key: '74ca8ca3dead06d399c082d47e9a1d',
      product: ['auth'],
      selectAccount: true,
      onLoad() { },
      onSuccess(publicToken: any, metadata: any) {
        this.user_id = this._user.getUser().getId();
        let param = {
          "payment_method" : 'plaid',
          "payment_token" : publicToken,
          "sgid":this.user_id,
          "plaid_account_id":metadata.account_id,
        }
      this._dashboardService.addBankCardDetails().subscribe((rsp: any)=>{
        this._toaster.success(rsp); 
        this.getCardBankDetails();
      });
  
      },
      onExit(err: any, metadata: any) {
        if (err != null) {
        }
      },
      onEvent(eventName: any, metadata: any) {
      }
    });
    handler.open();
  }
}
