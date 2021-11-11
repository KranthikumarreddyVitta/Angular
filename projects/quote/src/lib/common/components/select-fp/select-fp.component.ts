import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { QuoteService } from 'projects/quote/src/public-api';
import { AddFPComponent } from '../add-fp/add-fp.component';
import { AddProductService } from '../addproduct/add-product.service';

@Component({
  selector: 'lib-select-fp',
  templateUrl: './select-fp.component.html',
  styleUrls: ['./select-fp.component.scss']
})
export class SelectFpComponent implements OnInit {
  fplist : any = [];

  constructor( 
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private _user: UserService,
    private _quoteService: QuoteService,
    private _toaster: ToasterService,
    private _dialogRef: MatDialogRef<SelectFpComponent>,
    private _addProductService: AddProductService) { }

  ngOnInit(): void {
    this._addProductService.getFPList(209).subscribe(
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
    let fpid = ev.target.value;
    this._quoteService.getFpu(fpid).subscribe((resp:any ) => {
      if (resp.statusCode == 200) {
        this._toaster.success(resp.message);
        this._dialogRef.close(1);
      } else {
        this._toaster.success(resp.message);
        this._dialogRef.close(0);
      }
    });

  }
  onCreateNewFP(){
    this._dialog
    .open(AddFPComponent, {
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
  onSubmit(){
    // {
    //   "quote_id":224,
    //   "moodboard_id":122,
    //   "user_id":98
    //   }
    // this._quoteService.createFloorPlan(obj).subscribe((resp) => {
    //   if (resp.statusCode == 200) {
    //     this._toaster.success(resp.message);
    //     this._dialogRef.close(1);
    //   } else {
    //     this._toaster.success(resp.message);
    //     this._dialogRef.close(0);
    //   }
    // });    
  }
}
