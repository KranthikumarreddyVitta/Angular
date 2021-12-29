import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CoreService, ToasterService } from 'projects/core/src/public-api';
import { CreAppService } from '../cre-app.service';

@Component({
  selector: 'lib-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
})
export class CompanyInfoComponent implements OnInit {
  formGroup = new FormGroup({});
  stateList: Array<any> = [];
  @Input() companyInfo: { [key: string]: any } | null = null;

  constructor(
    private fb: FormBuilder,
    private _creAppService: CreAppService,
    private _toaster: ToasterService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      legal_name: [this.companyInfo?.legal_name, Validators.required],
      alias_legal_name: [
        this.companyInfo?.alias_legal_name,
        Validators.required,
      ],
      street_address: [this.companyInfo?.street_address, Validators.required],
      state: [this.companyInfo?.state, Validators.required],
      zip: [this.companyInfo?.zip, Validators.required],
      phone: [
        this.companyInfo?.phone,
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      city: [this.companyInfo?.city, Validators.required],
      website: [this.companyInfo?.website, Validators.required],
      reg_state: [this.companyInfo?.reg_state, Validators.required],
      ein: [this.companyInfo?.ein, Validators.required],
      d_and_b: [this.companyInfo?.d_and_b, Validators.required],
      bbb_registered: [this.companyInfo?.bbb_registered, Validators.required],
      types_of_business: [
        this.companyInfo?.types_of_business,
        Validators.required,
      ],
      business_year: [this.companyInfo?.business_year, Validators.required],
      ceo_name: [this.companyInfo?.ceo_name],
      cfo_name: [this.companyInfo?.cfo_name],
    });
  }

  submit() {
    let obj = this.formGroup.value;
    obj.section = 'company_info';
    this._creAppService.saveApplicationData(obj).subscribe((data) => {
      if (data.statusCode == 200) {
        this._toaster.success(data.message);
      } else {
        this._toaster.success(data.message);
      }
    });
  }
}
