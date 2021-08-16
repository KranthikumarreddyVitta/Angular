import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export interface IToasterOptions extends MatSnackBarConfig {
  horizontalPosition?: MatSnackBarHorizontalPosition;
  verticalPosition?: MatSnackBarVerticalPosition;
}

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private _snackBar: MatSnackBar) {}

  /**
   * Success toaster
   * @param msg
   * @param options
   */
  success(msg: string, options?: IToasterOptions) {
    this._snackBar.open(msg, '', options);
  }

  /**
   * Information toaster
   * @param msg
   * @param options
   */
  info(msg: string, options?: IToasterOptions) {
    this._snackBar.open(msg, '', options);
  }

  /**
   * warning toaster
   * @param msg
   * @param options
   */
  warning(msg: string, options?: IToasterOptions) {
    this._snackBar.open(msg, '', options);
  }

  /**
   * Error toaster
   * @param msg
   * @param options
   */
  error(msg: string, options?: IToasterOptions) {
    this._snackBar.open(msg, '', options);
  }
}
