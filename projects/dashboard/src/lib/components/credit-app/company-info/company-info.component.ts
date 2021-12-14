import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'lib-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
})
export class CompanyInfoComponent implements OnInit {
  formGroup = new FormGroup({});
  stateList: Array<any> = [];
  @Input() legalName: string = '';
  @Input() aliasLegalName = '';
  @Input() streetAdd = '';
  @Input() state = '';
  @Input() zip = '';
  @Input() phone = '';
  @Input() city = '';
  @Input() website = '';
  @Input() regState = '';
  @Input() eiNumber = '';
  @Input() dAndB = '';
  @Input() bbbRegistered = '';
  @Input() typesOfBus = '';
  @Input() busYear = '';
  @Input() ceoName = '';
  @Input() cfoName = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      legal_name: [this.legalName, Validators.required],
      alias_legal_name: [this.aliasLegalName, Validators.required],
      street_address: [this.streetAdd, Validators.required],
      state: [this.state, Validators.required],
      zip: [this.zip, Validators.required],
      phone: [this.phone, Validators.required],
      city: [this.city, Validators.required],
      website: [this.website, Validators.required],
      reg_state: [this.regState, Validators.required],
      ein: [this.eiNumber, Validators.required],
      d_and_b: [this.dAndB, Validators.required],
      bbb_registered: [this.bbbRegistered, Validators.required],
      types_of_business: [this.typesOfBus, Validators.required],
      business_year: [this.busYear, Validators.required],
      ceo_name: [this.ceoName, Validators.required],
      cfo_name: [this.cfoName, Validators.required],
    });
  }

  submit() {
    console.log(this.formGroup.value);
  }
}
