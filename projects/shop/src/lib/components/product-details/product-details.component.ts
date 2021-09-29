import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { MoodboardService } from 'projects/moodboard/src/lib/services/moodboard.service';
import { QuoteListService } from 'projects/quote/src/lib/components/quote-list/quote-list.service';
import { QuoteCreateFormComponent } from 'projects/quote/src/public-api';
import { ShopService } from '../../service/shop.service';

@Component({
  selector: 'lib-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productdetails: any;
  panelOpenState: any = false;
  activeIndex: any;
  totalQty: any;
  monthNums: any = 12;
  rentalPrice: any;

  productId: number = NaN;
  warehouseId: number = NaN;
  variationId: number = NaN;
  forDialog: boolean = false;
  forMoodboard: boolean = true;
  forQuote: boolean = true;
  forHitler: boolean = false;

  selectedType: '0' | '1' = '0';
  quantityCounter = 0;

  moodboardList: Array<any> = [];
  selectedMoodboard: string = '';
  quoteList: Array<any> = [];
  selectedQuote: string = '';
  constructor(
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private moodboardService: MoodboardService,
    private _route: ActivatedRoute,
    private _moodboardService: MoodboardService,
    private _quoteListService: QuoteListService,
    private _user: UserService,
    private _shopService: ShopService,
    private _toaster: ToasterService,
    private __dialog: MatDialog,
    private _router: Router
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.forDialog = this.data.hasOwnProperty('forDialog')
        ? this.data?.forDialog
        : false;
      this.forMoodboard = this.data.hasOwnProperty('forMoodboard')
        ? this.data?.forMoodboard
        : true;
      this.forQuote = this.data.hasOwnProperty('forQuote')
        ? this.data?.forQuote
        : true;

      this.forHitler = this.data.hasOwnProperty('forHitler')
        ? this.data?.forHitler
        : false;
    }

    if (!this.forDialog) {
      this._route.params.subscribe((data) => {
        this.productId = data.productId;
        this.warehouseId = data.warehouseId;
        this.variationId = data.variationId;
        this.getProduct(this.productId, this.warehouseId, this.variationId);
      });
      this.getMyMoodboards();
      this.getMyQuotes();
    } else {
      this.productId = this.data?.item?.product_id;
      this.warehouseId = this.data.item.warehouse_id;
      this.variationId = this.data.item.sku_variation_id;
      this.getProduct(this.productId, this.warehouseId, this.variationId);
      if (this.forMoodboard) {
        this.getMyMoodboards();
      }
    }
  }

  increment(): void {
    if (this.quantityCounter + 1 > this.data?.item?.supplier_quantity) {
      return;
    }
    this.quantityCounter++;
  }
  decrement(): void {
    if (this.quantityCounter - 1 < 0) {
      return;
    }
    this.quantityCounter--;
  }
  updateRent(event: any) {
    console.log(event);
    var actualMonths = 36;
    var userSelectedMonths = event.target.value;
    var selectedMonths = actualMonths - userSelectedMonths;
    this.monthNums = userSelectedMonths;
    this.productdetails?.variations[this.activeIndex]?.default_price.forEach(
      (prices: any, index: any) => {
        if (selectedMonths == index) {
          this.rentalPrice = prices.rental_price;
        }
      }
    );
  }
  closeModal() {
    this._dialog.closeAll();
  }
  getProduct(pid: any, wid: any, skuId: any) {
    this.moodboardService
      .getProductDetails(pid, wid)
      .subscribe((response: any) => {
        this.productdetails = response.result;
        this.activeIndex = response.result.variations.findIndex(
          (item: any) => item.sgid == skuId
        );
        this.totalQty = 0;
        this.rentalPrice =
          this.productdetails?.variations[
            this.activeIndex
          ]?.default_price[24]?.rental_price;
        this.productdetails?.variations[
          this.activeIndex
        ]?.warehouse_location_new.forEach((value: any, index: any) => {
          this.totalQty += value.total_warehouse_quantity;
        });
      });
  }

  getMyMoodboards() {
    this._moodboardService.getMyMoodBoardList().subscribe(
      (data: any) => {
        this.moodboardList = data?.result;
        if (this.data?.moodboardId) {
          this.selectedMoodboard = this.data.moodboardId;
        } else if (data?.result?.length > 0) {
          this.selectedMoodboard = data?.result[0].id;
        }
      },
      (error) => (this.moodboardList = [])
    );
  }
  getMyQuotes() {
    this._quoteListService
      .getQuoteList<Array<any>>(this._user.getUser().getId(),'my','quotes')
      .subscribe(
        (data: Array<any>) => {
          this.quoteList = data;
          this.selectedQuote = data[0].sgid;
        },
        (error) => (this.quoteList = [])
      );
  }

  addItemToMoodboard() {
    let obj = {
      month: this.monthNums,
      button_type: this.selectedType,
      mood_board_id: this.selectedMoodboard,
      product_id: this.productId,
      product_ids: [this.productId],
      quantity: this.quantityCounter,
      sku: this.variationId,
      user_id: this._user.getUser().getId(),
      warehouse_id: this.warehouseId,
    };
    this._shopService.addItemToMoodboard(obj).subscribe(
      (data) => this._toaster.success('Item added to Moodboard'),
      (error) => this._toaster.error('Fail to add')
    );
  }

  addItemToQuote() {
    let obj = {
      button_type: this.selectedType,
      floorplan_id: null,
      month: this.monthNums,
      moodboard_id: null,
      product_id: this.productId,
      quantity: this.quantityCounter,
      quote_id: this.selectedQuote,
      sku: this.variationId,
      units: null,
      user_id: this._user.getUser().getId(),
      warehouse_id: this.warehouseId,
    };
    this._shopService.addItemToQuote(obj).subscribe(
      (data) => this._toaster.success('Item added to Quote'),
      (error) => this._toaster.error('Fail to add')
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

  cityChange(evt: any) {
    if (evt?.value) {
      this.warehouseId = evt.value;
      let warehouse = this.productdetails.warehouses.find(
        (x: any) => x.warehouse_id == evt.value
      );
      this.variationId = warehouse.sku_variation_id;
      this.reload();
    }
  }

  variationChange(variation: any) {
    this.variationId = variation.sgid;
    this.warehouseId = variation.warehouse_location_new[0].warehouse_id;
    this.reload();
  }
  reload() {
    if (this.forDialog) {
      this.getProduct(this.productId, this.warehouseId, this.variationId);
      return;
    }
    this._router.navigate([
      'shop',
      this.productId,
      this.warehouseId,
      this.variationId,
    ]);
  }
}
