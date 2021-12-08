import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollService } from 'projects/core/src/public-api';
import { MoodboardService } from 'projects/moodboard/src/lib/services/moodboard.service';
import { combineLatest, merge, of, Subject, Subscription, zip } from 'rxjs';
import {
  concatAll,
  debounceTime,
  distinctUntilChanged,
  map,
  mergeAll,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';
import { ShopService } from '../../service/shop.service';
import { AfterViewInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { FormControl, FormGroup } from '@angular/forms';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'lib-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit, AfterViewInit {
  @Input() source: 'SHOP' | 'MD' = 'SHOP';
  @Input() lLimit = 0;
  @Input() hLimit = 12;
  @Input() searchPlaceholder = 'Search Products';

  @Output() productClick: EventEmitter<any>  = new EventEmitter()

  productList: Array<any> = [];
  selectedCategory: Array<any> = [];
  selectedCity: Array<any> = [];

  subscription: Subscription | null = null;
  categoriesList: Subject<any[]> = new Subject();
  catListDefault: any[] = [];
  cityList: Subject<any[]> = new Subject();
  cityListDefault: any[] = [];
  
  min_price: any = '';
  max_price: any = '';
  minRentalPrice: any = '';
  maxRentalPrice: any = '';

  // filter form group;
  filterFormGroup: FormGroup = new FormGroup({});
  min_price_inventory: any = '';
  startCount = 0;
  selectedIndex = 0;
  show = false;
  isLoading = false;

  @ViewChild('quickFilter', { static: true }) template: ElementRef | null =
    null;
  @ViewChild('stepper') private myStepper: MatStepper | null = null;
  searchKeywords: any = '';
  oldSearchKeyword: any = '';

  @ViewChild(InfiniteScrollDirective)
  infiniteScroll: InfiniteScrollDirective | null = null;
  constructor(
    private _shopService: ShopService,
    private moodboardService: MoodboardService,
    private _dialog: MatDialog,
    private _router: Router,
    private route: ActivatedRoute
  ) {
    this.selectedIndex = 0;
  }
  ngOnInit(): void {
    this.route?.queryParams?.subscribe((res) => {
      this.searchKeywords = res?.keywords;
      this.lLimit = 0;
      this.productList = [];
      this.getProducts();
    });
    this.getCity();
    this.getCategory();
    this.filterFormGroup.addControl('minRentalPrice', new FormControl());
    this.filterFormGroup.addControl('maxRentalPrice', new FormControl());
    this.filterFormGroup.addControl('minPrice', new FormControl());
    this.filterFormGroup.addControl('maxPrice', new FormControl());
    this.filterFormGroup.addControl('qty', new FormControl());
  }

  public goto(index: number): void {
    if (index == 0) return; // First step is not selected anymore -ok
    this.selectedIndex = index;
  }

  resetFilter() {
    //refresh list
    this.cityListDefault.map((el) => (el.isChecked = false));
    this.cityListDefault.sort((a, b) =>
      a.warehouse_name > b.warehouse_name ? 1 : -1
    );
    this.catListDefault.map((el) => (el.isChecked = false));
    this.catListDefault.sort((a, b) => (a.name > b.name ? 1 : -1));

    this.categoriesList.next(this.catListDefault);
    this.cityList.next(this.cityListDefault);

    // refresh selected
    this.selectedCategory = this.catListDefault.filter((x) => x.isChecked);
    this.selectedCity = this.cityListDefault.filter((x) => x.isChecked);

    // reset default value
    this.min_price = 0;
    this.max_price = 0;
    this.minRentalPrice = 0;
    this.maxRentalPrice = 0;
    this.min_price_inventory = 0;
    this.resetList();
    this.getProducts();
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
        //   this.catListPopup = response.result;
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
        // this.cityListPopup = response.data;
      });
  }

  // checked
  onCityChecked(city: any, i: any) {
    city.isChecked = !city.isChecked;
    this.cityListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
    this.cityList.next(this.cityListDefault);
    this.selectedCity = this.cityListDefault.filter((item) => item.isChecked);
    this.resetList();
    this.getProducts();
  }

  onCategoriesChecked(cat: any, i: any) {
    cat.isChecked = !cat.isChecked;
    this.catListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
    this.categoriesList.next(this.catListDefault);
    this.selectedCategory = this.catListDefault.filter((x) => x.isChecked);
    this.resetList();
    this.getProducts();
  }
  // unchecked.
  onCityUnchecked(city: any) {
    city.isChecked = false;
    this.cityListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
    this.cityList.next(this.cityListDefault);
    this.selectedCity = this.cityListDefault.filter((item) => item.isChecked);
    this.resetList();
    this.getProducts();
  }

  onCatUnchecked(cat: any) {
    cat.isChecked = false;
    this.catListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
    this.categoriesList.next(this.catListDefault);
    this.selectedCategory = this.catListDefault.filter((x) => x.isChecked);
    this.resetList();
    this.getProducts();
  }

  // remove
  onPriceRemove() {
    this.min_price = 0;
    this.max_price = 0;
    this.resetList();
    this.getProducts();
  }
  onRentalPriceRemove() {
    this.minRentalPrice = 0;
    this.maxRentalPrice = 0;
    this.resetList();
    this.getProducts();
  }

  // price range
  onMinPriceRangeChange(ev: any) {
    this.min_price = ev;
  }
  onMaxPriceRangeChange(ev: any) {
    this.max_price = ev;
  }
  // rental price range
  onMinRentalPriceRangeChange(ev: any) {
    this.minRentalPrice = ev;
  }
  onMaxRentalPriceRangeChange(ev: any) {
    this.maxRentalPrice = ev;
  }
  onQtyChange(ev: any) {
    this.min_price_inventory = ev;
  }

  ngAfterViewInit() {
    if (this.source == 'SHOP') {
      this.openModal(this.template);
    }
    this.infiniteScroll?.scrolled
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((resp) => {
        this.infiniteScroll?.ngOnDestroy();
        this.infiniteScroll?.setup();
        this.getProducts(true);
      });
    let sub = of(
      this.filterFormGroup.controls['minRentalPrice'].valueChanges,
      this.filterFormGroup.controls['maxRentalPrice'].valueChanges,
      this.filterFormGroup.controls['minPrice'].valueChanges,
      this.filterFormGroup.controls['maxPrice'].valueChanges,
      this.filterFormGroup.controls['qty'].valueChanges
    );
    sub
      .pipe(mergeAll())
      .pipe(
        tap(() => {
          this.isLoading = true;
          this.resetList();
        }),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((data) => {
        this.getProducts();
      });
  }
  openModal(templateRef: any) {
    let dialogRef = this._dialog.open(templateRef, {
      width: '90%',
      maxHeight: '95vh',
      panelClass: 'shop-dialog',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.selectedIndex = 0;
    });
  }
  closeModal() {
    this._dialog.closeAll();
  }
  filterProductPopup() {
    let catIds = this.catListDefault
      .filter((item) => item.isChecked)
      .map((i) => i.sgid)
      .toString();
    let cityIds = this.cityListDefault
      .filter((item) => item.isChecked)
      .map((i) => i.sgid)
      .toString();

    this.show = true;
    this.closeModal();
    this.resetList();
    let param: any = {
      start: this.lLimit,
      count: this.hLimit,
      category: catIds,
      warehouse: cityIds,
    };
    if (this.min_price != '') param['min_price'] = this.min_price;
    if (this.max_price != '') param['max_price'] = this.max_price;
    if (this.minRentalPrice != '')
      param['rental_min_price'] = this.minRentalPrice;
    if (this.maxRentalPrice != '')
      param['rental_max_price'] = this.maxRentalPrice;
    if (this.min_price_inventory != '')
      param['min_price_inventory'] = this.min_price_inventory;

    this._shopService.getProducts(param).subscribe(
      (data) => {
        this.productList = data.result;
      },
      (error) => {
        this.productList = [];
      }
    );
  }
  getProducts(scroll?: boolean) {
    this.isLoading = true;
    let catIds = this.catListDefault
      .filter((item) => item.isChecked)
      .map((i) => i.sgid)
      .toString();
    let cityIds = this.cityListDefault
      .filter((item) => item.isChecked)
      .map((i) => i.sgid)
      .toString();
    let param: any = {
      start: this.lLimit,
      count: this.hLimit,
      category: catIds,
      warehouse: cityIds,
      keywords: this.searchKeywords,
    };
    if (this.min_price != '') param['min_price'] = this.min_price;
    if (this.max_price != '') param['max_price'] = this.max_price;
    if (this.minRentalPrice != '')
      param['rental_min_price'] = this.minRentalPrice;
    if (this.maxRentalPrice != '')
      param['rental_max_price'] = this.maxRentalPrice;

    if (this.min_price_inventory != '')
      param['min_price_inventory'] = this.min_price_inventory;
    this._shopService.getProducts(param).subscribe(
      (data) => {
        this.isLoading = false;
        if (data && data.result && data.result.length) {
          if (scroll) {
            this.productList.push(...data.result);
          } else {
            this.productList = data.result;
          }
          this.lLimit += this.hLimit;
        }
      },
      (error) => {
        this.productList = [];
      }
    );
  }

  itemClick(product: any) {
    this.productClick.emit(product);
    if(this.source == 'SHOP'){
      this._router.navigate([
        'shop',
        product.product_id,
        product.warehouse_id,
        product.sku_variation_id,
      ]);
    }
  }

  search(input: string) {
    this.searchKeywords = input ?? null;
    this.resetList();
    this.getProducts();
  }

  resetList() {
    this.productList = [];
    this.startCount = 0;
    this.lLimit = 0;
  }
  
}
