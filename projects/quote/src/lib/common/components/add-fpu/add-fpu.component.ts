import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService, ToasterService } from 'projects/core/src/public-api';
import { QuoteService } from '../../../quote.service';
import { AddFPComponent } from '../add-fp/add-fp.component';

@Component({
  selector: 'lib-add-fpu',
  templateUrl: './add-fpu.component.html',
  styleUrls: ['./add-fpu.component.scss'],
})
export class AddFPUComponent implements OnInit {
  fpuFormGroup = new FormGroup({});
  quoteId = '';
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
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private _user: UserService,
    private _quoteService: QuoteService,
    private _toaster: ToasterService,
    private _dialogRef: MatDialogRef<AddFPComponent>
  ) {}

  ngOnInit(): void {
    this.quoteId = this.dialogData.quoteId;
    this.fpuFormGroup.addControl(
      'units',
      new FormControl('', [Validators.required])
    );
    this.fpuFormGroup.addControl('floorplan_name', new FormControl(''));
    this.fpuFormGroup.addControl('floorplan_type_id', new FormControl(''));
  }

  onSubmit() {
    let obj = this.fpuFormGroup.value;
    obj.quote_id = this.quoteId;
    obj.userid = this._user.getUser().getId();
    this._quoteService.addOptionalUnits(obj).subscribe((resp) => {
      if (resp.statusCode) {
        this._toaster.success(resp.message);
        this._dialogRef.close(1)
      } else {
        this._toaster.error(resp.message);
        this._dialogRef.close(0)
      }
    });
  }
}
