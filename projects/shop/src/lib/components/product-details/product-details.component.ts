import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoodboardService } from 'projects/moodboard/src/lib/services/moodboard.service';
import {
  CoreService,
  CounterComponent,
  ImageRendererComponent,
  UserService,
  ToasterService
} from 'projects/core/src/public-api';

@Component({
  selector: 'lib-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productdetails: any;
  panelOpenState: any = false;
  activeIndex: any; 
  totalQty: any;
  monthNums: any = 12;
  rentalPrice: any; 
  counter: any = 0;
  userId: any = null;
  constructor(private _dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data: any,
   private userService: UserService,  
   private _toaster: ToasterService,
  private moodboardService:MoodboardService) {
    console.log(data);
    this.userId= this.userService.getUser().getId();
  }
  ngOnInit(): void {
    this.getProduct(this.data.item.product_id, this.data.item.warehouse_id, this.data.item.sku_variation_id);
  }
  addtoMoodboard(btnType: any){
    if (this.userId === this.data.mb.userid) {
      let param = { 
        mood_board_id: this.data.mb.id, 
        product_ids : [this.data.item.product_id], 
        user_id: this.userId,
        sku: this.data.item.sku_variation_id,
        product_id: this.data.item.product_id,
        button_type: btnType, 
        quantity: this.counter, 
        month: this.data.item.month, 
        warehouse_id: this.data.item.warehouse_id 
      }
      this.moodboardService.addMBItem(param).subscribe((resp: any) =>{
        this._toaster.success('Request Successful!!' );
        this.closeModal();
      },error=>{
        this._toaster.error('Request failed. please try later');
      });
    } 
  }
  increment(): void {
    if(this.counter+1 > this.data?.item?.supplier_quantity){
      return;
    }
    this.counter++;
  }
  decrement(): void {
    if(this.counter -1< 0){
      return;
    }
    this.counter--;
   
  }
  updateRent(event: any) {
    console.log(event);
    var actualMonths = 36
    var userSelectedMonths = event.target.value
    var selectedMonths = actualMonths - userSelectedMonths;
    this.monthNums = userSelectedMonths
    this.productdetails?.variations[this.activeIndex]?.default_price.forEach((prices: any, index: any) => {
      if(selectedMonths == index){
        this.rentalPrice = prices.rental_price;
      }
      
    });
  }
  closeModal(){
    this._dialog.closeAll();
  };
  getProduct(pid: any, wid: any, skuId: any){
    this.moodboardService.getProductDetails(pid, wid).subscribe((response:any) => {
      this.productdetails = response.result;
      this.activeIndex = response.result.variations.findIndex((item: any) => item.sgid == skuId );
      this.totalQty = 0;
      this.rentalPrice = this.productdetails?.variations[this.activeIndex]?.default_price[24]?.rental_price;
      this.productdetails?.variations[this.activeIndex]?.warehouse_location_new.forEach((value: any, index: any) => {
        this.totalQty += value.total_warehouse_quantity;
      });

    });  
  }
}
