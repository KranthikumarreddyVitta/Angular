import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { OrderListService } from './order-list.service';

type OrderSourceType = 'all' | 'my';

@Component({
  selector: 'lib-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  orderInfo = {
    bannerIconImg: 'assets/order/images/order-icon.png',
    bannerIconImgTxt: 'Order Icon',
    bannerImg: 'assets/quote/images/quote_banner.jpg',
    bannerImgTxt: 'Order Banner Image',
    bannerBottomTxt:
      'Style & create a look from our collection of designer furniture',
    text: 'Order',
  };

  selectedButton: OrderSourceType = 'all';
  columnDefs = [
    { field: 'sgid', headerName: 'Quote Number' },
    { field: 'name', headerName: 'Customer name' },
    { field: 'company_name', headerName: 'Company Name' },
    { field: 'project_name', headerName: 'Project Name' },
    {
      field: 'created_at',
      headerName: 'Quote Created Date',
      filter: 'agDateColumnFilter',
    },
    { field: 'order_status', headerName: 'Order Submitted' },
  ];

  rowData: Observable<any[]> = new Observable();
  gridOptions: GridOptions = {
    onRowClicked: (param) => this.onRowClicked(param),
    rowHeight: 50,
    onGridReady: (api: GridReadyEvent) => this.onGridReady(api),
  };

  constructor(
    private _orderListService: OrderListService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  /**
   * On row Click
   * @param param 
   */
  onRowClicked(param: any) {
    let orderId = param?.data?.sgid;
    if (orderId) {
      this._router.navigate(['order', orderId]);
    }
  }

  /**
   * On grid ready
   * @param api 
   */
  onGridReady(api: GridReadyEvent) {
    api.api.sizeColumnsToFit();
    this.getOrderList('all');
  }

  /**
   * get Order List
   * @param sourceType 
   */
  getOrderList(sourceType: OrderSourceType) {
    this.selectedButton = sourceType;
    this.rowData = this._orderListService.getOrderList(98, sourceType);
  }
}
