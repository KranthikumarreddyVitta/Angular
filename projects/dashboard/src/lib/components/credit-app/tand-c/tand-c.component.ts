import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoreService, ToasterService, UserService } from 'projects/core/src/public-api';
import { CreAppService } from '../cre-app.service';

@Component({
  selector: 'lib-tand-c',
  templateUrl: './tand-c.component.html',
  styleUrls: ['./tand-c.component.scss']
})
export class TAndCComponent implements OnInit {

  formGroup = new FormGroup({});
  stateList: Array<any> = [];
  @Input() companyInfo: { [key: string]: any } | null = null;

  constructor(
    private fb: FormBuilder,
    private _creAppService: CreAppService,
    private _toaster: ToasterService,
    private _coreService: CoreService,
    private _user: UserService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      term_signature:[,[Validators.required]],
      term_sign_name:[,[Validators.required]],
      term_sign_title:[,[Validators.required]],
      term_sign_date:[,[Validators.required]],
      term_ap_signature:[,[Validators.required]],
      term_ap_sign_name:[,[Validators.required]],
      term_ap_sign_title:[,[Validators.required]],
      term_ap_sign_date:[,[Validators.required]]
    });
  }

  submit() {
    let obj = this.formGroup.value;
    obj.section = 'term_condition_info';
    obj.user_sgid = this._user.getUser().getId();
    this._creAppService.saveApplicationData(obj).subscribe((data) => {
      if (data.statusCode == 200) {
        this._toaster.success(data.message);
      } else {
        this._toaster.success(data.message);
      }
    });
  }

  compareWith(o1: any, o2: any) {
    return o1.sgid == o2.sgid;
  }
}
