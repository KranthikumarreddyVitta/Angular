import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GridOptions, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { AnyRecord } from 'dns';
import { CounterComponent, ImageRendererComponent, PaymentComponent, ToasterService, UserService } from 'projects/core/src/public-api';
import { ItemTypeComponent, TotalCellRendererComponent } from 'projects/quote/src/public-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from '../../cart.service';

@Component({
  selector: 'lib-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  agGrid: GridReadyEvent = {} as GridReadyEvent;
  cartId :number = 0;
  cartData:any;
  zipCode:any = null;
  pinnedBottomRowData = [
    {
      subTotal: 'abc',
      sgid: 'SUB TOTAL ($)',
      is_total: '0',
      isExtraRow: true,
    },
    {
      subTotal: 'abc',
      sgid: 'DELIVERY FEE ($)',
      is_total: '0',
      isExtraRow: true,
    },
    {
      subTotal: 'abc',
      sgid: 'TAXES ($)',
      is_total: '0',
      isExtraRow: true,
      taxPercent: 1,
    },
    {
      subTotal: 'abc',
      sgid: 'TOTAL ($)',
      is_total: '0',
      isExtraRow: true,
    },
  ];

  columnDefs = [
    {
      field: 'sgid',
      width: 120,
      headerName: 'S.NO',
      headerTooltip: '',
      colSpan: (params: any) => (params.data.subTotal === 'abc' ? 10 : 1),
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
      valueGetter: (params: ICellRendererParams) => {
        return params.data.button_type === 0 ? 'Rent' : 'Buy';
      },
    },
    {
      headerName: 'QTY',
      field: 'is_qty',
      cellRenderer: 'CounterCellRenderer',
    },
    {
      headerName: 'BUY PRICE ($)',
      field: 'buy_price',
      valueGetter: (params: ICellRendererParams) => {
        return params.data.button_type === 1 ? params.data.buy_price : 'NA';
      },
    },
    {
      headerName: 'RENTAL PRICE ($) /MONTH',
      field: 'price',
      cellRenderer: (params: ICellRendererParams) => {
        return params.data.button_type === 0 ? params.value : 'NA';
      },
    },
    {
      headerName: 'MONTHS',
      field: 'months',
    },
    {
      headerName: 'TOTAL ($)',
      field: 'is_total',
      isDeleteOption:true,
      cellRenderer: 'TotalCellRendererComponent',
    },
  ];

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

  constructor(private _dialog: MatDialog , private cartService:CartService ,
    private router:ActivatedRoute , private _user:UserService , private _toaster:ToasterService) { 
      this.router.params.subscribe((data) => {
        if(data && data.id) {
          this.cartId = data.id
        }
      })
     }

  ngOnInit(): void {
  }

  continueToPayment() {
    this._dialog
      .open(PaymentComponent, {
        height: '15rem',
      })
  }

  onGridReady(evt: GridReadyEvent) {
    this.agGrid = evt;
    evt.api.sizeColumnsToFit();
    this.rowData = this.getCartSummary();
  }

  updateBottomData(data: any , obj:any) {
    this.pinnedBottomRowData[1].is_total = data?.cart?.delivery_fee;
    this.pinnedBottomRowData[2].is_total = data?.cart?.tax_amount ? data?.cart?.tax_amount : 0;
    this.pinnedBottomRowData[2].taxPercent = data?.cart?.tax_percentage ? data?.cart?.tax_percentage : 0;
  }

  getCartSummary<T>(): Observable<T> {
    return this.cartService.getCartSummary(this.cartId).pipe(
      map((x: any) => {
        this.zipCode = x?.cart?.display_zipcode ? x?.cart?.display_zipcode : ''
        if (x.cart_items.length > 0) {
          this.cartData = x.cart;
          this.updateBottomData(x,this.cartData);
        }
        this.agGrid.api.redrawRows();
        return x.cart_items.map((item: any, index: number) => {
          item.sgid = index + 1;
          return item;
        });
      })
    );
  }

  updateCart() {
    if (this.zipCode && this.zipCode.length > 4) {
      const obj: any = {
        cart_name: this.cartData?.cart_name ? this.cartData?.cart_name : null,
        email: this.cartData?.email ? this.cartData?.email : null,
        contactno: this.cartData?.contactno ? this.cartData?.contactno : null,
        cart_id: this.cartId ? this.cartId : null,
        user_id: this._user.getUser().getId(),
        zipcode: +this.zipCode
      }

      this.cartService.updateCart(obj).subscribe((data: any) => {
        if (data) {
          this._toaster.success('Cart Updated');
          this.rowData =  this.getCartSummary();
        }
      }, (err) => this._toaster.error('Network Error'))
    }
  }

}
