import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';
import { ImageRendererComponent } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { QuoteDetailService } from './quote-detail.service';

@Component({
  selector: 'lib-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  columnDefs = [
    {
      field: 'sgid',
      width :100,
      headerName: 'S.NO',
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
    },
    {
      headerName: 'TYPE',
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

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 },
  // ];

  gridOptions: GridOptions = {
    onGridReady: (api: GridReadyEvent) => this.onGridReady(api),
    rowHeight: 100,
    headerHeight: 100,
    getRowHeight: (params: any)=>{ return (params?.data?.isExtraColumn? 50:100)}
  };
  defaultColDef = {
    // autoHeight: true,
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
  quoteDetails : any= {};

  rowData: Observable<any[]> = new Observable();
  moodboards: Array<any> = [];
  private _quoteId: number = 0;
  constructor(
    private _quoteDetailService: QuoteDetailService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this._quoteId = params.id;
      this.getQuoteInformation()
    });
  }

  onGridReady(evt: GridReadyEvent) {
    evt.api.sizeColumnsToFit();
    this.rowData = this.getQuoteSummary();
    this.getMoodboardInQuote();
  }

  getQuoteSummary<T>(): Observable<T> {
    return this._quoteDetailService.getQuoteSummary<T>(this._quoteId);
  }

  getMoodboardInQuote() {
    this._quoteDetailService
      .getMoodboardInQuote<Array<any>>(this._quoteId)
      .subscribe((data: Array<any>) => {
        this.moodboards = data;
      });
  }
  getQuoteInformation(){
    this._quoteDetailService.getQuoteInformation(this._quoteId).subscribe(data=>{
      this.quoteDetails = data;
    })
  }
}
