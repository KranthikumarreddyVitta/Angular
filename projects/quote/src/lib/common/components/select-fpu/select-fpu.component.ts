import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { QuoteService } from '../../../quote.service';
import { AddFPUComponent } from '../add-fpu/add-fpu.component';
import { AddProductService } from '../addproduct/add-product.service';
import { SelectFpComponent } from '../select-fp/select-fp.component';

@Component({
  selector: 'lib-select-fpu',
  templateUrl: './select-fpu.component.html',
  styleUrls: ['./select-fpu.component.scss']
})
export class SelectFpuComponent implements OnInit {
  selectedFpid: any = '';
  isSelectedAll: any = true;
  fpuList: any = [];

  constructor( 
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private _user: UserService,
    private _quoteService: QuoteService,
    private _toaster: ToasterService,
    private _dialogRef: MatDialogRef<SelectFpComponent>,
    private _addProductService: AddProductService) { }

  ngOnInit(): void {
    let obj= {
      quote_id: this.dialogData.qid,
    };
    this._quoteService.getFpuWithoutFP(obj).subscribe((resp:any ) => {
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
  onCancel(){
    this._dialogRef.close(0);
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
    if(this.dialogData.product_id != ''){
      let obj = {
        quote_id: this.dialogData.qid,
        user_id: this._user.getUser().getId(),
        units : unitList,
        product_id: this.dialogData.product_id,
        sku:this.dialogData.sku,
        quantity: this.dialogData.quantity,
        button_type: this.dialogData.button_type,
        month: this.dialogData.months,
        warehouse_id: this.dialogData.warehouse_id,
      };

      this._quoteService.addFPUQuote(obj).subscribe((resp: any) => {
        if (resp.statusCode == 200) {
          this._toaster.success(resp.message);
          this._dialogRef.close(1);
        } else {
          this._toaster.success(resp.message);
          this._dialogRef.close(0);
        }
      });
    } else {
      let obj = {
        quote_id: this.dialogData.qid,
        moodboard_id: this.dialogData.mid,
        user_id: this._user.getUser().getId(),
        units : unitList
      };

      this._quoteService.addFPUMB(obj).subscribe((resp: any) => {
        if (resp.statusCode == 200) {
          this._toaster.success(resp.message);
          this._dialogRef.close(1);
          this._dialogRef.close({ event : "success"});
        } else {
          this._toaster.success(resp.message);
          this._dialogRef.close(0);
        }
      });
    }   
  }
  onCreateNewFPU() {
    this._dialog
    .open(AddFPUComponent, {
      height: '70%',
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
}
