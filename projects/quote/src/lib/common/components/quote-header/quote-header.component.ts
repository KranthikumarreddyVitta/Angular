import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import { ToasterService } from 'projects/core/src/lib/services/toaster.service';
import {
  CoreService,
  CounterComponent,
  ImageRendererComponent,
  UserService,
} from 'projects/core/src/public-api';
import { QuoteService } from './../../../quote.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AddFPComponent } from '../add-fp/add-fp.component';
import { AddFPUComponent } from '../add-fpu/add-fpu.component';
import { ItemTypeComponent } from '../item-type/item-type.component';
import { TotalCellRendererComponent } from '../total-cell-renderer/total-cell-renderer.component';
import { QuoteHeaderService } from './quote-header.service';
import { AddMoodboardQuoteComponent } from '../add-moodboard-quote/add-moodboard-quote.component';
import { FloorPlanDetailsComponent } from '../floor-plan-details/floor-plan-details.component';
import { SelectFpComponent } from '../select-fp/select-fp.component';
import { SelectFpuComponent } from '../select-fpu/select-fpu.component';

@Component({
  selector: 'lib-quote-header',
  templateUrl: './quote-header.component.html',
  styleUrls: ['./quote-header.component.scss'],
})
export class QuoteHeaderComponent implements OnInit {
  @Input() quoteId: number = 0;
  @Input() text: 'QUOTE' | 'ORDER' = 'QUOTE';
  @Input() iconPath: string = 'assets/quote/images/quote-icon.png';

  @Output() onCopy = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @ViewChild('dialog') dialog: TemplateRef<any> = {} as TemplateRef<any>;
  editQuote = false;

  agGrid: GridReadyEvent = {} as GridReadyEvent;
  quoteDetails: any = {};
  moodboards: Array<any> = [];
  selectedMoodboard: any = '';
  moodboardList: Array<any> = [];
  // Default unit
  quoteMDList: Array<any> = [];
  quoteIPList: Array<any> = [];
  selectedQuoteMD: any = '';
  moodboardItems: Array<any> = [];

  // Floor Plan
  floorPlanList: Array<any> = [];
  selectedFloorPlan: any = '';
  removeFloorPlanFlag = false;
  // Floor plan unit
  unitList: any = [];
  removeUnitFlag = false;
  routeIndex: number = 0;
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
      headerName: '',
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
      // valueGetter: async (params:ICellRendererParams)=>{
      // let x = await this._core.getBase64Image(params?.data?.product_images?.small).toPromise();
      // return 'data:image/jpeg;base64' + x?.imageurl;
      // }
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
  state: any | null = null;
  private dialogRef: MatDialogRef<any> | undefined = undefined;
  constructor(
    private _quoteHeaderService: QuoteHeaderService,
    private _router: Router,
    private _user: UserService,
    private _core: CoreService,
    private _matDialog: MatDialog,
    private _toaster: ToasterService,
    private _dialog: MatDialog,
    private _quoteService: QuoteService
  ) {
    this.state = this._router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.getQuoteInformation();
    this.getMoodboardInQuote();
    this.getFloorPlan();

    this.routeIndex = this._router.url.indexOf('quote');
    if (this.routeIndex == 1 && this.state?.initDialog) {
      this.openDialog();
    }
  }
  onGridReady(evt: GridReadyEvent) {
    this.agGrid = evt;
    evt.api.sizeColumnsToFit();
    this.rowData = this.getQuoteSummary();
  }

  refresh() {
    this.getMoodboardInQuote();
    this.getFloorPlan();
    this.getUnits();
    this.onGridReady(this.agGrid);
  }
  getQuoteSummary<T>(): Observable<T> {
    return this._quoteHeaderService.getQuoteSummary<T>(this.quoteId).pipe(
      map((x: any) => {
        if (x.quote_items.length > 0) {
          this.updateBottomData(x.quote);
        } else {
          this.updateBottomData({
            delivery_fee: 0,
            tax_percentage: 0,
            tax_amount: 0,
          });
        }
        this.agGrid.api.redrawRows();
        return x.quote_items.map((item: any, index: number) => {
          item.order_status = x.quote.order_status;
          item.sgid = index + 1;
          return item;
        });
      })
    );
  }

  getMoodboardInQuote() {
    this._quoteHeaderService
      .getMoodboardInQuote<Array<any>>(this.quoteId)
      .subscribe((data: any) => {
        if (typeof data === 'string') {
          return;
        }
        this.moodboards = data;
        this.quoteMDList = data.Moodboard_list;
        this.quoteIPList = data.Indivisual_products.map((x: any) => {
          x.isIndividual = true;
          return x;
        });
      });
  }

