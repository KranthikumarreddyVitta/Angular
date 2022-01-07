import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { CreateMoodboardPopupComponent } from 'projects/moodboard/src/lib/components/create-moodboard-popup/create-moodboard-popup.component';
import { MoodboardService } from 'projects/moodboard/src/lib/services/moodboard.service';
import { QuoteListService } from 'projects/quote/src/lib/components/quote-list/quote-list.service';
import {
  AddproductComponent,
  QuoteCreateFormComponent,
} from 'projects/quote/src/public-api';
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
  featuresAndDescription = '';

  productId: number = NaN;
  warehouseId: number = NaN;
  variationId: number = NaN;
  forDialog: boolean = false;
  forMoodboard: boolean = true;
  forQuote: boolean = true;
  forHitler: boolean = false;

  selectedType: '0' | '1' = '0';
  quantityCounter = 1;

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
    private _router: Router,
    private _location: Location,
    public dialogRef: MatDialogRef<any>
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
      this.warehouseId = this.data?.item?.warehouse_id;
      this.variationId = this.data?.item?.sku_variation_id;
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
    var userSelectedMonths = event;
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
        this.getFeatures(this.productdetails)
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
      .getQuoteList<Array<any>>(this._user.getUser().getId(), 'my', 'quotes')
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
      (data) => {
        this._toaster.success('Item added to Moodboard');
        this.quantityCounter = 1;
      },
      (error) => this._toaster.error('Fail to add')
    );
  }

  addItemToQuote() {
    // let obj = {
    //   button_type: this.selectedType,
    //   floorplan_id: null,
    //   month: this.monthNums,
    //   moodboard_id: null,
    //   product_id: this.productId,
    //   quantity: this.quantityCounter,
    //   quote_id: this.selectedQuote,
    //   sku: this.variationId,
    //   units: null,
    //   user_id: this._user.getUser().getId(),
    //   warehouse_id: this.warehouseId,
    // };
    // this._shopService.addItemToQuote(obj).subscribe(
    //   (data) => this._toaster.success('Item added to Quote'),
    //   (error) => this._toaster.error('Fail to add')
    // );
    this._dialog
      .open(AddproductComponent, {
        height: '80%',
        width: '50%',
        data: {
          isDialog: true,
          quoteId: this.selectedQuote,
          product_id: this.productId,
          sku: this.variationId,
          quantity: this.quantityCounter,
          button_type: this.selectedType,
          month: this.monthNums,
          warehouse_id: this.warehouseId,
          user_id: this._user.getUser().getId(),
        },
      })
      .afterClosed()
      .subscribe((data) => {
        this.quantityCounter = 1;
        console.log(data);
      });
  }
  createNewMB() {
    this._dialog
      .open(CreateMoodboardPopupComponent, {
        height: '80%',
        width: '70%',
        data: {
          isDialog: true,
        },
      })
      .afterClosed()
      .subscribe((data) => {
        console.log(data);
      });
  }
  createNewQuote() {
    this._dialog
      .open(QuoteCreateFormComponent, {
        height: '80%',
        width: '70%',
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
    if (evt?.target.value) {
      this.warehouseId = evt.target.value;
      let warehouse = this.productdetails.warehouses.find(
        (x: any) => x.warehouse_id == evt.target.value
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
    this.monthNums = 12;
  }

  back() {
    this._location.back();
  }
  itemChange(product: any) {}

  buyMoodboard() {
    const buyObj = this.getBuyOrRentObject('buy');
    this._shopService.addItemToMoodboard(buyObj).subscribe(
      (data) => {
        this._toaster.success('Item added to Moodboard');
        this.dialogRef.close({ event: 'added' });
      },
      (error) => this._toaster.error('Fail to add')
    );
  }

  rentMoodboard() {
    const buyObj = this.getBuyOrRentObject('rent');
    this._shopService.addItemToMoodboard(buyObj).subscribe(
      (data) => {
        this._toaster.success('Item added to Moodboard');
        this.dialogRef.close({ event: 'added' });
      },
      (error) => this._toaster.error('Fail to add')
    );
  }

  getBuyOrRentObject(type: string) {
    return {
      button_type: type == 'buy' ? '1' : '0',
      month: this.monthNums,
      mood_board_id: this.data.moodboardId,
      product_id: this.productId,
      product_ids: [this.productId],
      quantity: this.quantityCounter,
      sku: this.variationId,
      user_id: this._user.getUser().getId(),
      warehouse_id: this.warehouseId,
    };
  }

  changeSelectedType(type: String) {
    if (type == 'BUY') this.selectedType = '1'; else this.selectedType = '0'
  } 

  addProductToMoodboard() {
    if(this.selectedType == '1') this.buyMoodboard();else this.rentMoodboard();
  }

  getFeatures(product: any) {
    if (product && product.features && product.description) {
      this.featuresAndDescription = `${product.features}` + '<br><br>' + `${product.description}`
    }
    else if (product && product.description == '') {
      this.featuresAndDescription = `${product.features}`
    }
    else if (product && product.features == '') {
      this.featuresAndDescription = `${product.description}`
    }
  }
}
