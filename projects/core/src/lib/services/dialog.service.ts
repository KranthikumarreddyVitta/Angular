import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../components/dialog/confirmation-dialog/confirmation-dialog.component';

interface Config extends MatDialogConfig {
  title: string;
  suTitle: string;
}

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private _matDialog: MatDialog) {}
  openConformationDialog(
    config: Config
  ): MatDialogRef<ConfirmationDialogComponent> {
    return this._matDialog.open(ConfirmationDialogComponent, {
      data: {
        title: config.title,
        subTitle: config.suTitle ?? '',
      },
      width: config.width,
    });
  }
}
