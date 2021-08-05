import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';
import {
  ImageRendererComponent,
  UserService,
} from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { quoteRoute } from '../../quote-routing';
import { QuoteListService } from './quote-list.service';

@Component({
  selector: 'lib-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss'],
})
export class QuoteListComponent implements OnInit {
  quoteInfo = {
    bannerIconImg: 'assets/quote/images/quote-icon.png',
    bannerIconImgTxt: 'Quote Icon',
    bannerImg: 'assets/quote/images/quote_banner.jpg',
    bannerImgTxt: 'Quote Banner Image',
    bannerBottomTxt:
      'Get an estimated cost for a particular moodboard, piece or project.',
    text: 'Quote',
  };

  columnDefs = [
    { field: 'sgid', headerName: 'Quote Number' },
    { field: 'name', headerName: 'Customer name' },
    { field: 'company_name', headerName: 'Company Name' },
    { field: 'project_name', headerName: 'Project Name' },
    {
      field: 'created_at',
      headerName: 'Quote Created Date',
      filter: 'agDateColumnFilter',
    },
    { field: 'order_status', headerName: 'Order Submitted' },
  ];

  rowData: Observable<any[]> = new Observable();
  gridOptions: GridOptions = {
    onRowClicked: (param) => this.onRowClicked(param),
    // headerHeight: 100
    rowHeight: 50,
    onGridReady: (api: GridReadyEvent) => this.onGridReady(api),
  };

  selectedButton: 'allQuote' | 'myQuote' = 'allQuote';
  frameworkComponents = {
    ImageRendererComponent: ImageRendererComponent,
  };
  constructor(
    private _quoteListService: QuoteListService,
    private _router: Router,
    private _userService: UserService
  ) {}

  ngOnInit(): void {}
  onGridReady(api: GridReadyEvent) {
    this.rowData = this._quoteListService.getQuoteList();
    api.api.sizeColumnsToFit();
  }

  onRowClicked(param: any) {
    let quoteId = param?.data?.sgid;
    if (quoteId) {
      this._router.navigate(['quote', quoteId]);
    }
  }

  getMyQuoteList() {
    this.selectedButton = 'myQuote';
    this.rowData = this._quoteListService.getMyQuoteList(
      this._userService.getUser().getId(),
      '',
      ''
    );
  }

  getQuoteList() {
    this.selectedButton = 'allQuote';
    this.rowData = this._quoteListService.getQuoteList();
  }
}
