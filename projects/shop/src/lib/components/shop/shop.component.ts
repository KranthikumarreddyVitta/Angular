import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'projects/core/src/public-api';
import { debounceTime } from 'rxjs/operators';
import { ShopService } from '../../service/shop.service';

@Component({
  selector: 'lib-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  productList: Array<any> = [];
  selectedCategory = [];
  selectedSupplier = [];
  selectedWarehouse = [];
  private lLimit = 0;
  private hLimit = 6;
  constructor(
    private _shopService: ShopService,
    private _scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this._scrollService.onScroll.pipe(debounceTime(500)).subscribe((data) => {
      if (!data) return;
      this.lLimit = this.hLimit;
      this.hLimit = this.hLimit + 6;
      this.getProducts();
    });
  }

  getProducts() {
    this._shopService
      .getProducts({
        start: this.lLimit,
        count: this.hLimit,
        category: this.selectedCategory.toString(),
        supplier: this.selectedSupplier.toString(),
        warehouse: this.selectedWarehouse.toString(),
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
}
