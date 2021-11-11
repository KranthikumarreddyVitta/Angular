import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ScrollService } from 'projects/core/src/public-api';
import { MoodboardService } from 'projects/moodboard/src/lib/services/moodboard.service';
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { ShopService } from '../../service/shop.service';
import { AfterViewInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'lib-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit, AfterViewInit {
  productList: Array<any> = [];
  selectedCategory: any = [];
  // selectedSupplier = [];
  // selectedWarehouse = [];
  categoriesList: Subject<any[]> = new Subject();
  catListDefault: any[] = [];
//  catListPopup: any[] = [];
  cityList: Subject<any[]> = new Subject() ;
  cityListDefault: any[] = [];
//  cityListPopup: any[] = [];
  selectedCity: any = [];
  min_price: any = '';
  max_price: any = '';
  min_price_inventory: any = '';
 // min_price_popup: any = '';
 // max_price_popup: any = '';
 // min_price_inventory_popup: any = '';
  startCount = 0;
  private lLimit = 0;
  private hLimit = 12;
  selectedIndex = 0;
  show = false;
  @ViewChild('quickFilter', { static: true }) template: ElementRef | null = null;
  @ViewChild('stepper') private myStepper: MatStepper | null = null;

  constructor(
    private _shopService: ShopService,
    private _scrollService: ScrollService,
    private moodboardService: MoodboardService,
    private _dialog: MatDialog,
    private _router: Router,

  ) {
    this.selectedIndex = 0;
  }

  move(index: number) {
  // this.myStepper.selectedIndex = index;
  }
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

  resetFilter() {
    this.cityListDefault.map((el) => (el.isChecked = false));
    this.cityListDefault.sort((a, b) =>
      a.warehouse_name > b.warehouse_name ? 1 : -1
    );
    this.catListDefault.map((el) => (el.isChecked = false));
    this.catListDefault.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.categoriesList.next(this.catListDefault);
    this.cityList.next(this.cityListDefault);
    this.selectedCategory = this.catListDefault;
    this.selectedCity = this.cityListDefault;
    this.min_price = 0;
   this.max_price = 0;
    // this.onPriceRemove();
    this.onQtyChange(0);
    // this.onQtyChangePopup(0);
    // this.onPriceRemovePopup();
    this.max_price = 1;
    this.min_price = 0;
    this.min_price_inventory = 0;
  }
  getCategory(){
    this.moodboardService.getCategoryList().pipe(map((item: any)=> {item.result.map((i: any, index: any)=>{ i['isChecked']= false; i['order']= index; return i;}); return item;} )).subscribe((response:any) => {
      this.categoriesList.next(response.result);
      this.catListDefault = response.result;
   //   this.catListPopup = response.result;
    });    
  }
  getCity(){
    this.moodboardService.getCityList().pipe(map((item: any)=> {item.data.map((i: any, index: any)=>{ i['isChecked']= false; i['order']= index; return i;}); return item;} )).subscribe((response:any) => {
      this.cityList.next(response.data);
      this.cityListDefault = response.data;
     // this.cityListPopup = response.data;
    });    
  }
  // onCityCheckedPopup(city: any, i: any){
  //   if(city.isChecked) city.isChecked = false;  else city.isChecked = true;
  //   //this.cityListPopup[i] = city;
  //   // this.cityListPopup.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
  // }
  onCityChecked(city: any, i: any){
    if(city.isChecked) city.isChecked = false;  else city.isChecked = true;
    this.cityListDefault[i] = city;
    this.cityListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
    this.cityList.next(this.cityListDefault);
    this.selectedCity = this.cityListDefault
      .filter((item) => item.isChecked)
      .map((i) => i.sgid);
    // this.lLimit = 0;
    // this.hLimit = 8;  
    this.resetList();
    this.getProducts();
  }
  onCityUnchecked(city: any){
    if(city.isChecked) city.isChecked = false;  else city.isChecked = true;
    let i = this.cityListDefault.findIndex(item => item.sgid == city.sgid);
    this.cityListDefault[i] = city;
    this.cityListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
    this.cityList.next(this.cityListDefault);
    this.selectedCity = this.cityListDefault.filter((item) => item.isChecked).map((i)=> i.sgid);
    // this.lLimit = 0;
    // this.hLimit = 8;
    this.resetList();
    this.getProducts();
  }

  onCatUnchecked(cat: any) {
    if(cat.isChecked) cat.isChecked = false;  else cat.isChecked = true;
    let i = this.catListDefault.findIndex(item => item.sgid == cat.sgid);
    this.catListDefault[i] = cat;
    this.catListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
    this.categoriesList.next(this.catListDefault);
    // this.lLimit = 0;
    // this.hLimit = 8;
    this.resetList();
    this.getProducts(); 
  }

  // onCategoriesChecked(cat: any, i: any) {
  //   if (cat.isChecked) cat.isChecked = false;
  //   else cat.isChecked = true;
  // }  
  // onCategoriesCheckedPopup(cat: any, i: any){
  //   if(cat.isChecked) cat.isChecked = false;  else cat.isChecked = true;
  //   this.catListPopup[i] = cat;
  // }
  onCategoriesChecked(cat: any, i: any){
    if(cat.isChecked) cat.isChecked = false;  else cat.isChecked = true;
    this.catListDefault[i] = cat;
    this.catListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
    this.categoriesList.next(this.catListDefault);
    this.resetList();
    this.getProducts();
  }
  onPriceRemove(){
    this.min_price = 0;
    this.max_price = 0;
    // this.lLimit = 0;
    // this.hLimit = 8;
    this.resetList();
    this.getProducts();
  }
  // onPriceRemovePopup(){
  //   this.min_price_popup = 0;
  //   this.max_price_popup = 0;
  //   this.min_price = 0;
  //   this.max_price = 0;
  // }
  onMinPriceRangeChange(ev: any){
    this.min_price= ev;
    // this.lLimit = 0;
    // this.hLimit = 8;
    this.resetList();
    this.getProducts();
  }
  onMaxPriceRangeChange(ev: any) {
    this.max_price = ev;
    // this.lLimit = 0;
    // this.hLimit = 8;
    this.resetList();
    this.getProducts();
  }
  // onMinPriceRangeChangePopup(ev: any){
  //   this.min_price_popup= ev;
  //   this.min_price = ev;
  // }
  // onMaxPriceRangeChangePopup(ev: any){
  //   this.max_price_popup = ev;
  //   this.max_price = ev;
  // }
  // onQtyChangePopup(ev: any){
  //   this.min_price_inventory_popup = ev;
  //   this.min_price_inventory = ev;
  // }
  onQtyChange(ev: any){
    this.min_price_inventory = ev;
    this.resetList();
    this.getProducts();
  }
  ngOnInit(): void {
    this.getProducts();
    this.getCity();
    this.getCategory();
    
    // this._scrollService.onScroll.pipe(debounceTime(500)).subscribe((data) => {
    //   if (!data) return;
    //   this.lLimit = this.hLimit;
    //   this.hLimit = this.hLimit + 8;
    //   this.getProducts();
    // });
  }
  ngAfterViewInit() {
    this.openModal(this.template);

    // this.input is NOW valid !!
 }
  openModal(templateRef: any) {
    let dialogRef = this._dialog.open(templateRef, {
        width: '90%',
        maxHeight: '85vh',
        disableClose: true,
        panelClass:'shop-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedIndex = 0;
        console.log('The dialog was closed' + result);
        // this.animal = result;
    });
  }
  closeModal() {
    this._dialog.closeAll();
  }
  filterProductPopup(){
    // let cityIds = this.cityListPopup.filter((item) => item.isChecked).map((i)=> i.sgid).toString();
    // let catIds = this.catListPopup.filter((item) => item.isChecked).map((i)=> i.sgid).toString();
    // this.selectedCategory = this.catListPopup.filter((item) => item.isChecked).map((i)=> i);
    // this.selectedCity = this.cityListPopup.filter((item) => item.isChecked).map((i)=> i);
    this.selectedCategory = this.catListDefault.filter((item) => item.isChecked).map((i)=> i);
    this.selectedCity = this.cityListDefault.filter((item) => item.isChecked).map((i)=> i);
    let catIds = this.catListDefault.filter((item) => item.isChecked).map((i)=> i.sgid).toString();
    let cityIds = this.cityListDefault.filter((item) => item.isChecked).map((i)=> i.sgid).toString();

    this.show = true;
    this.closeModal();
    this.resetList();
    let param: any = {
      start: this.lLimit,
      count: this.hLimit,
      category: catIds,
      warehouse: cityIds,
    };
    // if(this.min_price_popup){ param['min_price'] = this.min_price_popup};
    // if(this.max_price_popup){ param['max_price'] = this.max_price_popup};
    // if(this.min_price_inventory_popup){ param['min_price_inventory'] = this.min_price_inventory_popup};
    console.log(this.min_price , this.max_price);
    if(this.min_price != '') param['min_price'] = this.min_price;
    if(this.max_price != '') param['max_price'] = this.max_price;
    if(this.min_price_inventory != '') param['min_price_inventory'] = this.min_price_inventory;

    this._shopService
      .getProducts(param)
      .subscribe(
        (data) => {
          this.productList = data.result;
        },
        (error) => {
          this.productList = [];
        }
      );
  }
  getProducts() {
    this.selectedCategory = this.catListDefault.filter((item) => item.isChecked).map((i)=> i);
    this.selectedCity = this.cityListDefault.filter((item) => item.isChecked).map((i)=> i);
    let catIds = this.catListDefault.filter((item) => item.isChecked).map((i)=> i.sgid).toString();
    let cityIds = this.cityListDefault.filter((item) => item.isChecked).map((i)=> i.sgid).toString();
    let param: any = {
      start: this.lLimit,
      count: this.hLimit,
      category: catIds,
      warehouse: cityIds,
    };
    if(this.min_price !='' ) param['min_price'] = this.min_price;
    if(this.max_price !='') param['max_price'] = this.max_price;
    if(this.min_price_inventory !='') param['min_price_inventory'] = this.min_price_inventory;

    this._shopService
      .getProducts(param)
      .subscribe(
        (data) => {
          if (data && data.result && data.result.length) {
            this.updateList(data.result);
            this.productList = this.getLastViewedUserList();
          }
        },
        (error) => {
          this.productList = [];
        }
      );
  }

  productClick(product: any) {
    this._router.navigate([
      'shop',
      product.product_id,
      product.warehouse_id,
      product.sku_variation_id,
    ]);
  }

  onScroll() {
    this.selectedCategory = this.catListDefault.filter((item) => item.isChecked).map((i)=> i);
    this.selectedCity = this.cityListDefault.filter((item) => item.isChecked).map((i)=> i);
    let catIds = this.catListDefault.filter((item) => item.isChecked).map((i)=> i.sgid).toString();
    let cityIds = this.cityListDefault.filter((item) => item.isChecked).map((i)=> i.sgid).toString();
    let param: any = {
      start: this.lLimit,
      count: this.hLimit,
      category: catIds,
      warehouse: cityIds,
    };
    if(this.min_price !='' ) param['min_price'] = this.min_price;
    if(this.max_price !='') param['max_price'] = this.max_price;
    if(this.min_price_inventory !='') param['min_price_inventory'] = this.min_price_inventory;

    if (this.startCount !== this.lLimit) {
      this._shopService
      .getProducts(param).subscribe((response: any) => {
        if (response && response.result && response.result.length) {
          this.updateList(response.result);
         
        }
      });
      this.productList = this.getLastViewedUserList();
      this.startCount = this.lLimit;
     
    }
  }

  updateList(obj: any) {
    let isResult = false;
    if (obj && obj.length) {
      this.productList.push(...obj);
      isResult = true;
    }
    if (isResult === true) {
      this.lLimit += 12;
    }
  }

  resetList() {
    this.productList = [];
    this.startCount = 0;
    this.lLimit = 0;
  }

  getLastViewedUserList() {
    return this.productList;
  }
}
