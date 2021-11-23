import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { QuoteService } from './../../../quote.service';
import { AddFPComponent } from '../add-fp/add-fp.component';
import { AddProductService } from '../addproduct/add-product.service';

@Component({
  selector: 'lib-select-fp',
  templateUrl: './select-fp.component.html',
  styleUrls: ['./select-fp.component.scss']
})
export class SelectFpComponent implements OnInit {
  fplist : any = [];
  fpuList: any = [];
  selectedFpid: any = '';
  isSelectedAll: any = true;
  constructor( 
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private _user: UserService,
    private _quoteService: QuoteService,
    private _toaster: ToasterService,
    private _dialogRef: MatDialogRef<SelectFpComponent>,
    private _addProductService: AddProductService) { }

  ngOnInit(): void {
    this.getFpList()
  }

  getFpList() {
    this._addProductService.getFPList(this.dialogData.qid).subscribe(
      (data) => {
        this.fplist = data.result;
      },
      (error) => {
        this._toaster.error(error);
      }
    );
  }
  onCancel(){
    this._dialogRef.close(0);
  }
  getFpu(ev: any){
    this.selectedFpid = ev.target.value;
    let obj= {
      quote_id: this.dialogData.qid,
      floorplan_id: this.selectedFpid
    };
    this._quoteService.getFpus(obj).subscribe((resp:any ) => {
      if (resp.statusCode == 200) {
        this.fpuList = resp.result;
        this.fpuList.forEach((elem: any, index: any) => {
          elem.isActive = true;
        });
        // this._toaster.success(resp.message);
       // this._dialogRef.close(1);
      } else {
       // this._toaster.success(resp.message);
       // this._dialogRef.close(0);
      }
    });

  }
  selectUnitsForPlans(unit: any) {
    if (unit.isActive) {
      let checker = 0;
      this.fpuList.forEach((elem: any) => {
        if (elem.isActive) {
          checker++;
        }
      });
      if (checker > 1) {
        unit.isActive = false;
      } else {
      }

    } else {
      unit.isActive = true;
    }
  }
  isAllUnit(bool: any) {
    if (bool) {
      this.isSelectedAll = true;
      this.fpuList.forEach((elem: any) => {
        elem.isActive = true;

      });
    } else {
      this.isSelectedAll = false;
    }
  }
  onCreateNewFP(){
    this._dialog
    .open(AddFPComponent, {
      height: '70%',
      width: '70%',
      data: {
        isDialog: true,
        quoteId: this.dialogData.qid,
      },
    })
    .afterClosed()
    .subscribe((data) => {
      console.log(data);
      if(data && data.event) {
        this.getFpList()
      }
      
    });

  }
  onSubmit(){
    let unitList: any = [];
    if(this.isSelectedAll == true){
      this.fpuList.forEach((element: any) => {
        unitList.push(element.sgid);
      });
    } else {
      this.fpuList.forEach((element: any) => {
        if(element.isActive == false) unitList.push(element.sgid);
      });
    }
    if(this.dialogData.product_id){
      let obj = {
        quote_id: this.dialogData.qid,
        floorplan_id: this.selectedFpid,
        user_id: this._user.getUser().getId(),
        units : unitList,
        product_id: this.dialogData.product_id,
        sku:this.dialogData.sku,
        quantity: this.dialogData.quantity,
        button_type: this.dialogData.button_type,
        month: this.dialogData.month,
        warehouse_id: this.dialogData.warehouse_id,
      };
      this._quoteService.addFPQuote(obj).subscribe((resp: any) => {
        if (resp.statusCode == 200) {
          this._toaster.success(resp.result);
          this._dialogRef.close({ event : "success"});
        } else {
          this._toaster.success(resp.result);
          this._dialogRef.close(0);
        }
      });
    } else {

      let obj = {
        quote_id: this.dialogData.qid,
        moodboard_id: this.dialogData.mid,
        user_id: this._user.getUser().getId(),
        floorplan_id : this.selectedFpid,
        units : unitList
        };
        this._quoteService.addFPMB(obj).subscribe((resp: any) => {
          if (resp.statusCode == 200) {
            this._toaster.success(resp.result);
            this._dialogRef.close(1);
          } else {
            this._toaster.success(resp.result);
            this._dialogRef.close(0);
          }
        });    
      }  
   }
}
