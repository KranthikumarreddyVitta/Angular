import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import {
  CounterComponent,
  ImageRendererComponent,
} from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ItemTypeComponent } from '../item-type/item-type.component';
import { TotalCellRendererComponent } from '../total-cell-renderer/total-cell-renderer.component';
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

  agGrid: GridReadyEvent = {} as GridReadyEvent;
  quoteDetails: any = {};
  moodboards: Array<any> = [];
  pinnedBottomRowData = [
    {
      subTotal: 'abc',
      sgid: 'SUB TOTAL',
      is_total: '012e',
      isExtraRow: true,
    },
    {
      subTotal: 'abc',
      sgid: 'DELIVERY FEE',
      is_total: '0',
      isExtraRow: true,
    },
    {
      subTotal: 'abc',
      sgid: 'TAXES',
      is_total: '0',
      isExtraRow: true,
    },
    {
      subTotal: 'abc',
      sgid: 'TOTAL',
      is_total: '0',
      isExtraRow: true,
    },
  ];

  columnDefs = [
    {
      field: 'sgid',
      width: 120,
      headerName: 'S.NO',
      headerTooltip: 'S.NO',
      colSpan: (params: any) => (params.data.subTotal === 'abc' ? 11 : 1),
      cellStyle: (params: any) => {
        if (params.data.subTotal === 'abc') {
          return { 'text-align': 'end' };
        }
        return '';
      },
    },
    { field: 'warehouse_name', headerName: 'CITY' },
    { field: 'sku', headerName: 'SKU' },
    {
      headerName: 'IMAGE',
      cellRenderer: 'ImageRendererComponent',
      field: 'product_images.small',
      cellStyle: {
        padding: '0.3rem',
      },
    },
    {
      headerName: 'PRODUCT NAME',
      field: 'name',
      width: '250px',
    },
    {
      headerName: 'TYPE',
      field: 'button_type',
      cellRenderer: 'ItemTypeCellRenderer',
    },
    {
      headerName: 'QUANTITY',
      field: 'is_qty',
      cellRenderer: 'CounterCellRenderer',
    },
    {
      headerName: 'BUY PRICE ($)',
      field: 'buy_price',
      cellRenderer: (params: ICellRendererParams) => {
        return params.data.button_type === 1 ? params.value : 'NA';
      },
    },
    {
      headerName: 'RENTAL PRICE/MONTH',
      field: 'price',
      cellRenderer: (params: ICellRendererParams) => {
        return params.data.button_type === 0 ? params.value : 'NA';
      },
    },
    { headerName: 'DISCOUNT ($)', field: 'discount' },

    {
      headerName: 'MONTHS',
      field: 'months',
    },
    {
      headerName: 'TOTAL ($)',
      field: 'is_total',
      cellRenderer: 'TotalCellRendererComponent',
    },
  ];

  gridOptions: GridOptions = {
    onGridReady: (api: GridReadyEvent) => {
      this.agGrid = api;
      this.onGridReady(api);
    },
    rowHeight: 100,
    headerHeight: 100,
    getRowHeight: (params: any) => {
      return params?.data?.isExtraRow ? 50 : 100;
    },
  };
  defaultColDef = {
    wrapText: true,
    cellClass: 'grid-cell',
    cellStyle: {
      'line-height': 'normal',
      'align-items': 'center',
      'justify-content': 'center',
      display: 'flex',
      padding: '0 0.5rem',
    },
  };
  frameworkComponents = {
    ImageRendererComponent: ImageRendererComponent,
    TotalCellRendererComponent: TotalCellRendererComponent,
    ItemTypeCellRenderer: ItemTypeComponent,
    CounterCellRenderer: CounterComponent,
  };
  rowData: Observable<any[]> = new Observable();

  constructor(private _quoteHeaderService: QuoteHeaderService) {}

  ngOnInit(): void {
    this.getQuoteInformation();
    this.getMoodboardInQuote();
  }
  onGridReady(evt: GridReadyEvent) {
    this.agGrid = evt;
    evt.api.sizeColumnsToFit();
    this.rowData = this.getQuoteSummary();
    // this.getMoodboardInQuote();
  }

  getQuoteSummary<T>(): Observable<T> {
    return this._quoteHeaderService.getQuoteSummary<T>(this.quoteId).pipe(
      tap((x) => {
        this.agGrid.api.redrawRows();
      })
    );
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
        this.updateBottomData(data);
      });
  }

  OnCopy(evt: any) {
    this.onCopy.emit(evt);
  }
  OnEdit(evt: any) {
    this.onEdit.emit(evt);
  }

  updateBottomData(data: any) {
    this.pinnedBottomRowData[1].is_total = data?.delivery_fee;
    this.pinnedBottomRowData[2].sgid = 'TAXES (' + data?.tax_percentage + '%)';
    this.pinnedBottomRowData[2].is_total = data?.tax_amount;
    this.pinnedBottomRowData[3].is_total = data?.tax_amount;
  }
}
