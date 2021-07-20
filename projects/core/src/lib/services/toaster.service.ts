import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";


export interface IToasterOptions {
  horizontalPosition : MatSnackBarHorizontalPosition,
  verticalPosition : MatSnackBarVerticalPosition
}

@Injectable({
  providedIn: 'root'
})
export class ToasterService {


  constructor(private _snackBar : MatSnackBar) { }

  success(msg: string,options: IToasterOptions){
    this._snackBar.open(msg,'',options)
  }
  info(msg: string,options: IToasterOptions){
    this._snackBar.open(msg,'',options)
  }

  warning(msg: string,options: IToasterOptions){
    this._snackBar.open(msg,'',options)
  }

  error(msg: string,options: IToasterOptions){
    this._snackBar.open(msg,'',options)
  }
}
