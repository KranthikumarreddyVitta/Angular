import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteCreateFormComponent } from 'projects/quote/src/lib/common/components/quote-create-form/quote-create-form.component';
import { MoodboardService } from '../../services/moodboard.service';

@Component({
  selector: 'lib-moodboard',
  templateUrl: './moodboard.component.html',
  styleUrls: ['./moodboard.component.scss']
})
export class MoodboardComponent implements OnInit {
  public mbId: any = '';
  constructor(
    private moodboardService:MoodboardService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private _router: Router,
    private _dialog: MatDialog
    ) { 
     this.mbId = this.activatedRoute.snapshot.paramMap.get('id');
  }
  bannerIconImg: any = 'assets/moodboard/images/mb.png';
  bannerIconImgTxt: any = 'Moodboard';
  moodboardDetails: any = '';
  mbQuotesList: any = [];
  stateList: any = [];
  categoriesList: any = [];
  cityList: any = [];
  selectedCity: any = null;
  selectedCategory: any = null;
  min_price: number = 0;
  max_price: number = 0;
  min_price_inventory: any = 0;
  searchTxt: any = null;
  items: any = [];
  catagorydata = [{
    imageSrc: 'assets/moodboard/images/Categories-01.png',
    value: 'Living Room',
  },
  {
    imageSrc: 'assets/moodboard/images/Categories-02.png',
    value: 'Bedroom',
  },
  {
    imageSrc: 'assets/moodboard/images/Categories-03.png',
    value: 'Dining Room',
  },
  {
    imageSrc: 'assets/moodboard/images/Categories-04.png',
    value: 'Office',
  },
  {
    imageSrc: 'assets/moodboard/images/Categories-05.png',
    value: 'Outdoor',
  },
  {
    imageSrc: 'assets/moodboard/images/Categories-06.png',
    value: 'Others',
  }
]
  ngOnInit(): void {
    this.getMoodboard();
    this.getCity();
    this.getCategory();
    this.getItems();
    this.getMBQuote(this.mbId);
  }
  getMBQuote(mbId: any){
    this.moodboardService.getMBQuote(mbId).subscribe((response:any) => {
      this.mbQuotesList = response.quote;
    })
  }
  getMoodboard(){
    this.moodboardService.getMoodBoard(this.mbId).subscribe((response:any) => {
      this.moodboardDetails = response;
    });    
  }
  getCategory(){
    this.moodboardService.getCategoryList().subscribe((response:any) => {
      this.categoriesList = response.result;
    });    
  }
  getCity(){
    this.moodboardService.getCityList().subscribe((response:any) => {
      this.cityList = response.data;
    });    
  }
  getItems(start: number = 0, count: number =12, category: any =null, supplier: any =null, warehouse: any =null, max_price: any = 0, min_price: any = 0, min_price_inventory: any = 0, searchTxt: any = null){ 
    let param = {
      start: start,
      count:count,
      category: category,
      supplier:supplier,
      warehouse:warehouse,
      min_price:min_price,
      max_price: max_price,
      min_price_inventory:min_price_inventory,
      keywords: searchTxt
    }
    this.moodboardService.getItems(param).subscribe((response:any) => {
      this.items = response.result;
    });    
  }
  editMB(){
    this.router.navigateByUrl('/moodboard/edit/'+this.mbId);
  }
  copyMB(){
    this.router.navigateByUrl('/moodboard/create/'+this.mbId);
  }
  onCityChange(ev: any){
    this.selectedCity = ev;
    this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
  }
  onCategoriesChange(ev: any){
    this.selectedCategory = ev;
    this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
  }
  onMinPriceRangeChange(ev: any){
    this.min_price= ev;
    this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
  }
  onMaxPriceRangeChange(ev: any){
    this.max_price = ev;
    this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
  }
  onQtyChange(ev: any){
    this.min_price_inventory = ev;
    this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
  }
  search(ev: any){
    this.searchTxt = ev;
    this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);    
  }
  createNewQuote(){
      this._dialog.open(QuoteCreateFormComponent,
        {
          height:"500px", 
          width:"800px",
          data:{
            isDialog: true
          }
      }).afterClosed().subscribe(data=> {
        console.log(data);
      })
  }
}
