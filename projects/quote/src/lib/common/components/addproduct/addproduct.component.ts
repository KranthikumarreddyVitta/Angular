import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddFPComponent } from '../add-fp/add-fp.component';
import { AddFPUComponent } from '../add-fpu/add-fpu.component';

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

  ) { }

  ngOnInit(): void {
  }
  add(type: any){
    this.dialogData = type;
    if(type == 'fp') {
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
    if(type == 'fpu') {
      this._dialog
      .open(AddFPUComponent, {
        height: '80%',
        width: '50%',
        data: {
          isDialog: true,
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
