import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Route } from '@angular/router';
import {
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import {
  CounterComponent,
  DialogService,
  ImageRendererComponent,
  ToasterService,
} from 'projects/core/src/public-api';
import { DeleteItemComponent } from '../delete-item/delete-item.component';
import { MoodboardComponent } from '../moodboard/moodboard.component';
import { ItemTypeComponent } from './../../../common/components/item-type/item-type.component';
import { TotalCellRendererComponent } from './../../../common/components/total-cell-renderer/total-cell-renderer.component';
import { FloorPlanDetailsService } from './floor-plan-details.service';

@Component({
  selector: 'lib-floor-plan-details',
  templateUrl: './floor-plan-details.component.html',
  styleUrls: ['./floor-plan-details.component.scss'],
})
export class FloorPlanDetailsComponent implements OnInit {
  @ViewChild('dialog') dialog: TemplateRef<any> = {} as TemplateRef<any>;
  quoteId = '';
  fpId = '';
  unitId = '';
  unitName = '';
  noOfUnits = '';
  fpDetails: any = {};
  moodboardList: Array<any> = [];
  moodboardWithUnitList: Array<any> = [];
  fpUnitList: Array<any> = [];
  quoteMDList = [
    { name: '1', unitmoodboards: {} },
    { name: '2', unitmoodboards: {} },
  ];
  rowData: Array<any> = [];
  fpGridApi: GridOptions = {} as GridOptions;
  fpRowData = [];
  fpColumnDefs = [
    {
      field: 'sgid',
      width: 140,
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
  frameworkComponents = {
    ImageRendererComponent: ImageRendererComponent,
    TotalCellRendererComponent: TotalCellRendererComponent,
    ItemTypeCellRenderer: ItemTypeComponent,
    CounterCellRenderer: CounterComponent,
    DeleteItemComponent: DeleteItemComponent,
  };
  columnDefs = [
    { field: 'sub_total', headerName: 'SUB TOTAL (Monthly Rent)' },
    { field: 'delivery_fee', headerName: 'DELIVERY FEE' },
    { field: 'tax_amount', headerName: 'TAXES' },
    { field: 'net_total', headerName: 'TOTAL AMOUNT' },
    {
      field: 'pickup_fee',
      headerName: 'PICKUP FEE (Charged at the end of the lease)',
    },
  ];
  gridOptions: GridOptions = {
    onGridReady: (api: GridReadyEvent) => {
      this.onGridReady(api);
    },
    rowHeight: 80,
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
  fpGridOptions: GridOptions = {
    rowHeight: 60,
    onGridReady: (api: GridReadyEvent) => {
      this.fpGridApi = api;
      this.onGridReady(api);
    },
  };
  constructor(
    private _fpSevice: FloorPlanDetailsService,
    private _route: ActivatedRoute,
    private _location: Location,
    private _toaster: ToasterService,
    private _matDialog: MatDialog,
    private _dialog: DialogService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.quoteId = params.id;
      this.fpId = params.fpId;
      this.getFloorPlanDetails();
      this.getMoodBoards();
      this.getFloorPlanUnits();
      this.getMoodboardWithUnits();
    });
  }

  refresh() {
    this.getMoodBoards();
    this.getFloorPlanUnits();
    this.getMoodboardWithUnits();
  }

  back() {
    this._location.back();
  }
  onClickMDorProduct(ab: any) {}

  openAddMoodboardDialog() {
    this._matDialog
      .open(MoodboardComponent, {
        width: '50%',
        data: { quoteId: this.quoteId, fpId: this.fpId },
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.refresh();
        }
      });
  }
  onGridReady(evt: GridReadyEvent) {
    evt.api.sizeColumnsToFit();
  }

  getMoodBoards() {
    this._fpSevice.getMoodBoards(this.quoteId, this.fpId).subscribe((data) => {
      if (data.statusCode == 200) {
        this.moodboardList = data.floorplans;
      } else {
        this.moodboardList = [];
      }
    });
  }

  getFloorPlanUnits() {
    this._fpSevice
      .getFloorPlanUnits(this.quoteId, this.fpId)
      .subscribe((data: any) => {
        if (data.statusCode) {
          this.fpUnitList = data?.result;
          this.getFPSummary(data?.result[0]);
        } else {
          this.fpUnitList = [];
        }
      });
  }
  getFPSummary(unit: any) {
    this.unitId = unit?.sgid;
    this.unitName = unit?.name;
    if (!this.unitId) {
      return;
    }
    this._fpSevice
      .getFPSummary(this.quoteId, this.fpId, this.unitId)
      .subscribe((resp) => {
        this.fpRowData = resp.result.map((data: any) => {
          data.isDeleteOption = true;
          return data;
        });
        this.updateBottomData(resp.unit, resp.sales_tax_rate);
        this.setTotalFPSummary(resp.floorplan);
        this.fpGridApi?.api?.redrawRows();
      });
  }

  setTotalFPSummary(fp: any) {
    this.rowData = [fp];
  }
  updateBottomData(data: any, tax: string) {
    this.pinnedBottomRowData[1].is_total = data?.delivery_fee;
    this.pinnedBottomRowData[2].sgid = 'TAXES (' + tax + '%)';
    this.pinnedBottomRowData[2].is_total = data?.tax_amount;
    this.pinnedBottomRowData[3].is_total = data?.tax_amount;
  }

  getFloorPlanDetails() {
    this._fpSevice
      .getFloorPlanDetails(this.quoteId, this.fpId)
      .subscribe((resp) => {
        if (resp.statusCode == 200) {
          this.fpDetails = resp?.result[0];
        } else {
          this.fpDetails = {};
        }
      });
  }
  changeUnitName() {
    this._fpSevice
      .changeUnitName(this.quoteId, this.unitId, this.unitName)
      .subscribe((data) => {
        if (data.statusCode == 200) {
          this._toaster.success(data.result);
          this.refresh();
        } else {
          this._toaster.success(data.result);
        }
      });
  }

  removeUnitFromFP(unit: any) {
    this._dialog
      .openConformationDialog({
        title: 'REMOVE UNIT FROM FLOOR PLAN',
        suTitle: 'Are you sure you want to delete?',
        width: '50%',
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this._fpSevice
            .removeUnitFromFp(this.quoteId, unit?.name, unit?.sgid)
            .subscribe((resp) => {
              if (resp.statusCode == 200) {
                this._toaster.success(resp.message);
                this.refresh();
              } else {
                this._toaster.success(resp.message);
              }
            });
        }
      });
  }

  getMoodboardWithUnits() {
    this._fpSevice.getMoodboardWithUnits(this.quoteId, this.fpId).subscribe(
      (resp) => {
        if (resp.statusCode == 200) {
          this.moodboardWithUnitList = resp.result;
        } else {
          this._toaster.error(resp?.message);
        }
      },
      (error) => {
        this._toaster.error(error?.message);
      }
    );
  }

  addUnitsToFp() {
    this._fpSevice
      .addUnitsToFp(this.quoteId, this.fpId, this.noOfUnits)
      .subscribe((data) => {
        if (data.statusCode == 200) {
          this._toaster.success(data.message);
          this.refresh();
        } else {
          this._toaster.success(data.message);
        }
      });
  }

  removeMoodboardFromFP(moodboard: any) {
    this._dialog
      .openConformationDialog({
        title: 'REMOVE MOODBOARD FROM FLOOR PLAN',
        suTitle: 'Are you sure you want to delete?',
        width: '50%',
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this._fpSevice
            .removeMoodboardFromFP(
              this.quoteId,
              this.fpId,
              moodboard.moodboard_id
            )
            .subscribe((resp) => {
              if (resp.statusCode == 200) {
                this._toaster.success(resp.message);
                this.getMoodBoards();
              } else {
                this._toaster.success(resp.message);
              }
            });
        }
      });
  }

  openAddDialog() {
    this._matDialog
      .open(this.dialog)
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.refresh();
        }
      });
  }
}
