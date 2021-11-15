import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { QuoteService } from 'projects/quote/src/public-api';
import { QuoteHeaderService } from '../quote-header/quote-header.service';
import { SelectFpComponent } from '../select-fp/select-fp.component';
import { SelectFpuComponent } from '../select-fpu/select-fpu.component';

@Component({
  selector: 'lib-add-moodboard-quote',
  templateUrl: './add-moodboard-quote.component.html',
  styleUrls: ['./add-moodboard-quote.component.scss']
})
export class AddMoodboardQuoteComponent implements OnInit {

  moodboardList: any;
  selectedMoodboard: any = ''

  constructor(private _quoteHeaderService: QuoteHeaderService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private _user: UserService, private _quoteService: QuoteService,
    private _toaster: ToasterService,
    private _dialogRef: MatDialog,
    public dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
    this.getMoodBoards();
  }

  getMoodBoards() {
    this._quoteHeaderService.getMoodBoardByUser().subscribe(
      (data: any) => {
        this.moodboardList = data.result;
      },
      (error) => {
        this.moodboardList = [];
      }
    );
  }

  add(type: any) {
    if (type == '') {
      let obj = {
        quote_id: this.dialogData.quoteId,
        moodboard_id: this.selectedMoodboard,
        user_id: this._user.getUser().getId()
      };
      this._quoteService.addQuoteMoodboard(obj).subscribe((resp: any) => {
        if (resp.statusCode == 200) {
          this._toaster.success(resp.message);
          this.dialogRef.close({ event: 'defaultunit' });
        } else {
          this._toaster.success(resp.message);
          this._dialogRef.closeAll();
        }
      });
    }
    if (type == 'fp') {
      this._dialogRef
        .open(SelectFpComponent, {
          height: '70%',
          width: '70%',
          data: {
            isDialog: true,
            qid: this.dialogData.quoteId,
            mid: this.selectedMoodboard
          },
        })
        .afterClosed()
        .subscribe((data) => {
          console.log(data);
          if (data && data.event == 'success') {
            this.dialogRef.close({ event: 'floorPlan' });
          }
        });
    }
    if (type == 'fpu') {
      this._dialogRef
        .open(SelectFpuComponent, {
          height: '80%',
          width: '50%',
          data: {
            isDialog: true,
            qid: this.dialogData.quoteId,
            mid: this.selectedMoodboard
          },
        })
        .afterClosed()
        .subscribe((data) => {
          console.log(data);
          if (data && data.event == 'success') {
            this.dialogRef.close({ event: 'floorPlanUnit' });
          }

        });
    }

  }

  closeModal() {
    this._dialogRef.closeAll()
  }
}
