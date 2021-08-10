import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import {
  CounterComponent,
  ImageRendererComponent,
  UserService,
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
  editQuote = false;

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

  constructor(
    private _quoteHeaderService: QuoteHeaderService,
    private _router: Router,
    private _user: UserService
  ) {}

  ngOnInit(): void {

    this.getQuoteInformation();
    this.getMoodboardInQuote();
  }
  onGridReady(evt: GridReadyEvent) {
    this.agGrid = evt;
    evt.api.sizeColumnsToFit();
    this.rowData = this.getQuoteSummary();
  }

  getQuoteSummary<T>(): Observable<T> {
    return this._quoteHeaderService.getQuoteSummary<T>(this.quoteId).pipe(
      tap((x: any) => {
        if (x.length > 0) {
          this.agGrid.api.redrawRows();
          // this.agGrid.api.refreshCells({columns: ['is_total'],force: true})
        }
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
    let userId = this._user.getUser().getId();
    let companyId = this._user.getUser().getCompanyId();
    this._quoteHeaderService
      .getQuoteInformation(this.quoteId)
      .subscribe((data) => {
        this.quoteDetails = data;
        if(this.quoteDetails.userid === userId){
            this.editQuote= true;
        }
        if(companyId === this.quoteDetails.company_id && this.quoteDetails.application_type ===1){
          this.editQuote = true;
        }
        this.updateBottomData(data);
      });
  }

  private getQuoteObject() {
    return {
      quoteNumber: this.quoteDetails.sgid,
      phone: this.quoteDetails.contactno,
      customerName: this.quoteDetails.name,
      address: this.quoteDetails.address,
      email: this.quoteDetails.email,
      state: this.quoteDetails.state,
      companyName: this.quoteDetails.company_name,
      city: this.quoteDetails.city_name,
      projectName: this.quoteDetails.project_name,
      zipCode: this.quoteDetails.zipcode,
    };
  }

  OnCopy(evt: any) {
    this._router.navigate(['quote/copy'], { state: this.getQuoteObject() });
    this.onCopy.emit(evt);
  }
  OnEdit(evt: any) {
    this._router.navigate(['quote/edit'], { state: this.getQuoteObject() });
    this.onEdit.emit(evt);
  }

  updateBottomData(data: any) {
    this.pinnedBottomRowData[1].is_total = data?.delivery_fee;
    this.pinnedBottomRowData[2].sgid = 'TAXES (' + data?.tax_percentage + '%)';
    this.pinnedBottomRowData[2].is_total = data?.tax_amount;
    this.pinnedBottomRowData[3].is_total = data?.tax_amount;
  }
}
