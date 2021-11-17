import { identifierModuleUrl } from '@angular/compiler';
import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { QuoteService } from '../../../quote.service';

@Component({
  selector: 'lib-moodboard',
  templateUrl: './moodboard.component.html',
  styleUrls: ['./moodboard.component.scss'],
})
export class MoodboardComponent implements OnInit {
  @Input() fpId = '';
  @Input() quoteId = '';
  mbList: any = [];
  selectedFpid: any = '';
  selectedMBId = '';
  isSelectedAll: any = true;
  fpuList: any = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public _dialogRef: MatDialogRef<MoodboardComponent>,
    private _quoteService: QuoteService,
    private _toaster: ToasterService
  ) {
    this.fpId = dialogData?.fpId ?? '';
    this.quoteId = dialogData?.quoteId ?? '';
  }

  ngOnInit(): void {
    this.getMoodboardList();
  }
  getMoodboardList() {
    this._quoteService.getMoodboard(this.fpId, this.quoteId).subscribe(
      (resp: any) => {
        this.mbList = resp.floorplans;
      },
      (error) => {
        this.mbList = [];
        this._toaster.error('Something went wrong!');
      }
    );
  }
  selectUnitsForPlans(unit: any) {
    if (unit.isActive) {
      let checker = 0;
      this.fpuList.forEach((elem: any) => {
        if (elem.isActive) {
          checker++;
        }
      });
      if (checker > 1) {
        unit.isActive = false;
      } else {
      }
    } else {
      unit.isActive = true;
    }
  }
  isAllUnit(bool: any) {
    if (bool) {
      this.isSelectedAll = true;
      this.fpuList.forEach((elem: any) => {
        elem.isActive = true;
      });
    } else {
      this.isSelectedAll = false;
    }
  }
  getFPU(ev: any) {
    this.selectedMBId = ev.target.value;
    let obj = {
      floorplan_id: this.fpId,
      quote_id: this.quoteId,
      mid: ev.target.value,
    };
    this._quoteService.getFpus(obj).subscribe(
      (resp: any) => {
        this.fpuList = resp.result;
        this.isAllUnit(1);
      },
      (error) => {
        this.fpuList = [];
        this._toaster.error('Something went wrong!');
      }
    );
  }
  add() {
    let obj = {
      quote_id: this.quoteId,
      moodboard_id: this.selectedMBId,
      floorplan_id: this.fpId,
      units: this.fpuList
        .filter((x: any) => x.isActive)
        .map((x: any) => x.sgid),
    };

    this._quoteService.addFPMB(obj).subscribe((resp: any) => {
      if (resp.statusCode == 200) {
        this._toaster.success(resp.message);
        this._dialogRef.close(1);
      } else {
        this._toaster.success(resp.message);
        this._dialogRef.close(0);
      }
    },error=> {
      this._toaster.success(error.message);
    });
  }
}
