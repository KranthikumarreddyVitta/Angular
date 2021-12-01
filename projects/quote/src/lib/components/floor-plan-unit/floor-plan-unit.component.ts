import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import {
  CoreService,
  CounterComponent,
  DialogService,
  ImageRendererComponent,
  ToasterService,
  UserService,
} from 'projects/core/src/public-api';
import { ItemTypeComponent } from '../../common/components/item-type/item-type.component';
import { TotalCellRendererComponent } from '../../common/components/total-cell-renderer/total-cell-renderer.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FloorPlanDetailsService } from '../../common/components/floor-plan-details/floor-plan-details.service';
import { MoodboardComponent } from '../../common/components/moodboard/moodboard.component';
import { QuoteHeaderService } from '../../common/components/quote-header/quote-header.service';
import { Location } from '@angular/common';
import { AddFPComponent } from '../../common/components/add-fp/add-fp.component';

@Component({
  selector: 'app-floor-plan-unit',
  templateUrl: './floor-plan-unit.component.html',
  styleUrls: ['./floor-plan-unit.component.scss'],
})
export class FloorPlanUnitComponent implements OnInit {
  page: 'ORDER' | 'QUOTE' = 'QUOTE';
  quoteId = '';
  unit_id = '';
  unit = '';
  selectedFpid: any = '';
  fplist: any = [];
  agGrid: GridReadyEvent = {} as GridReadyEvent;
  rowData: Observable<any[]> = new Observable();
  fpDetails: any = {};
  fpId = '';
  moodboardList: Array<any> = [];
  unitName = '';
  hideFloorPlanAssign = false;

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

