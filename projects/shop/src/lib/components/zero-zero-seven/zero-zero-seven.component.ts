import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoodboardService } from 'projects/moodboard/src/lib/services/moodboard.service';

@Component({
  selector: 'lib-zero-zero-seven',
  templateUrl: './zero-zero-seven.component.html',
  styleUrls: ['./zero-zero-seven.component.scss']
})
export class ZeroZeroSevenComponent implements OnInit {
  productId: number = NaN;
  warehouseId: number = NaN;
  sgId: number = NaN;
  availQty: number = NaN;
  productDetails: any; 
  constructor( private _moodboardService: MoodboardService,
    private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe((data) => {
      this.productId = data.productId;
      this.warehouseId = data.warehouseId;
      this.sgId = data.sgid;
      this.getProduct(this.productId, this.warehouseId);
    });

  }
  viewProduct(){
    this._router.navigate([
      'item',
      this.productId,
      this.warehouseId,
      this.sgId
    ]);

  }

  sumTotal(totData: any) {
    let invTotal: number;
    invTotal = 0;
    totData.forEach((tot: any) => {
      if(tot.non_assigned_inv !== null) {
        invTotal += parseInt( tot.non_assigned_inv)
      }
    });
    
    return invTotal;
  }
  
  sumSUpplierTotal(sData: any) {
    let supTotal: number;
    supTotal = 0;
    sData.forEach((stot: any) => {
      if(stot.supplier_quantity !== null) {
        supTotal += parseInt( stot.supplier_quantity)
      }
    });

    return supTotal;
  }
  getProduct(pid: any, wid: any) {
    this._moodboardService
      .getProductDetails(pid, wid)
      .subscribe((response: any) => {
        this.productDetails =response.result;
        // this logic is because at some point warehouse_location_new is empty in variations so checking if empty pull qty from next variation
        this.productDetails?.variations?.forEach((element: any) => {
          if(element.warehouse_location_new.length > 0) {
            this.availQty = parseInt(element.warehouse_location_new[0].sum_inhabitr_quantity) + parseInt(element.warehouse_location_new[0].sum_supplier_quantity)
          } else {
            this.availQty = 0;
          }
        });
      });

  }

}
