import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    { field: 'created_at', headerName: 'Quote Created Date' },
    { field: 'order_status', headerName: 'Order Submitted' },
  ];

  rowData: Observable<any[]> = new Observable();

  constructor(private quoteListService: QuoteListService) {}

  ngOnInit(): void {
    this.rowData = this.quoteListService.getQuoteList();
  }
}
