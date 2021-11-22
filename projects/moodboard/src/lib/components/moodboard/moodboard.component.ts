import { MatDialog } from '@angular/material/dialog';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteCreateFormComponent } from 'projects/quote/src/lib/common/components/quote-create-form/quote-create-form.component';
import { AddproductComponent } from 'projects/quote/src/lib/common/components/addproduct/addproduct.component';
import { MoodboardService } from '../../services/moodboard.service';
import autoTable from 'jspdf-autotable';

import {
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import {
  ComputationService,
  CoreService,
  CounterComponent,
  ImageRendererComponent,
  PdfService,
  ToasterService,
  UserService,
} from 'projects/core/src/public-api';
import {
  BehaviorSubject,
  merge,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  tap,
} from 'rxjs/operators';
import {
  ItemTypeComponent,
  TotalCellRendererComponent,
} from 'projects/quote/src/public-api';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import jsPDF from 'jspdf';
import { ProductDetailsComponent } from 'projects/shop/src/projects';
import { MatStepper } from '@angular/material/stepper';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-moodboard',
  templateUrl: './moodboard.component.html',
  styleUrls: ['./moodboard.component.scss'],
})
export class MoodboardComponent implements OnInit, AfterViewInit, OnDestroy {
  public mbId: any = '';
  public userid: any = null;
  selectedIndex = 0;
  startCount = 0;
  lastUserCount = 0;
  placeholder = 'Search Products';
  subscription: Subscription | null = null;

  @ViewChild('quickFilter', { static: true }) template: ElementRef | null =
    null;
  @ViewChild('stepper') private myStepper: MatStepper | null = null;
  @ViewChild('tabsReference', { static: true })
  tabsReference: MatTabGroup | null = null;

  constructor(
    private moodboardService: MoodboardService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _pdf: PdfService,
    private _router: Router,
    private _dialog: MatDialog,
    private _toaster: ToasterService,
    private _user: UserService,
    private _computationService: ComputationService,
    private _coreService: CoreService
  ) {
    this.mbId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userid = this._user.getUser().getId();
  }

