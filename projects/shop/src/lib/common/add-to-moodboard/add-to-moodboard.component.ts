import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ToasterService } from 'projects/core/src/public-api';
import { CreateMoodboardPopupComponent } from 'projects/moodboard/src/lib/components/create-moodboard-popup/create-moodboard-popup.component';
import { MoodboardService } from 'projects/moodboard/src/lib/services/moodboard.service';
import { ShopService } from '../../service/shop.service';

@Component({
  selector: 'lib-add-to-moodboard',
  templateUrl: './add-to-moodboard.component.html',
  styleUrls: ['./add-to-moodboard.component.scss'],
})
export class AddToMoodboardComponent implements OnInit {
  moodboardList: Array<any> = [];
  selectedMoodboard = '';
  constructor(
    private _moodboardService: MoodboardService,
    private _dialog: MatDialog,
    private _shopService: ShopService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private _toaster: ToasterService,
    public _dialogRef: MatDialogRef<AddToMoodboardComponent>
  ) {}

  ngOnInit(): void {
    this.getMyMoodboards();
  }
  addItemToMoodboard() {
    this._shopService
      .addItemToMoodboard({
        ...this.dialogData,
        mood_board_id: this.selectedMoodboard,
      })
      .subscribe(
        (data) => {
          this._toaster.success('Item added to Moodboard');
          this._dialogRef.close(true);
        },
        (error) => this._toaster.error('Fail to add')
      );
  }

  createNewMB() {
    this._dialog
      .open(CreateMoodboardPopupComponent, {
        height: '80%',
        width: '70%',
        data: {
          isDialog: true,
        },
      })
      .afterClosed()
      .subscribe((data) => {
        this.getMyMoodboards();
        //this._dialogRef.close(data);
      });
  }

  getMyMoodboards() {
    this._moodboardService.getMyMoodBoardList().subscribe(
      (data: any) => {
        this.moodboardList = data?.result;
        // if (this.data?.moodboardId) {
        //   this.selectedMoodboard = this.data.moodboardId;
        // } else if (data?.result?.length > 0) {
        //   this.selectedMoodboard = data?.result[0].id;
        // }
      },
      (error) => (this.moodboardList = [])
    );
  }
}
