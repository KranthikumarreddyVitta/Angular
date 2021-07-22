import { Component, OnInit } from '@angular/core';
import { Column, ColumnApi } from 'ag-grid-community';

@Component({
  selector: 'lib-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent implements OnInit {

  quoteInfo = {
    bannerIconImg : 'assets/quote/images/quote-icon.png',
    bannerIconImgTxt : 'Quote Icon',
    bannerImg : 'assets/quote/images/quote_banner.jpg',
    bannerImgTxt : 'Quote Banner Image',
    bannerBottomTxt : 'Get an estimated cost for a particular moodboard, piece or project.',
    text : 'Quote'
  }

  columnDefs = [
    { field: 'make',headerName:'Quote Number' },
    { field: 'model', headerName:'Customer name' },
    { field: 'price',headerName:'Company Name'},
    { field: 'price',headerName:'Project Name'},
    { field: 'price',headerName:'Quote Created Date'},
    { field: 'price',headerName:'Order Submitted'}
];

rowData  = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];
  constructor() { }

  ngOnInit(): void {
  }

}
