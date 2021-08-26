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
  private defaultOptions: IToasterOptions = {
    duration: 500,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  };
  constructor(private _snackBar: MatSnackBar) {}

  /**
   * Success toaster
   * @param msg
   * @param options
   */
  success(msg: string, options?: IToasterOptions) {
    this._snackBar.open(msg, '', {
      ...options,
      ...this.defaultOptions,
    });
  }

  /**
   * Information toaster
   * @param msg
   * @param options
   */
  info(msg: string, options?: IToasterOptions) {
    this._snackBar.open(msg, '', { ...options, ...this.defaultOptions });
  }

  /**
   * warning toaster
   * @param msg
   * @param options
   */
  warning(msg: string, options?: IToasterOptions) {
    this._snackBar.open(msg, '', { ...options, ...this.defaultOptions });
  }

  /**
   * Error toaster
   * @param msg
   * @param options
   */
  error(msg: string, options?: IToasterOptions) {
    this._snackBar.open(msg, '', { ...options, ...this.defaultOptions });
  }
}
