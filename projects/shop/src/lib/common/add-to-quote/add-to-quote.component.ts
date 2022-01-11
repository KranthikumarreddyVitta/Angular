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
} from 'projects/quote/src/public-api';

@Component({
  selector: 'lib-add-to-quote',
  templateUrl: './add-to-quote.component.html',
  styleUrls: ['./add-to-quote.component.scss'],
})
export class AddToQuoteComponent implements OnInit {
  quoteList: Array<any> = [];
  selectedQuote = '';
  constructor(
    private _quoteListService: QuoteListService,
    private _user: UserService,
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private _toaster: ToasterService,
    public _dialogRef: MatDialogRef<AddToQuoteComponent>
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

  addItemToQuote() {
    this._dialog
      .open(AddproductComponent, {
        height: '80%',
        width: '50%',
        data: { ...this.dialogData, quoteId: this.selectedQuote },
      })
      .afterClosed()
      .subscribe((data) => {
        this._dialogRef.close(data);
      });
  }

  getMyQuotes() {
    this._quoteListService
      .getQuoteList<Array<any>>(this._user.getUser().getId(), 'my', 'quotes')
      .subscribe(
        (data: Array<any>) => {
          this.quoteList = data;
        },
        (error) => (this.quoteList = [])
      );
  }
}
