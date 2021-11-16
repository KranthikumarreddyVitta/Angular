import { identifierModuleUrl } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { QuoteService } from '../../../quote.service';

@Component({
  selector: 'lib-moodboard',
  templateUrl: './moodboard.component.html',
  styleUrls: ['./moodboard.component.scss']
})
export class MoodboardComponent implements OnInit {
  mbList: any = [];
  selectedFpid: any = '';
  isSelectedAll: any = true;
  fpuList: any = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public _dialogRef: MatDialogRef<MoodboardComponent>,
    private _dialog: MatDialog,
    private _user: UserService,
    private _quoteService: QuoteService,
    private _toaster: ToasterService
  ) { }

  ngOnInit(): void {
    this.getMB();
  }
  getMB(){
    let obj = {
      floorplan_id: '209',
      quote_id:'189'
    };

    this._quoteService.getMoodboard(268,235).subscribe((resp: any) => {
        this.mbList = resp.floorplans;
    },error=> {
      this._toaster.error('Something went wrong!');
    });  
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
  getFPU(ev: any){
    let obj = {
      floorplan_id: '268',
      quote_id:'235',
      mid: ev.target.value
    };
    this._quoteService.getFpus(obj).subscribe((resp: any) => {
        this.fpuList = resp.result;
        this.isAllUnit(1);
     },error=> {
      this._toaster.error('Something went wrong!');
    });
  }
  add(){}
}