  getQuoteInformation() {
    let userId = this._user.getUser().getId();
    let companyId = this._user.getUser().getCompanyId();
    this._quoteHeaderService
      .getQuoteInformation(this.quoteId)
      .subscribe((data) => {
        this.quoteDetails = data;
        if (this.quoteDetails.userid === userId) {
          this.editQuote = true;
        }
        if (
          companyId === this.quoteDetails.company_id &&
          this.quoteDetails.application_type === 1
        ) {
          this.editQuote = true;
        }
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
      zipCode: this.quoteDetails.is_zip_code,
      startDate: this.quoteDetails.preferred_delivery_start_date,
      endDate: this.quoteDetails.preferred_delivery_end_date,
    };
  }

  OnCopy(evt: any) {
    this._router.navigate(['business/quote/copy'], { state: this.getQuoteObject() });
    this.onCopy.emit(evt);
  }
  OnEdit(evt: any) {
    this._router.navigate(['business/quote/edit'], { state: this.getQuoteObject() });
    this.onEdit.emit(evt);
  }

  updateBottomData(data: any) {
    this.pinnedBottomRowData[1].is_total = data?.delivery_fee;
    this.pinnedBottomRowData[2].sgid =
      'TAXES (' + data?.tax_percentage + '%) ($)';
    this.pinnedBottomRowData[2].is_total = data?.tax_amount;
    this.pinnedBottomRowData[2].taxPercent = data?.tax_percentage;
    this.pinnedBottomRowData[3].taxPercent = data?.tax_percentage;
    this.pinnedBottomRowData[3].is_total = data?.tax_amount;
  }

  openDialog() {
    this._dialog
      .open(AddMoodboardQuoteComponent, {
        height: '100%',
        width: '50%',
        data: {
          isDialog: true,
          quoteId: this.quoteId,
          page: this.text,
        },
      })
      .afterClosed()
      .subscribe((data) => {
        if (data && data.event == 'defaultunit') {
        } else if (data && data.event == 'floorPlan') {
        } else if (data && data.event == 'floorPlanUnit') {
        }
        this.refresh();
      });
  }

  addMoodboard(selectedMoodboard: number) {
    this._quoteHeaderService
      .addMoodboard(this.quoteId, selectedMoodboard)
      .subscribe(
        (data: any) => {
          this.dialogRef?.close();
          this._toaster.success(data.msg);
          this.ngOnInit();
          this.onGridReady(this.agGrid);
        },
        (error) => {
          this._toaster.error('Fail to add moodboard');
        }
      );
  }

  selectionChange() {
    console.log(this.selectedMoodboard);
  }

  onTabChanged(evt: any) {}
  // Default Unit
  onClickMDorProduct(mdOrProduct: any) {
    this.moodboardItems = [];
    this.selectedQuoteMD = mdOrProduct;
    if (!this.selectedQuoteMD.isIndividual) {
      this._quoteHeaderService
        .getMoodboardItems(this.selectedQuoteMD?.unitmoodboards?.id)
        .subscribe((resp) => {
          this.moodboardItems = resp.moodboard_items;
        });
    }
  }
  addMDtoFloorPlan() {
    let obj;
    if (this.selectedQuoteMD?.moodboard_id == null) {
      obj = {
        qid: this.selectedQuoteMD?.quote_id,
        user_id: this._user.getUser().getId(),
        product_id: this.selectedQuoteMD?.product_id,
        sku: this.selectedQuoteMD?.variation_new?.sgid,
        quantity: this.selectedQuoteMD?.qty,
        button_type: this.selectedQuoteMD?.button_type,
        month: this.selectedQuoteMD?.months,
        warehouse_id: this.selectedQuoteMD?.warehouse_id,
        source: 'default_unit',
      };
    } else {
      obj = {
        isDialog: true,
        qid: this.selectedQuoteMD?.quote_id,
        mid: this.selectedQuoteMD?.moodboard_id,
        user_id: this._user.getUser().getId(),
        source: 'default_unit',
      };
    }

    this._dialog
      .open(SelectFpComponent, {
        height: '70%',
        width: '70%',
        data: obj,
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.selectedQuoteMD = null;
          this.getMoodboardInQuote();
          this.getFloorPlan();
        }
      });
    //this._quoteHeaderService.addMDtoFloorPlan().subscribe((resp) => {});
  }

