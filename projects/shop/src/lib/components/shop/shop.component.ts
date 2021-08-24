import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ScrollService } from 'projects/core/src/public-api';
import { MoodboardService } from 'projects/moodboard/src/lib/services/moodboard.service';
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { ShopService } from '../../service/shop.service';

@Component({
  selector: 'lib-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  productList: Array<any> = [];
  selectedCategory: any = [];
  // selectedSupplier = [];
  // selectedWarehouse = [];
  categoriesList: Subject<any[]> = new Subject();
  catListDefault: any[] = [];
  cityList: Subject<any[]> = new Subject();
  cityListDefault: any[] = [];
  selectedCity: any = [];
  min_price: number = 0;
  max_price: number = 0;
  min_price_inventory: any = 0;

  private lLimit = 0;
  private hLimit = 6;
  constructor(
    private _shopService: ShopService,
    private _scrollService: ScrollService,
    private moodboardService: MoodboardService,
    private _dialog: MatDialog,
    private _router: Router
  ) {}
  resetFilter() {
    this.cityListDefault.map((el) => (el.isChecked = false));
    this.cityListDefault.sort((a, b) =>
      a.warehouse_name > b.warehouse_name ? 1 : -1
    );
    this.catListDefault.map((el) => (el.isChecked = false));
    this.catListDefault.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.categoriesList.next(this.catListDefault);
    this.cityList.next(this.cityListDefault);
    this.max_price = 1;
    this.min_price = 0;
    this.min_price_inventory = 0;
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
  onCityChecked(city: any, i: any) {
    if (city.isChecked) city.isChecked = false;
    else city.isChecked = true;
    this.cityListDefault[i] = city;
    this.cityListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
    this.cityList.next(this.cityListDefault);
    this.selectedCity = this.cityListDefault
      .filter((item) => item.isChecked)
      .map((i) => i.sgid);
    this.getProducts();
  }
  onCityUnchecked(city: any){
    if(city.isChecked) city.isChecked = false;  else city.isChecked = true;
    let i = this.cityListDefault.findIndex(item => item.sgid == city.sgid);
    this.cityListDefault[i] = city;
    this.cityListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
    this.cityList.next(this.cityListDefault);
    this.selectedCity = this.cityListDefault.filter((item) => item.isChecked).map((i)=> i.sgid);
    this.getProducts();
  }

  onCatUnchecked(cat: any) {
    if(cat.isChecked) cat.isChecked = false;  else cat.isChecked = true;
    let i = this.catListDefault.findIndex(item => item.sgid == cat.sgid);
    this.catListDefault[i] = cat;
    this.catListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
    this.categoriesList.next(this.catListDefault);
    this.getProducts(); 
  }

  onCategoriesChecked(cat: any, i: any) {
    if (cat.isChecked) cat.isChecked = false;
    else cat.isChecked = true;
    this.catListDefault[i] = cat;
    this.catListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
    this.categoriesList.next(this.catListDefault);
    this.getProducts();
  }
  onPriceRemove(){
    this.min_price = 0;
    this.max_price = 0;
  }
  onMinPriceRangeChange(ev: any){
    this.min_price= ev;
    this.getProducts();
  }
  onMaxPriceRangeChange(ev: any) {
    this.max_price = ev;
    this.getProducts();
  }
  onQtyChange(ev: any) {
    this.min_price_inventory = ev;
    this.getProducts();
  }
  ngOnInit(): void {
    this.getProducts();
    this.getCity();
    this.getCategory();
    this._scrollService.onScroll.pipe(debounceTime(500)).subscribe((data) => {
      if (!data) return;
      this.lLimit = this.hLimit;
      this.hLimit = this.hLimit + 6;
      this.getProducts();
    });
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
  getProducts() {
    this.selectedCategory = this.catListDefault.filter((item) => item.isChecked).map((i)=> i);
    this.selectedCity = this.cityListDefault.filter((item) => item.isChecked).map((i)=> i);
    let catIds = this.catListDefault.filter((item) => item.isChecked).map((i)=> i.sgid).toString();
    let cityIds = this.cityListDefault.filter((item) => item.isChecked).map((i)=> i.sgid).toString();
    this._shopService
      .getProducts({
        start: this.lLimit,
        count: this.hLimit,
        category: catIds,
        warehouse: cityIds,
        min_price: this.min_price,
        max_price: this.max_price,
        min_price_inventory: this.min_price_inventory,
      })
      .subscribe(
        (data) => {
          this.productList = this.productList.concat(data.result);
        },
        (error) => {
          this.productList = this.productList.concat([]);
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
}
