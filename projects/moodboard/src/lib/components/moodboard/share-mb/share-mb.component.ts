import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToasterService } from 'projects/core/src/public-api';
import { MoodboardService } from '../../../services/moodboard.service';

@Component({
  selector: 'lib-share-mb',
  templateUrl: './share-mb.component.html',
  styleUrls: ['./share-mb.component.scss'],
})
export class ShareMBComponent implements OnInit {
  emailAdd = '';
  constructor(
    private _moodboardService: MoodboardService,
    private _toaster: ToasterService,
    public _dialogRef: MatDialogRef<ShareMBComponent>
  ) {}

  ngOnInit(): void {}

  close() {
    this._dialogRef.close(false);
  }

  submit() {
    this._moodboardService
      .shareMoodboard(this.emailAdd)
      .subscribe((resp: any) => {
        this._toaster.success(resp.message);
        if (resp.statusCode == 200) {
          this._dialogRef.close(true);
        } else {
          this._dialogRef.close(false);
        }
      });
  }
}
