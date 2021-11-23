import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { QuoteService } from '../../../quote.service';
import { AddFPUComponent } from '../add-fpu/add-fpu.component';
import { SelectFpComponent } from '../select-fp/select-fp.component';
import { SelectFpuComponent } from '../select-fpu/select-fpu.component';

@Component({
  selector: 'lib-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public _dialogRef: MatDialogRef<AddproductComponent>,
    private _dialog: MatDialog,
    private _user: UserService,
    private _quoteService: QuoteService,
    private _toaster: ToasterService
  ) { }

  ngOnInit(): void {
  }
  add(type: any){
    if(type == '') {
      if(this.dialogData.product_id) {
        let obj = {
          quote_id: this.dialogData.quoteId,
          product_id: this.dialogData.product_id,
          sku:this.dialogData.sku,
          quantity: this.dialogData.quantity,
          button_type: this.dialogData.button_type,
          month: this.dialogData.months,
          warehouse_id: this.dialogData.warehouse_id,
          user_id: this.dialogData.user_id,
          floorplan_id:null,
          units:null,
          moodboard_id:null,
        };
        this._quoteService.addProductQuote(obj).subscribe((resp: any) => {
          if (resp.statusCode == 200) {
            this._toaster.success(resp.message);
            this._dialogRef.close(1);
          } else {
            this._toaster.success(resp.message);
            this._dialogRef.close(0);
          }
        });  

       } else {
        let obj =  {
          quote_id :this.dialogData.quoteId,
          moodboard_id: this.dialogData.mbid,
          user_id: this._user.getUser().getId()
          };
          this._quoteService.addMBQuote(obj).subscribe((resp: any) => {
            if (resp.statusCode == 200) {
              this._toaster.success(resp.message);
              this._dialogRef.close(1);
            } else {
              this._toaster.success(resp.message);
              this._dialogRef.close(0);
            }
          });  
      }
     
    }
    if(type == 'fp') {
      this._dialog
      .open(SelectFpComponent, {
        height: '70%',
        width: '70%',
        data: {
          isDialog: true,
          qid: this.dialogData.quoteId,
          mid: this.dialogData.mbid,
          product_id: this.dialogData.product_id,
          sku:this.dialogData.sku,
          quantity: this.dialogData.quantity,
          button_type: this.dialogData.button_type,
          month: this.dialogData.months,
          warehouse_id: this.dialogData.warehouse_id,
          user_id: this.dialogData.user_id,
        }

      })
      .afterClosed()
      .subscribe((data) => {
        console.log(data);
      });
    }
    if(type == 'fpu') {
      this._dialog
      .open(SelectFpuComponent, {
        height: '80%',
        width: '50%',
        data: {
          isDialog: true,
          qid: this.dialogData.quoteId,
          mid: this.dialogData.mbid,
          product_id: this.dialogData.product_id,
          sku:this.dialogData.sku,
          quantity: this.dialogData.quantity,
          button_type: this.dialogData.button_type,
          month: this.dialogData.months,
          warehouse_id: this.dialogData.warehouse_id,
          user_id: this.dialogData.user_id,

        },
      })
      .afterClosed()
      .subscribe((data) => {
        console.log(data);
      });
    }
    this._dialogRef.close();
  }

}
