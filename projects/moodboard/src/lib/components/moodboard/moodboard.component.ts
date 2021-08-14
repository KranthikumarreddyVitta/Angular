import { MatDialog } from '@angular/material/dialog';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteCreateFormComponent } from 'projects/quote/src/lib/common/components/quote-create-form/quote-create-form.component';
import { MoodboardService } from '../../services/moodboard.service';
import {
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import {
  CoreService,
  CounterComponent,
  ImageRendererComponent,
  UserService,
} from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ItemTypeComponent, TotalCellRendererComponent } from 'projects/quote/src/public-api';

@Component({
  selector: 'lib-moodboard',
  templateUrl: './moodboard.component.html',
  styleUrls: ['./moodboard.component.scss']
})
export class MoodboardComponent implements OnInit {
  public mbId: any = '';
  constructor(
    private moodboardService:MoodboardService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private _router: Router,
    private _dialog: MatDialog
    ) { 
     this.mbId = this.activatedRoute.snapshot.paramMap.get('id');
  }
  agGrid: GridReadyEvent = {} as GridReadyEvent;
  bannerIconImg: any = 'assets/moodboard/images/mb.png';
  bannerIconImgTxt: any = 'Moodboard';
  moodboardDetails: any = '';
  mbQuotesList: any = [];
  stateList: any = [];
  categoriesList: any = [];
  cityList: any = [];
  selectedCity: any = null;
  selectedCategory: any = null;
  min_price: number = 0;
  max_price: number = 0;
  min_price_inventory: any = 0;
  searchTxt: any = null;
  items: any = [];
  catagorydata = [{
    imageSrc: 'assets/moodboard/images/Categories-01.png',
    value: 'Living Room',
  },
  {
    imageSrc: 'assets/moodboard/images/Categories-02.png',
    value: 'Bedroom',
  },
  {
    imageSrc: 'assets/moodboard/images/Categories-03.png',
    value: 'Dining Room',
  },
  {
    imageSrc: 'assets/moodboard/images/Categories-04.png',
    value: 'Office',
  },
  {
    imageSrc: 'assets/moodboard/images/Categories-05.png',
    value: 'Outdoor',
  },
  {
    imageSrc: 'assets/moodboard/images/Categories-06.png',
    value: 'Others',
  }
]
frameworkComponents = {
  ImageRendererComponent: ImageRendererComponent,
  TotalCellRendererComponent: TotalCellRendererComponent,
  ItemTypeCellRenderer: ItemTypeComponent,
  CounterCellRenderer: CounterComponent,
};
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
    headerName: 'S. NO',
    headerTooltip: 'S.NO',
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
    field: 'variation.images[0].image_url.small',
    cellStyle: {
      padding: '0.3rem',
    },
    valueGetter: (params:ICellRendererParams)=>{
      return params.data.variation.images[0].image_url.small
    }
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
    headerName: 'QUANTITY',
    field: 'is_qty',
    cellRenderer: 'CounterCellRenderer',
  },
  {
    headerName: 'BUY PRICE ($)',
    field: 'buy_price',
    valueGetter: (params: ICellRendererParams) => {
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
  // { headerName: 'DISCOUNT ($)', field: 'discount' },

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
onGridReady(evt: GridReadyEvent) {
  this.agGrid = evt;
  evt.api.sizeColumnsToFit();
  this.rowData = this.getMoodboardSummary();
}
getMoodboardSummary<T>(): Observable<T> {
  return this.moodboardService.getMBSummary<T>(this.mbId).pipe(
    tap((x: any) => {
      if (x.length > 0) {
        this.agGrid.api.redrawRows();
        // this.agGrid.api.refreshCells({columns: ['is_total'],force: true})
      }
    })
  );
}

updateBottomData(data: any) {
  this.pinnedBottomRowData[1].is_total = data?.delivery_fee;
  this.pinnedBottomRowData[2].sgid = 'TAXES (' +  data?.states?.sale_tax_rate  + '%)';
  this.pinnedBottomRowData[2].is_total = data?.tax_amount;
  this.pinnedBottomRowData[3].is_total = data?.tax_amount;
}
  ngOnInit(): void {
    this.getMoodboard();
    this.getCity();
    this.getCategory();
    this.getItems();
    this.getMBQuote(this.mbId);
  }
  getMBQuote(mbId: any){
    this.moodboardService.getMBQuote(mbId).subscribe((response:any) => {
      this.mbQuotesList = response.quote;
    })
  }
  getMoodboard(){
    this.moodboardService.getMoodBoard(this.mbId).subscribe((response:any) => {
      this.moodboardDetails = response;
      this.updateBottomData(response.moodboard);
    });    
  }
  getCategory(){
    this.moodboardService.getCategoryList().subscribe((response:any) => {
      this.categoriesList = response.result;
    });    
  }
  getCity(){
    this.moodboardService.getCityList().subscribe((response:any) => {
      this.cityList = response.data;
    });    
  }
  getItems(start: number = 0, count: number =12, category: any =null, supplier: any =null, warehouse: any =null, max_price: any = 0, min_price: any = 0, min_price_inventory: any = 0, searchTxt: any = null){ 
    let param = {
      start: start,
      count:count,
      category: category,
      supplier:supplier,
      warehouse:warehouse,
      min_price:min_price,
      max_price: max_price,
      min_price_inventory:min_price_inventory,
      keywords: searchTxt
    }
    this.moodboardService.getItems(param).subscribe((response:any) => {
      this.items = response.result;
    });    
  }
  editMB(){
    this.router.navigateByUrl('/moodboard/edit/'+this.mbId);
  }
  copyMB(){
    this.router.navigateByUrl('/moodboard/create/'+this.mbId);
  }
  onCityChange(ev: any){
    this.selectedCity = ev;
    this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
  }
  onCategoriesChange(ev: any){
    this.selectedCategory = ev;
    this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
  }
  onMinPriceRangeChange(ev: any){
    this.min_price= ev;
    this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
  }
  onMaxPriceRangeChange(ev: any){
    this.max_price = ev;
    this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
  }
  onQtyChange(ev: any){
    this.min_price_inventory = ev;
    this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
  }
  search(ev: any){
    this.searchTxt = ev;
    this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);    
  }
  createNewQuote(){
      this._dialog.open(QuoteCreateFormComponent,
        {
          height:"500px", 
          width:"800px",
          data:{
            isDialog: true
          }
      }).afterClosed().subscribe(data=> {
        console.log(data);
      })
  }
}
