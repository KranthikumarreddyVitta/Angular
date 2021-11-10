import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { QuoteService } from './../../../quote.service';

@Component({
  selector: 'lib-add-fp',
  templateUrl: './add-fp.component.html',
  styleUrls: ['./add-fp.component.scss'],
})
export class AddFPComponent implements OnInit {
  quoteId = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private _user: UserService,
    private _quoteService: QuoteService,
    private _toaster: ToasterService,
    private _dialogRef: MatDialogRef<AddFPComponent>,
  ) {}
  selectedFloorPlan = '';
  floorPlanTypes: Array<any> = [
    {
      name: 'Studio',
      sgid: 1,
    },
    {
      name: '1 Bedroom',
      sgid: 2,
    },
    {
      name: '2 Bedroom',
      sgid: 3,
    },
    {
      name: '3 Bedroom',
      sgid: 4,
    },
    {
      name: '4 Bedroom',
      sgid: 5,
    },
    {
      name: '5 Bedroom',
      sgid: 6,
    },
    {
      name: '6 Bedroom',
      sgid: 7,
    },
    {
      name: '7 Bedroom',
      sgid: 8,
    },
    {
      name: '8 Bedroom',
      sgid: 9,
    },
    {
      name: '9 Bedroom',
      sgid: 10,
    },
    {
      name: '10 Bedroom',
      sgid: 11,
    },
  ];
  floorPlanFormGroup = new FormGroup({});
  ngOnInit(): void {
    this.quoteId = this.dialogData.quoteId;
    this.floorPlanFormGroup.addControl(
      'floorplan_name',
      new FormControl('', [Validators.required])
    );
    this.floorPlanFormGroup.addControl(
      'floorplan_type_id',
      new FormControl('', [Validators.required])
    );
    this.floorPlanFormGroup.addControl(
      'units',
      new FormControl('', [Validators.required])
    );
  }

  onSubmit() {
    let obj = this.floorPlanFormGroup.value;
    obj.quote_id = this.quoteId;
    obj.userid = this._user.getUser().getId();
    this._quoteService.createFloorPlan(obj).subscribe((resp) => {
      if (resp.statusCode == 200) {
        this._toaster.success(resp.message);
        this._dialogRef.close(1);
      } else {
        this._toaster.success(resp.message);
        this._dialogRef.close(0);
      }
    });
  }
}
