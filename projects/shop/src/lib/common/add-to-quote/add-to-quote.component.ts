import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { QuoteListService } from 'projects/quote/src/lib/components/quote-list/quote-list.service';
import {
  AddproductComponent,
  QuoteCreateFormComponent,
  QuoteService,
} from 'projects/quote/src/public-api';

@Component({
  selector: 'lib-add-to-quote',
  templateUrl: './add-to-quote.component.html',
  styleUrls: ['./add-to-quote.component.scss'],
})
export class AddToQuoteComponent implements OnInit {
  quoteList: Array<any> = [];
  selectedQuote = '';
  quotesId: any;
  constructor(
    private _quoteListService: QuoteListService,
    private _user: UserService,
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private _toaster: ToasterService,
    public _dialogRef: MatDialogRef<AddToQuoteComponent>,
    private _quoteService: QuoteService,
  ) {}

  ngOnInit(): void {
    this.getMyQuotes();
  }
  createNewQuote() {
    this._dialog
      .open(QuoteCreateFormComponent, {
        height: '80%',
        width: '70%',
        data: {
          isDialog: true,
        },
      })
      .afterClosed()
      .subscribe((data) => {
        this.getMyQuotes()
        console.log(data);
      });
  }

  changed(event:any){
    debugger
    this.quotesId = event.target.value
    console.log(this.quotesId);
    
}

  addItemToQuote(type: any) {
    debugger
    if(type == '') {
      if(this.dialogData.product_id) {
        let obj = {
          quote_id: this.selectedQuote,
          product_id: this.dialogData.product_id,
          sku:this.dialogData.sku,
          quantity: this.dialogData.quantity,
          button_type: this.dialogData.button_type,
          month: this.dialogData.months,
          warehouse_id: this.dialogData.warehouse_id,
          user_id: this.dialogData.user_id,
          floorplan_id:null,
          units:null,
          moodboard_id:null,
        };
        this._quoteService.addProductQuote(obj).subscribe((resp: any) => {
          if (resp.statusCode == 200) {
            this._toaster.success(resp.message);
            this._dialogRef.close(1);
          } else {
            this._toaster.success(resp.message);
            this._dialogRef.close(0);
          }
        });  

       }
    }

  }

  getMyQuotes() {
    this._quoteListService
      .getQuoteList<Array<any>>(this._user.getUser().getId(), 'my', 'quotes')
      .subscribe(
        (data: Array<any>) => {
          this.quoteList = data;
          console.log(this.quoteList);
          
        },
        (error) => (this.quoteList = [])
      );
  }
}