  ngAfterViewInit(): void {
    this.setProductTab(0);
  }
  agGrid: GridReadyEvent = {} as GridReadyEvent;
  bannerIconImg: any = 'assets/moodboard/images/moodboard.svg';
  bannerIconImgTxt: any = 'Moodboard';
  moodboardDetails: any = '';
  mbQuotesList: any = [];
  stateList: any = [];
  selectedQuoteIdDD: any = 0;
  categoriesList: Subject<any[]> = new Subject();
  catListDefault: any[] = [];
  selectedCategory: any = null;
  cityList: Subject<any[]> = new Subject();
  cityListDefault: any[] = [];
  selectedCity: any = [];
  min_price = new FormControl('');
  max_price = new FormControl('');
  min_price_inventory: any = '';
  searchTxt: any = null;
  items: any = [];
  // min_price_change :BehaviorSubject<any> = new BehaviorSubject(null);
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
      is_total: '0',
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
        return params.data.button_type === 1 ? params.data.buy_price : 'NA';
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
        this.agGrid.api.redrawRows();
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
    this.subscription = merge(
      this.min_price.valueChanges,
      this.max_price.valueChanges
    )
      .pipe(debounceTime(2000), distinctUntilChanged())
      .subscribe((data: any) => {
        this.onPriceChange();
      });
    // this.min_price.valueChanges.pipe(debounceTime(2000) , distinctUntilChanged()).subscribe((data:any) => {
    //   this.onMinPriceRangeChange(data);
    // })
    // this.max_price.valueChanges.pipe(debounceTime(2000) , distinctUntilChanged()).subscribe((data:any) => {
    //   this.onMaxPriceRangeChange(data);
    // })
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
    this.selectedCategory = [];
    this.selectedCity = [];
    this.max_price.patchValue('', { emitEvent: false });
    this.min_price.setValue('', { emitEvent: false });
    this.min_price_inventory = '';
    this.resetList();
    this.getItems();
  }
  selectedQuote(ev: any) {
    this.selectedQuoteIdDD = ev.target.value;
  }

  getMBQuote(mbId: any) {
    this.moodboardService.getMBQuote(mbId).subscribe((response: any) => {
      this.mbQuotesList = response.quote;
      this.selectedQuoteIdDD = response.quote[0]?.sgid;
    });
  }
  addToQuote() {
    this._dialog
      .open(AddproductComponent, {
        height: '80%',
        width: '50%',
        data: {
          isDialog: true,
          quoteId: this.selectedQuoteIdDD,
          mbid: this.mbId,
        },
      })
      .afterClosed()
      .subscribe((data) => {
        console.log(data);
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
    count: number = 20,
    category: any = null,
    supplier: any = null,
    warehouse: any = null,
    max_price: any = 0,
    min_price: any = 0,
    min_price_inventory: any = 0,
    searchTxt: any = null
  ) {
    let param = {
      start: this.lastUserCount,
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
      // this.items = response.result;
      this.updateList(response.result);
      this.items = this.getLastViewedUserList();
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
    this.resetList();
    this.getItems(
      0,
      20,
      this.selectedCategory && this.selectedCategory.length
        ? this.selectedCategory.toString()
        : null,
      null,
      this.selectedCity && this.selectedCity.length
        ? this.selectedCity.toString()
        : null,
      this.max_price.value,
      this.min_price.value,
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
    this.resetList();
    this.getItems(
      0,
      20,
      this.selectedCategory && this.selectedCategory.length
        ? this.selectedCategory.toString()
        : null,
      null,
      this.selectedCity && this.selectedCity.length
        ? this.selectedCity.toString()
        : null,
      this.max_price.value,
      this.min_price.value,
      this.min_price_inventory,
      this.searchTxt
    );
  }

  onPriceChange() {
    this.resetList();
    this.getItems(
      0,
      20,
      this.selectedCategory && this.selectedCategory.length
        ? this.selectedCategory.toString()
        : null,
      null,
      this.selectedCity && this.selectedCity.length
        ? this.selectedCity.toString()
        : null,
      this.max_price.value,
      this.min_price.value,
      this.min_price_inventory,
      this.searchTxt
    );
  }
  onMinPriceRangeChange(ev: any) {
    // this.min_price = ev;
    this.resetList();
    this.getItems(
      0,
      20,
      this.selectedCategory && this.selectedCategory.length
        ? this.selectedCategory.toString()
        : null,
      null,
      this.selectedCity && this.selectedCity.length
        ? this.selectedCity.toString()
        : null,
      this.max_price.value,
      this.min_price.value,
      this.min_price_inventory,
      this.searchTxt
    );
  }
  onMaxPriceRangeChange(ev: any) {
    // this.max_price = ev;
    this.resetList();
    this.getItems(
      0,
      20,
      this.selectedCategory && this.selectedCategory.length
        ? this.selectedCategory.toString()
        : null,
      null,
      this.selectedCity && this.selectedCity.length
        ? this.selectedCity.toString()
        : null,
      this.max_price.value,
      this.min_price.value,
      this.min_price_inventory,
      this.searchTxt
    );
  }
  onQtyChange(ev: any) {
    this.min_price_inventory = ev;
    this.resetList();
    this.getItems(
      0,
      20,
      this.selectedCategory && this.selectedCategory.length
        ? this.selectedCategory.toString()
        : null,
      null,
      this.selectedCity && this.selectedCity.length
        ? this.selectedCity.toString()
        : null,
      this.max_price.value,
      this.min_price.value,
      this.min_price_inventory,
      this.searchTxt
    );
  }
  search(ev: any) {
    this.searchTxt = ev == '' ? null : ev;
    this.resetList();
    this.getItems(
      0,
      20,
      this.selectedCategory && this.selectedCategory.length
        ? this.selectedCategory.toString()
        : null,
      null,
      this.selectedCity && this.selectedCity.length
        ? this.selectedCity.toString()
        : null,
      this.max_price.value,
      this.min_price.value,
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
  deleteItem(mbItem: any) {
    let obj = {
      button_type: mbItem.button_type,
      moodboard_id: mbItem.moodboard_id,
      product_id: mbItem.product_id,
      sku: mbItem.sku,
      warehouse_id: mbItem.warehouse_id,
      user_id: this._user.getUser().getId(),
    };
    this.moodboardService.deleteItemToMoodboard(obj).subscribe(
      (data: any) => {
        if (data.statusCode == 200) {
          this._toaster.success(data?.result);
          this.getMoodboard();
          this.onGridReady(this.agGrid);
        } else this._toaster.error(data.result);
      },
      (error) => this._toaster.error('Fail to add')
    );
  }

  generateMDPdf() {
    let data = this._pdf.getAgGridRowsAndColumns(this.agGrid);
    let imagesObs = this._pdf.getAllTableBase64Images(data?.rows as [], 3);
    imagesObs.subscribe((images) => {
      let doc = new jsPDF();
      doc.text('Moodboard Information', 10, 15);
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
      doc.text('Moodboard Summary', 10, 15);
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
  productDetails(item: any, moodboardDetails: any) {
    this._dialog
      .open(ProductDetailsComponent, {
        height: '90%',
        width: '90%',
        disableClose: true,
        data: {
          forDialog: true,
          forHitler: true,
          forMoodboard:
            this._user.getUser().getId() ===
            moodboardDetails?.moodboard?.userid,
          forQuote: false,
          item: item,
          mb: moodboardDetails?.moodboard,
          moodboardId: moodboardDetails?.moodboard?.id,
        },
      })
      .afterClosed()
      .subscribe((data) => {
        if (data && data.event) {
          this.getMoodboard();
          this.onGridReady(this.agGrid);
          this.setProductTab(0);
        }
      });
  }

  increaseQuantity(value: any, md: any) {
    if (value >= 1 && value <= md.total_warehouse_quantity) {
      md.qty = md.is_qty = value;
      let price = md.button_type == 1 ? md.buy_price : md.price;
      md.is_total = this._computationService.getProductTotalAmount(
        price,
        0,
        md.qty
      );
      this._coreService.updateMDItem(md).subscribe((data) => {
        this.refresh();
      });
    }
  }

  refresh() {
    this.getMoodboard();
    this.onGridReady(this.agGrid);
  }

  //Functionalities taken from shop module
  public selectionChange($event?: StepperSelectionEvent): void {
    // console.log('stepper.selectedIndex: ' + this.selectedIndex
    //     + '; $event.selectedIndex: ' + $event.selectedIndex);
    // if ($event?.selectedIndex == 0) return; // First step is still selected
    // this.selectedIndex = $event.selectedIndex;
  }

  public goto(index: number): void {
    if (index == 0) return; // First step is not selected anymore -ok
    this.selectedIndex = index;
  }

  filterProductPopup() {
    this.selectedCategory = this.catListDefault
      .filter((item) => item.isChecked)
      .map((i) => i.sgid);
    this.selectedCity = this.cityListDefault
      .filter((item) => item.isChecked)
      .map((i) => i.sgid);
    let catIds =
      this.selectedCategory && this.selectedCategory.length
        ? this.catListDefault
            .filter((item) => item.isChecked)
            .map((i) => i.sgid)
            .toString()
        : null;
    let cityIds =
      this.selectedCity && this.selectedCity.length
        ? this.cityListDefault
            .filter((item) => item.isChecked)
            .map((i) => i.sgid)
            .toString()
        : null;

    // this.show = true;
    this.closeModal();
    // let param: any = {
    //   start: this.lLimit,
    //   count: this.hLimit,
    //   category: catIds,
    //   warehouse: cityIds,
    // };
    // if(this.min_price_popup){ param['min_price'] = this.min_price_popup};
    // if(this.max_price_popup){ param['max_price'] = this.max_price_popup};
    // if(this.min_price_inventory_popup){ param['min_price_inventory'] = this.min_price_inventory_popup};
    // console.log(this.min_price , this.max_price);
    // if(this.min_price != '') param['min_price'] = this.min_price;
    // if(this.max_price != '') param['max_price'] = this.max_price;
    // if(this.min_price_inventory != '') param['min_price_inventory'] = this.min_price_inventory;
    this.getItems(
      0,
      15,
      this.selectedCategory && this.selectedCategory.length
        ? this.selectedCategory.toString()
        : null,
      null,
      this.selectedCity && this.selectedCity.length
        ? this.selectedCity.toString()
        : null,
      this.max_price.value,
      this.min_price.value,
      this.min_price_inventory,
      this.searchTxt
    );
  }

  setProductTab(index: number) {
    const tabGroup = this.tabsReference;
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)) return;

    const tabCount = tabGroup._tabs.length;
    tabGroup.selectedIndex = index;
  }

  onScroll() {
    let param = {
      start: this.lastUserCount,
      count: 20,
      category:
        this.selectedCategory && this.selectedCategory.length
          ? this.selectedCategory.toString()
          : null,
      supplier: null,
      warehouse:
        this.selectedCity && this.selectedCity.length
          ? this.selectedCity.toString()
          : null,
      min_price: this.min_price.value,
      max_price: this.max_price.value,
      min_price_inventory: this.min_price_inventory,
      searchTxt: this.searchTxt,
    };
    if (this.startCount !== this.lastUserCount) {
      this.moodboardService.getItems(param).subscribe((response: any) => {
        if (response && response.result && response.result.length) {
          this.updateList(response.result);
        }
      });
      this.items = this.getLastViewedUserList();
      this.startCount = this.lastUserCount;
    }
  }

  getLastViewedUserList() {
    return this.items;
  }

  updateList(obj: any) {
    let isResult = false;
    if (obj && obj.length) {
      this.items.push(...obj);
      isResult = true;
    }
    if (isResult === true) {
      this.lastUserCount += 20;
    }
  }

  resetList() {
    this.items = [];
    this.startCount = 0;
    this.lastUserCount = 0;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
