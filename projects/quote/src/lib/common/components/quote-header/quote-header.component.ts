import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';
import { ImageRendererComponent } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { QuoteHeaderService } from './quote-header.service';

@Component({
  selector: 'lib-quote-header',
  templateUrl: './quote-header.component.html',
  styleUrls: ['./quote-header.component.scss'],
})
export class QuoteHeaderComponent implements OnInit {
  @Input() quoteId: number = 0;
  @Input() text: string = 'QUOTE';
  @Input() iconPath: string = 'assets/quote/images/quote-icon.png';

  @Output() onCopy = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  
  quoteDetails: any = {};
  moodboards: Array<any> = [];
  pinnedBottomRowData = [{
    subTotal: 'abc',
    sgid: 'SUB TOTAL',
    is_total: '100',
    isExtraColumn: true,
  },{
    subTotal: 'abc',
    sgid: 'DELIVERY FEE',
    is_total: '100',
    isExtraColumn: true,
  },{
    subTotal: 'abc',
    sgid: 'TAXES (8.6%)',
    is_total: '100',
    isExtraColumn: true,
  },{
    subTotal: 'abc',
    sgid: 'TOTAL',
    is_total: '100',
    isExtraColumn: true,
  }];

  columnDefs = [
    {
      field: 'sgid',
      width :100,
      headerName: 'S.NO',
      headerTooltip:'S.NO',
      colSpan: (params: any) => (params.data.subTotal === 'abc' ? 10 : 1),
      cellStyle : (params:any)=>{
        if(params.data.subTotal === 'abc'){
          return {'text-align': 'end'}
        } 
        return {'justify-content': 'center'};
      }
    },
    { field: 'warehouse_name', headerName: 'CITY' },
    { field: 'sku', headerName: 'SKU' },
    {
      headerName: 'IMAGE',
      cellRenderer : 'ImageRendererComponent',
      field:'product_images.small',
      cellStyle : {
        'padding': '0.3rem'
      }
    },
    {
      headerName: 'PRODUCT NAME',
      field: 'name',
      width :'250px'
    },
    {
      headerName: 'TYPE',
      field: 'button_type'
    },
    {
      headerName: 'QUANTITY',
      field: 'is_qty',
    },
    {
      headerName: 'BUY PRICE',
      field: 'buy_price',
    },
    {
      headerName: 'RENTAL PRICE/MONTH',
      field: 'price',
    },
    {
      headerName: 'MONTHS',
      field: 'months',
    },
    {
      headerName: 'TOTAL',
      field: 'is_total',
    }
  ];

  gridOptions: GridOptions = {
    onGridReady: (api: GridReadyEvent) => this.onGridReady(api),
    rowHeight: 100,
    headerHeight: 100,
    getRowHeight: (params: any)=>{ return (params?.data?.isExtraColumn? 50:100)}
  };
  defaultColDef = {
    wrapText: true,
    cellClass : 'grid-cell',
    cellStyle : {
      'line-height':'normal',
      'align-items': 'center',
      'display': 'flex'
    }
  }
  frameworkComponents = {
    ImageRendererComponent : ImageRendererComponent
  }
  rowData: Observable<any[]> = new Observable();


  constructor(private _quoteHeaderService: QuoteHeaderService) {}

  ngOnInit(): void {
    this.getQuoteInformation();
    this.getMoodboardInQuote();
  }
  onGridReady(evt: GridReadyEvent) {
    evt.api.sizeColumnsToFit();
    this.rowData = this.getQuoteSummary();
    // this.getMoodboardInQuote();
  }

  getQuoteSummary<T>(): Observable<T> {
    return this._quoteHeaderService.getQuoteSummary<T>(this.quoteId);
  }

  getMoodboardInQuote() {
    this._quoteHeaderService
      .getMoodboardInQuote<Array<any>>(this.quoteId)
      .subscribe((data: Array<any>) => {
        this.moodboards = data;
      });
  }

  getQuoteInformation() {
    this._quoteHeaderService
      .getQuoteInformation(this.quoteId)
      .subscribe((data) => {
        this.quoteDetails = data;
      });
  }

  OnCopy(evt: any) {
    this.onCopy.emit(evt);
  }
  OnEdit(evt: any) {
    this.onEdit.emit(evt);
  }
}