  addMDtoUnit() {
    let obj;
    if (this.selectedQuoteMD?.moodboard_id == null) {
      obj = {
        qid: this.selectedQuoteMD?.quote_id,
        user_id: this._user.getUser().getId(),
        product_id: this.selectedQuoteMD?.product_id,
        sku: this.selectedQuoteMD?.variation_new?.sgid,
        quantity: this.selectedQuoteMD?.qty,
        button_type: this.selectedQuoteMD?.button_type,
        month: this.selectedQuoteMD?.months,
        warehouse_id: this.selectedQuoteMD?.warehouse_id,
        source: 'default_unit',
      };
    } else {
      obj = {
        isDialog: true,
        qid: this.selectedQuoteMD?.quote_id,
        mid: this.selectedQuoteMD?.moodboard_id,
        user_id: this._user.getUser().getId(),
        source: 'default_unit',
      };
    }

    this._dialog
      .open(SelectFpuComponent, {
        height: '70%',
        width: '70%',
        data: obj,
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.selectedQuoteMD = null;
          this.getMoodboardInQuote();
          this.getFloorPlan();
        }
      });

    //    this._quoteHeaderService.addMDtoUnit().subscribe((resp) => {});
  }
  removeProductfromQuote() {
    this._quoteHeaderService
      .removeProductfromQuote(this.quoteId, this.selectedQuoteMD?.sgid)
      .subscribe((resp) => {
        if (resp.statusCode == 200) {
          this._toaster.success(resp.result);
          this.getMoodboardInQuote();
        } else {
          this._toaster.success(resp.result);
        }
      });
  }
  removeMDfromQuote() {
    this._quoteHeaderService
      .removeMDfromQuote(this.quoteId, this.selectedQuoteMD?.unitmoodboards?.id)
      .subscribe((resp) => {
        if (resp.statusCode == 200) {
          this._toaster.success(resp.result);
          this.getMoodboardInQuote();
        } else {
          this._toaster.success(resp.result);
        }
      });
  }

  goToMoodboard() {
    this._router.navigateByUrl(
      'business//moodboard/' + this.selectedQuoteMD?.unitmoodboards?.id
    );
  }

  openFloorPlanUnit(unit: any) {
    const floorPlanID = unit.floorplan_id ? unit.floorplan_id : 'None';
    let route = 'business/quote';
    if (this.text == 'ORDER') {
      route = 'business/order';
    }
    this._router.navigate([
      route,
      this.quoteId,
      'floor-plan-unit',
      floorPlanID,
      'unit',
      unit.sgid,
    ]);
  }

  // Add Floor plan
  openFloorPlanPage(fp: any) {
    let route = 'business/quote';
    if (this.text == 'ORDER') {
      route = 'business/order';
    }
    this._router.navigate([route, this.quoteId, fp.sgid]);
  }
  getFloorPlan() {
    this._quoteService.getFloorPlan(this.quoteId).subscribe((resp) => {
      this.floorPlanList = resp.result;
      this.getUnits();
    });
  }

  removeFloorPlanFromQuote(fp: any) {
    this._quoteService
      .removeFloorPlanFromQuote(this.quoteId, fp.sgid)
      .subscribe((resp) => {
        if (resp.statusCode == 200) {
          this._toaster.success(resp.message);
          this.getFloorPlan();
        } else {
          this._toaster.error(resp.message);
        }
      });
  }
  openAddFloorPlanDialog() {
    this._matDialog
      .open(AddFPComponent, {
        width: '65%',
        height: '72%',
        data: { quoteId: this.quoteId },
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.getFloorPlan();
        }
      });
  }

  openAddUnitDialog() {
    this._matDialog
      .open(AddFPUComponent, {
        width: '50%',
        height: '61%',
        data: { quoteId: this.quoteId },
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.getUnits();
        }
      });
  }

  // Floor plan unit
  getUnits() {
    //    this.floorPlanList.forEach((element, index)=>{
    this._quoteService
      .getUnits({ quote_id: this.quoteId })
      .subscribe((resp) => {
        this.unitList = resp;
        //  this.unitList['UnitsWithoutFloorPlan'] = resp.UnitsWithoutFloorPlan;
        //  this.unitList['FloorPlanWithUnits'] = resp.FloorPlanWithUnits;
        // this.floorPlanList[index]['units'] = resp.result;
      });
    //  });
    console.log(this.floorPlanList);
  }

  removeUnitFromFP(unit: any) {
    this._quoteService
      .removeUnitFromFp(this.quoteId, unit.name, unit.sgid)
      .subscribe((resp) => {
        if (resp.statusCode) {
          this._toaster.success(resp.message);
          this.getUnits();
        } else {
          this._toaster.success(resp.message);
        }
      });
  }
}