  frameworkComponents = {
    ImageRendererComponent: ImageRendererComponent,
    TotalCellRendererComponent: TotalCellRendererComponent,
    ItemTypeCellRenderer: ItemTypeComponent,
    CounterCellRenderer: CounterComponent,
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

  gridOptions: GridOptions = {
    onGridReady: (api: GridReadyEvent) => {
      this.agGrid = api;
      this.onGridReady(api);
    },
    context: this,
    rowHeight: 100,
    headerHeight: 100,
    getRowHeight: (params: any) => {
      return params?.data?.isExtraRow ? 50 : 100;
    },
  };

  constructor(
    private _quoteHeaderService: QuoteHeaderService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _dialog: MatDialog,
    private _dialog_s: DialogService,
    private _location: Location,
    private _toaster: ToasterService,
    private _fpSevice: FloorPlanDetailsService,
    private _user: UserService,
    private _core: CoreService
  ) {}

  ngOnInit(): void {
    if (this._router.url.indexOf('quote') >= 0) {
      this.page = 'QUOTE';
    } else {
      this.page = 'ORDER';
    }
    this._route.params.subscribe((params: Params) => {
      this.quoteId = params.id;
      this.fpId = params.fpId === 'None' ? null : params.fpId;
      this.unit_id = params.unit_id;
      this.getFloorPlanDetails();
      this.getMoodBoards();
      this.getFPSummary();
      this.getFpList();
      // this.getFloorPlanUnits();
      let x = new this.frameworkComponents.CounterCellRenderer(
        this._user,
        this._core
      );
      x.counterChange.subscribe((resp) => console.log('counter changed'));
    });
  }

  counterFComponentUpdate(params: ICellRendererParams) {}
  getFpList() {
    this._fpSevice.getFPList(this.quoteId).subscribe(
      (data) => {
        this.fplist = data.result;
      },
      (error) => {
        this._toaster.error(error);
      }
    );
  }

  getSelectedFpu(ev: any) {
    this.selectedFpid = ev.target.value;
  }

  removeMoodboardFromFP(moodboard: any) {
    this._dialog_s
      .openConformationDialog({
        title: 'REMOVE MOODBOARD FROM FLOOR PLAN',
        suTitle: 'Are you sure you want to delete?',
        width: '50%',
      })
      .afterClosed()
      .subscribe((data: any) => {
        if (data) {
          this._fpSevice
            .removeMoodboardFromFPUnits(
              this.quoteId,
              this.fpId,
              moodboard.moodboard_id,
              this.unit_id
            )
            .subscribe((resp) => {
              if (resp.statusCode === 200) {
                this._toaster.success(resp.result);
                this.refresh();
              } else {
                this._toaster.success(resp.result);
              }
            });
        }
      });
  }

  onCreateNewFP(): any {
    this._dialog
      .open(AddFPComponent, {
        height: '70%',
        width: '70%',
        data: {
          isDialog: true,
          quoteId: this.quoteId,
        },
      })
      .afterClosed()
      .subscribe((data) => {
        console.log(data);
        if (data && data.event) {
          this.getFpList();
        }
      });
  }

  getFPSummary() {
    this._fpSevice
      .getFPSummary(this.quoteId, this.fpId, this.unit_id)
      .subscribe((resp) => {
        this.unitName = resp?.unit?.name;
        this.unit = resp?.unit?.unit;
        this.selectedFpid = resp?.unit?.floorplan_id;
        this.selectedFpid = this.selectedFpid ? this.selectedFpid : 'None';
        if (this.selectedFpid !== 'None') {
          this.hideFloorPlanAssign = true;
        }
      });
  }

  onGridReady(evt: GridReadyEvent) {
    this.agGrid = evt;
    evt.api.sizeColumnsToFit();
    this.rowData = this.getUnitQuoteSummary();
  }

  getUnitQuoteSummary<T>(): Observable<T> {
    return this._quoteHeaderService
      .getUnitQuoteSummary<T>(this.unit_id, this.fpId, this.quoteId)
      .pipe(
        map((x: any) => {
          if (x.floorplan) {
            this.updateBottomData(x.floorplan);
          } else {
            this.updateBottomData({
              delivery_fee: 0,
              tax_percentage: 0,
              tax_amount: 0,
            });
          }
          this.agGrid.api.redrawRows();
          return x.result.map((item: any, index: number) => {
            item.sgid = index + 1;
            item.userid = x?.floorplan?.userid;
            item.order_status = this.page == 'ORDER';
            return item;
          });
        })
      );
  }

  updateBottomData(data: any) {
    this.pinnedBottomRowData[1].is_total = data?.delivery_fee;
    this.pinnedBottomRowData[2].sgid =
      'TAXES (' + data?.tax_percentage + '%) ($)';
    this.pinnedBottomRowData[2].is_total = data?.tax_amount;
    this.pinnedBottomRowData[3].is_total = data?.tax_amount;
  }

  back() {
    let route = this.page == 'ORDER' ? 'order' : 'quote';
    this._router.navigate([route, this.quoteId]);
  }

  getFloorPlanDetails() {
    this._fpSevice
      .getFloorPlanDetails(this.quoteId, this.fpId)
      .subscribe((resp) => {
        if (resp.statusCode === 200) {
          this.fpDetails = resp?.result[0];
          // this.selectedFpid = resp?.result[0].sgid;
        } else {
          this.fpDetails = {};
        }
      });
  }

  addFloorPlan() {
    if (this.selectedFpid && this.selectedFpid !== 'None') {
      this._fpSevice
        .addFloorPlanUnit(
          this.unit,
          this.selectedFpid,
          this.quoteId,
          this.unit_id
        )
        .subscribe((resp: any) => {
          this._toaster.success(resp.message);
          this._router.navigate([
            'quote',
            this.quoteId,
            'floor-plan-unit',
            this.selectedFpid,
            'unit',
            this.unit_id,
          ]);
        });
    }
  }

  getMoodBoards() {
    this._fpSevice
      .getUnitMoodBoards(this.quoteId, this.fpId, this.unit_id)
      .subscribe((data) => {
        if (data.statusCode === 200) {
          this.moodboardList = data.moodboard_list;
        } else {
          this.moodboardList = [];
        }
      });
  }

  openAddMoodboardDialog() {
    this._dialog
      .open(MoodboardComponent, {
        width: '50%',
        data: { quoteId: this.quoteId, fpId: this.fpId, unit_id: this.unit_id },
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.refresh();
        }
      });
  }

  changeUnitName() {
    this._fpSevice
      .changeUnitName(this.quoteId, this.unit_id, this.unitName)
      .subscribe((data) => {
        if (data.statusCode === 200) {
          this._toaster.success(data.result);
          this.refresh();
        } else {
          this._toaster.success(data.result);
        }
      });
  }

  refresh() {
    this.getMoodBoards();
    this.getFPSummary();
    this.onGridReady(this.agGrid);
    // this.getFloorPlanUnits();
    // this.getMoodboardWithUnits();
  }
}
