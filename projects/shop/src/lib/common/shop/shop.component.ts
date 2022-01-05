import {
  ChangeDetectorRef,
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
import { CoreService, ScrollService } from 'projects/core/src/public-api';
import { MoodboardService } from 'projects/moodboard/src/lib/services/moodboard.service';
import {
  combineLatest,
  forkJoin,
  merge,
  of,
  Subject,
  Subscription,
  zip,
} from 'rxjs';
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
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { promise } from 'protractor';

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

  @Output() productClick: EventEmitter<any> = new EventEmitter();

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
  daterange =  new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  })

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
  defaultFilters: any = null;
  @ViewChild(InfiniteScrollDirective)
  infiniteScroll: InfiniteScrollDirective | null = null;
  constructor(
    private _shopService: ShopService,
    private moodboardService: MoodboardService,
    private _dialog: MatDialog,
    private _router: Router,
    private route: ActivatedRoute,
    private _coreService: CoreService,
    private _cd:ChangeDetectorRef
  ) {
    this.selectedIndex = 0;
  }
  ngOnInit(): void {
    this.route?.queryParams.subscribe((route) => {
      this.searchKeywords = route?.keywords;
      this._coreService.loadUserPreference().subscribe((data) => {
        this.defaultFilters = data.result;
        this.max_price = this.defaultFilters?.max_price ?? '';
        this.min_price = this.defaultFilters?.min_price ?? '';
        this.maxRentalPrice = this.defaultFilters?.rental_max_price ?? '';
        this.minRentalPrice = this.defaultFilters?.rental_min_price ?? '';
        this.min_price_inventory =
          this.defaultFilters?.min_price_inventory ?? '';
        zip(this.getCategory(), this.getCity()).subscribe((data) => {
          this.getProducts();
        });
      });
    });

    this.filterFormGroup.addControl('minRentalPrice', new FormControl());
    this.filterFormGroup.addControl('maxRentalPrice', new FormControl());
    this.filterFormGroup.addControl('minPrice', new FormControl());
    this.filterFormGroup.addControl('maxPrice', new FormControl());
    this.filterFormGroup.addControl('qty', new FormControl());

  }

  get controls() {
    return this.filterFormGroup.controls
  }

  validateErrors() {
    if ((+this.min_price || +this.min_price == 0) && this.max_price != '' && this.min_price != '') {
      if (+this.min_price > +this.max_price) {
        this.filterFormGroup.setErrors({ buyPrice: true })
      }
      else {
        this.filterFormGroup.setErrors(null)
        this.validateRent()
      }
    }
    else if ((+this.max_price || +this.max_price == 0) && this.min_price != '' && this.max_price != '') {
      if (+this.max_price < +this.min_price) {
        this.filterFormGroup.setErrors({ buyPrice: true })
      }
      else {
        this.filterFormGroup.setErrors(null)
        this.validateRent()
      }
    }
   
  }

  validateRent(){
    if ((+this.minRentalPrice || +this.minRentalPrice == 0) && this.maxRentalPrice != '' && this.minRentalPrice != '') {
      if (+this.minRentalPrice > +this.maxRentalPrice) {
        this.filterFormGroup.setErrors({ rentalPrice: true })
      }
      else {
        this.filterFormGroup.setErrors(null)
        this.validateErrors()
      }
    }
    else if ((+this.maxRentalPrice || +this.maxRentalPrice == 0) && this.minRentalPrice != ''  && this.maxRentalPrice != '') {
      if (+this.maxRentalPrice < +this.minRentalPrice) {
        this.filterFormGroup.setErrors({ rentalPrice: true })
      }
      else {
        this.filterFormGroup.setErrors(null)
        this.validateErrors()
      }
    }
  }

  getUserPreference() {
    this._coreService.loadUserPreference().subscribe((data) => {
      this.defaultFilters = data;
      this.getCity();
    });
  }

  public goto(index: number): void {
    if (index == 0) return; // First step is not selected anymore -ok
    this.selectedIndex = index;
  }

  resetFilter() {
    this._shopService.resetFilters().subscribe((data) => {
      if (data.statusCode == 200) {
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
        this.min_price = '';
        this.max_price = '';
        this.minRentalPrice = '';
        this.maxRentalPrice = '';
        this.min_price_inventory = '';
        this.resetList();
        this.daterange?.reset();
        this.getProducts();
      }
    });
  }

  getCategory() {
    return new Promise((res, rej) => {
      this.moodboardService
        .getCategoryList()
        .pipe(
          map((item: any) => {
            item.result.map((i: any, index: any) => {
              i['isChecked'] = this.defaultFilters?.category
                ?.split(',')
                .includes(i.sgid + '');
              i['order'] = index;
              return i;
            });
            return item;
          })
        )
        .subscribe(
          (response: any) => {
            this.categoriesList.next(response.result);
            this.catListDefault = response.result;
            this.selectedCategory = this.catListDefault.filter(
              (item) => item.isChecked
            );
            res(1);
          },
          (error) => {
            rej(0);
          }
        );
    });
  }
  getCity() {
    return new Promise((res, rej) => {
      this.moodboardService
        .getCityList()
        .pipe(
          map((item: any) => {
            item.data.map((i: any, index: any) => {
              i['isChecked'] = this.defaultFilters?.warehouse
                ?.split(',')
                .includes(i.sgid + '');
              i['order'] = index;
              return i;
            });
            return item;
          })
        )
        .subscribe(
          (response: any) => {
            this.cityList.next(response.data);
            this.cityListDefault = response.data;
            this.selectedCity = this.cityListDefault.filter(
              (item) => item.isChecked
            );
            res(1);
          },
          (error) => {
            rej(0);
          }
        );
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
    this.min_price = '';
    this.max_price = '';
    this.resetList();
    this.getProducts();
  }
  onRentalPriceRemove() {
    this.minRentalPrice = '';
    this.maxRentalPrice = '';
    this.resetList();
    this.getProducts();
  }
  onDateRangeRemove() {
    this.daterange?.reset();
    this.getProducts()
  }

  dateRangeSelection() {
    if (this.daterange?.get('start')?.value &&
      this.daterange?.get('end')?.value) {
      this.resetList();
      this.getProducts();
    }
  }

  // price range
  onMinPriceRangeChange(ev: any) {
    this.min_price = ev;
    this.validateErrors();
  }
  onMaxPriceRangeChange(ev: any) {
    this.max_price = ev;
    this.validateErrors();
  }
  // rental price range
  onMinRentalPriceRangeChange(ev: any) {
    this.minRentalPrice = ev;
    this.validateRent();
  }
  onMaxRentalPriceRangeChange(ev: any) {
    this.maxRentalPrice = ev;
    this.validateRent();
  }
  onQtyChange(ev: any) {
    this.min_price_inventory = ev;
  }

  ngAfterViewInit() {
    if (this.source == 'SHOP') {
      this.openModal(this.template);
    }
    this.infiniteScroll?.scrolled
      .pipe(debounceTime(2000), distinctUntilChanged())
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
        tap((data ) => {
          if (data) {
            this.isLoading = true;
            this.resetList();
          }
        }),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((data) => {
        if (data && this.filterFormGroup.valid) {
          this.resetList();
          this.getProducts();
        }
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
    this.show = true;
    this.closeModal();
    this.getProducts();
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
    if (this.daterange?.get('start')?.value &&
      this.daterange?.get('end')?.value) {
      param['preferred_delivery_start_date'] = this.getFormattedDate(this.daterange?.get('start')?.value);
      param['preferred_delivery_end_date'] = this.getFormattedDate(this.daterange?.get('end')?.value);
    }
    this._shopService.getProducts(param).subscribe(
      (data) => {
        this.isLoading = false;
        if (data && data.result && data.result.length >= 0) {
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

  getFormattedDate(val: Date) {
    return `${val.getFullYear()}-${val.getMonth() + 1}-${val.getDate()}`
  }

  itemClick(product: any) {
    this.productClick.emit(product);
    if (this.source == 'SHOP') {
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
