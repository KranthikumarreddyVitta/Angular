import { MatDialog } from '@angular/material/dialog';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteCreateFormComponent } from 'projects/quote/src/lib/common/components/quote-create-form/quote-create-form.component';
import { MoodboardService } from '../../services/moodboard.service';
import autoTable from 'jspdf-autotable';

import {
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import {
  CounterComponent,
  ImageRendererComponent,
  PdfService,
  ToasterService,
  UserService,
} from 'projects/core/src/public-api';
import { Observable, Subject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import {
  ItemTypeComponent,
  TotalCellRendererComponent,
} from 'projects/quote/src/public-api';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import jsPDF from 'jspdf';
import { ProductDetailsComponent } from 'projects/shop/src/projects';

@Component({
  selector: 'lib-moodboard',
  templateUrl: './moodboard.component.html',
  styleUrls: ['./moodboard.component.scss'],
})
export class MoodboardComponent implements OnInit {
  public mbId: any = '';
  public userid: any = null;
  constructor(
    private moodboardService: MoodboardService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _pdf: PdfService,
    private _router: Router,
    private _dialog: MatDialog,
    private _toaster: ToasterService,
    private _user: UserService
  ) {
    this.mbId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userid = this._user.getUser().getId();
  }
  agGrid: GridReadyEvent = {} as GridReadyEvent;
  bannerIconImg: any = 'assets/moodboard/images/mb.png';
  bannerIconImgTxt: any = 'Moodboard';
  moodboardDetails: any = '';
  mbQuotesList: any = [];
  stateList: any = [];
  categoriesList: Subject<any[]> = new Subject();
  catListDefault: any[] = [];
  selectedCategory: any = null;
  cityList: Subject<any[]> = new Subject();
  cityListDefault: any[] = [];
  selectedCity: any = [];
  min_price: number = 0;
  max_price: number = 0;
  min_price_inventory: any = 0;
  searchTxt: any = null;
  items: any = [];
  catagorydata = [
    {
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
    },
  ];
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
      valueGetter: (params: ICellRendererParams) => {
        return params.data?.variation?.images[0]?.image_url?.small;
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
  openModal(templateRef: any) {
    let dialogRef = this._dialog.open(templateRef, {
      width: '90%',
      maxHeight: '85vh',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  closeModal() {
    this._dialog.closeAll();
  }
  updateBottomData(data: any) {
    this.pinnedBottomRowData[1].is_total = data?.delivery_fee;
    this.pinnedBottomRowData[2].sgid =
      'TAXES (' + data?.states?.sale_tax_rate + '%)';
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
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  requestRendering() {
    this.moodboardService
      .requestRendering({ moodboard_id: this.mbId })
      .subscribe(
        (response: any) => {
          this._toaster.success('Request ' + response.result);
        },
        (error) => {
          this._toaster.error('Request failed. please try later');
        }
      );
  }
  resetFilter() {
    this.cityListDefault.map((el) => (el.isChecked = false));
    this.cityListDefault.sort((a, b) =>
      a.warehouse_name > b.warehouse_name ? 1 : -1
    );
    this.catListDefault.map((el) => (el.isChecked = false));
    this.catListDefault.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.categoriesList.next(this.catListDefault);
    this.cityList.next(this.cityListDefault);
    this.max_price = 1;
    this.min_price = 0;
    this.min_price_inventory = 0;
    this.getItems();
  }
  getMBQuote(mbId: any) {
    this.moodboardService.getMBQuote(mbId).subscribe((response: any) => {
      this.mbQuotesList = response.quote;
    });
  }
  getMoodboard() {
    this.moodboardService.getMoodBoard(this.mbId).subscribe((response: any) => {
      this.moodboardDetails = response;
      this.updateBottomData(response.moodboard);
    });
  }
  getCategory() {
    this.moodboardService
      .getCategoryList()
      .pipe(
        map((item: any) => {
          item.result.map((i: any, index: any) => {
            i['isChecked'] = false;
            i['order'] = index;
            return i;
          });
          return item;
        })
      )
      .subscribe((response: any) => {
        this.categoriesList.next(response.result);
        this.catListDefault = response.result;
      });
  }
  getCity() {
    this.moodboardService
      .getCityList()
      .pipe(
        map((item: any) => {
          item.data.map((i: any, index: any) => {
            i['isChecked'] = false;
            i['order'] = index;
            return i;
          });
          return item;
        })
      )
      .subscribe((response: any) => {
        this.cityList.next(response.data);
        this.cityListDefault = response.data;
      });
  }
  getItems(
    start: number = 0,
    count: number = 12,
    category: any = null,
    supplier: any = null,
    warehouse: any = null,
    max_price: any = 0,
    min_price: any = 0,
    min_price_inventory: any = 0,
    searchTxt: any = null
  ) {
    let param = {
      start: start,
      count: count,
      category: category,
      supplier: supplier,
      warehouse: warehouse,
      min_price: min_price,
      max_price: max_price,
      min_price_inventory: min_price_inventory,
      keywords: searchTxt,
    };
    this.moodboardService.getItems(param).subscribe((response: any) => {
      this.items = response.result;
    });
  }
  editMB() {
    this.router.navigateByUrl('/moodboard/edit/' + this.mbId);
  }
  copyMB() {
    this.router.navigateByUrl('/moodboard/create/' + this.mbId);
  }
  onCityChecked(city: any, i: any) {
    if (city.isChecked) city.isChecked = false;
    else city.isChecked = true;
    this.cityListDefault[i] = city;
    this.cityListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
    this.cityList.next(this.cityListDefault);
    this.selectedCity = this.cityListDefault
      .filter((item) => item.isChecked)
      .map((i) => i.sgid);
    this.getItems(
      0,
      12,
      this.selectedCategory,
      null,
      this.selectedCity.toString(),
      this.max_price,
      this.min_price,
      this.min_price_inventory,
      this.searchTxt
    );
  }

  onCategoriesChecked(cat: any, i: any) {
    if (cat.isChecked) cat.isChecked = false;
    else cat.isChecked = true;
    this.catListDefault[i] = cat;
    this.catListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
    this.categoriesList.next(this.catListDefault);
    this.selectedCategory = this.catListDefault
      .filter((item) => item.isChecked)
      .map((i) => i.sgid);
    this.getItems(
      0,
      12,
      this.selectedCategory.toString(),
      null,
      this.selectedCity,
      this.max_price,
      this.min_price,
      this.min_price_inventory,
      this.searchTxt
    );
  }
  onMinPriceRangeChange(ev: any) {
    this.min_price = ev;
    this.getItems(
      0,
      12,
      this.selectedCategory,
      null,
      this.selectedCity,
      this.max_price,
      this.min_price,
      this.min_price_inventory,
      this.searchTxt
    );
  }
  onMaxPriceRangeChange(ev: any) {
    this.max_price = ev;
    this.getItems(
      0,
      12,
      this.selectedCategory,
      null,
      this.selectedCity,
      this.max_price,
      this.min_price,
      this.min_price_inventory,
      this.searchTxt
    );
  }
  onQtyChange(ev: any) {
    this.min_price_inventory = ev;
    this.getItems(
      0,
      12,
      this.selectedCategory,
      null,
      this.selectedCity,
      this.max_price,
      this.min_price,
      this.min_price_inventory,
      this.searchTxt
    );
  }
  search(ev: any) {
    this.searchTxt = ev;
    this.getItems(
      0,
      12,
      this.selectedCategory,
      null,
      this.selectedCity,
      this.max_price,
      this.min_price,
      this.min_price_inventory,
      this.searchTxt
    );
  }
  
  createNewQuote() {
    this._dialog
      .open(QuoteCreateFormComponent, {
        height: '500px',
        width: '800px',
        data: {
          isDialog: true,
        },
      })
      .afterClosed()
      .subscribe((data) => {
        console.log(data);
      });
  }
  deleteItem(mbItem: any){
    let obj = {
      button_type: mbItem.button_type,
      moodboard_id: mbItem.moodboard_id,
      product_id: mbItem.product_id,
      sku: mbItem.sku,
      warehouse_id: mbItem.warehouse_id,
      user_id: this._user.getUser().getId()
    };
  this.moodboardService.deleteItemToMoodboard(obj).subscribe(
    (data: any) => {
      if (data.statusCode == 200)
        this._toaster.success(data?.result)
      else 
        this._toaster.error(data.result);
      },
      (error) => this._toaster.error('Fail to add')
  );
  }

  generateMDPdf() {
    let data = this._pdf.getAgGridRowsAndColumns(this.agGrid);
    let imagesObs = this._pdf.getAllTableBase64Images(data?.rows as [], 3);
    imagesObs.subscribe((images) => {
      let doc = new jsPDF();
      doc.text('Moodboard Information', 5, 15);
      let info = [
        ['Project Name:', this.moodboardDetails?.moodboard?.project_name],
        ['Company Name:', this.moodboardDetails?.moodboard?.company_name],
        ['Moodboard :', this.moodboardDetails?.moodboard?.sgid],
        ['State:', this.moodboardDetails?.moodboard?.state.name],
        ['Moodboard Name:', this.moodboardDetails?.moodboard?.boardname],
        ['City:', this.moodboardDetails?.moodboard?.city],
        ['Zipcode:', this.moodboardDetails?.moodboard?.zipcode],
      ];
      autoTable(doc, {
        ...this._pdf.getInformationTableUserOptions(),
        body: info,
      });

      doc.addPage();
      doc.text('Moodboard Summary', 5, 15);
      autoTable(doc, {
        ...this._pdf.getSummaryTableUserOptions(),
        columnStyles: {
          0: { cellWidth: 9 },
          1: { cellWidth: 20 },
          2: { cellWidth: 10 },
          3: { cellWidth: 20 },
          4: { cellWidth: 30 },
          5: { cellWidth: 15 },
          6: { cellWidth: 10 },
          7: { cellWidth: 20 },
          8: { cellWidth: 20 },
          11: { cellWidth: 20 },
        },
        columns: data.columns,
        body: data?.rows?.map((r: any) => {
          if (!parseInt(r[0])) {
            let temp = [];
            temp.push({ content: r[0], colSpan: r.length - 1 });
            temp.push(r[r.length - 1]);
            r = temp;
          }
          return r;
        }),
        willDrawCell: (data) => {
          if (data.section === 'body' && data.column.index === 3) {
            data.cell.raw = '';
            data.cell.text = [];
          }
        },
        didDrawCell: (data) => {
          if (data.section === 'body' && data.column.index === 3) {
            var base64Img = 'data:image/jpeg;base64,' + images[data.row.index];
            doc.addImage(
              base64Img,
              'JPEG',
              data.cell.x + 1,
              data.cell.y + 1,
              18,
              18
            );
          }
        },
      });
      doc.save('moodboard.pdf');
    });
  }
  productDetails(item: any, moodboardDetails: any){
    this._dialog.open(ProductDetailsComponent,
      {
        height:"90%", 
        width:"90%",
        disableClose: true,
        data:{
          forDialog: true,
          forMoodboard: this._user.getUser().getId() === moodboardDetails?.moodboard?.userid,
          forQuote: false,
          item: item,
          mb: moodboardDetails?.moodboard,
          moodboardId:moodboardDetails?.moodboard?.id
        }
    }).afterClosed().subscribe(data=> {
      console.log(data);
      this.getMoodboard();
    })  }
}
