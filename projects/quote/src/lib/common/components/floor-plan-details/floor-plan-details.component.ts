import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Route } from '@angular/router';
import {
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import {
  CounterComponent,
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
  quoteId = '';
  fpId = '';
  unitId = '';
  fpDetails: any = {};
  moodboardList: Array<any> = [];
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
    }
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
    DeleteItemComponent: DeleteItemComponent
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
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.quoteId = params.id;
      this.fpId = params.fpId;
      this.getFloorPlanDetails();
      this.getMoodBoards();
      this.getFloorPlanUnits();
    });
  }

  back() {
    this._location.back();
  }
  onClickMDorProduct(ab: any) {}

  openAddMoodboardDialog() {
    this._dialog
      .open(MoodboardComponent, {
        width: '50%',
        data: { quoteId: this.quoteId, fpId: this.fpId },
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.getMoodBoards();
          this.getFloorPlanUnits();
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
    if (!this.unitId) {
      return;
    }
    this._fpSevice
      .getFPSummary(this.quoteId, this.fpId, this.unitId)
      .subscribe((resp) => {
        this.fpRowData = resp.result.map((data:any)=>{
          data.isDeleteOption = true;
          return data;
        });
        this.updateBottomData(resp.unit,resp.sales_tax_rate);
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

  removeUnitFromFP(unit: any) {
    this._fpSevice
      .removeUnitFromFp(this.quoteId, unit?.name, unit?.sgid)
      .subscribe((resp) => {
        if (resp.statusCode == 200) {
          this._toaster.success(resp.message);
          this.getFloorPlanUnits();
        } else {
          this._toaster.success(resp.message);
        }
      });
  }

  removeMoodboardFromUnit() {}
}
