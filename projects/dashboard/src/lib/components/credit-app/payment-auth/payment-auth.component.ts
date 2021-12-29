import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CoreService, ToasterService, UserService } from 'projects/core/src/public-api';
import { CreAppService } from '../cre-app.service';

@Component({
  selector: 'lib-payment-auth',
  templateUrl: './payment-auth.component.html',
  styleUrls: ['./payment-auth.component.scss']
})
export class PaymentAuthComponent implements OnInit {
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
      payment_card_type: [],
      payment_company_card_no: [],
      payment_name_on_card:[],
      payment_billing_address:[],
      expiry_date:[],
      payment_state:[],
      payment_zipcode:[],
      payment_bank_acc_no:[],
      payment_name_of_bank:[],
      payment_aba_routing_no:[],
      payment_type_of_account:[],
      payment_signature:[,[Validators.required]],
      payment_sign_name:[,[Validators.required]],
      payment_sign_date:[,[Validators.required]]
    });
  }

  submit() {
    let obj = this.formGroup.value;
    obj.user_sgid = this._user.getUser().getId();
    obj.section = 'payment_info';
    this._creAppService.saveApplicationData([obj]).subscribe((data) => {
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
