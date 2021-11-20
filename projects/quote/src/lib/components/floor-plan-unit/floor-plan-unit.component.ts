import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { GridOptions, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { CounterComponent, ImageRendererComponent, ToasterService } from 'projects/core/src/public-api';
import { ItemTypeComponent, TotalCellRendererComponent } from 'projects/quote/src/public-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FloorPlanDetailsService } from '../../common/components/floor-plan-details/floor-plan-details.service';
import { MoodboardComponent } from '../../common/components/moodboard/moodboard.component';
import { QuoteHeaderService } from '../../common/components/quote-header/quote-header.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-floor-plan-unit',
  templateUrl: './floor-plan-unit.component.html',
  styleUrls: ['./floor-plan-unit.component.scss']
})
export class FloorPlanUnitComponent implements OnInit {

  quoteId = '';
  unit_id = '';
  agGrid: GridReadyEvent = {} as GridReadyEvent;
  rowData: Observable<any[]> = new Observable();
  fpDetails: any = {};
  fpId = '';
  moodboardList: Array<any> = [];
  unitName = '';

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
    rowHeight: 100,
    headerHeight: 100,
    getRowHeight: (params: any) => {
      return params?.data?.isExtraRow ? 50 : 100;
    },
  };
  
  constructor(private _quoteHeaderService: QuoteHeaderService,
              private _route: ActivatedRoute,
              private _dialog: MatDialog,
              private _location: Location,
              private _toaster: ToasterService,
              private _fpSevice: FloorPlanDetailsService) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.quoteId = params.id;
      this.fpId = params.fpId;
      this.unit_id = params.unit_id;
      this.getFloorPlanDetails();
      this.getMoodBoards();
      // this.getFloorPlanUnits();
    });
  }

  onGridReady(evt: GridReadyEvent) {
    this.agGrid = evt;
    evt.api.sizeColumnsToFit();
    this.rowData = this.getUnitQuoteSummary();
  }

  getUnitQuoteSummary<T>(): Observable<T> {
    return this._quoteHeaderService.getUnitQuoteSummary<T>(this.unit_id, this.fpId, this.quoteId).pipe(
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
        return x.result;
      })
    );
  }

  updateBottomData(data: any) {
    this.pinnedBottomRowData[1].is_total = data?.delivery_fee;
    this.pinnedBottomRowData[2].sgid = 'TAXES (' + data?.tax_percentage + '%)';
    this.pinnedBottomRowData[2].is_total = data?.tax_amount;
    this.pinnedBottomRowData[3].is_total = data?.tax_amount;
  }

  back() {
    this._location.back();
  }

  getFloorPlanDetails() {
    this._fpSevice
      .getFloorPlanDetails(this.quoteId, this.fpId)
      .subscribe((resp) => {
        if (resp.statusCode === 200) {
          this.fpDetails = resp?.result[0];
        } else {
          this.fpDetails = {};
        }
      });
  }

  getMoodBoards() {
    this._fpSevice.getMoodBoards(this.quoteId, this.fpId).subscribe((data) => {
      if (data.statusCode === 200) {
        this.moodboardList = data.floorplans;
      } else {
        this.moodboardList = [];
      }
    });
  }

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
    // this.getFloorPlanUnits();
    // this.getMoodboardWithUnits();
  }

}
