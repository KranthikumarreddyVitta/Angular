import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService, CoreService } from 'projects/core/src/public-api';
import { CreAppService } from '../cre-app.service';

@Component({
  selector: 'lib-guarantor-info',
  templateUrl: './guarantor-info.component.html',
  styleUrls: ['./guarantor-info.component.scss'],
})
export class GuarantorInfoComponent implements OnInit {
  formGroup = new FormGroup({});
  @Input() info: { [key: string]: any } | null = null;
  constructor(
    private fb: FormBuilder,
    private _creAppService: CreAppService,
    private _toaster: ToasterService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      guarantor_legal_name: [
        this.info?.guarantor_legal_name,
        Validators.required,
      ],
      guarantor_home_address: [
        this.info?.guarantor_home_address,
        Validators.required,
      ],
      guarantor_city: [this.info?.guarantor_city, Validators.required],
      guarantor_state: [this.info?.guarantor_state, Validators.required],
      guarantor_zip: [this.info?.guarantor_zip, Validators.required],
      guarantor_phone: [this.info?.guarantor_phone, Validators.required],
      guarantor_email: [this.info?.guarantor_email, Validators.required],
      guarantor_signature: [
        this.info?.guarantor_signature,
        Validators.required,
      ],
      guarantor_sign_name: [
        this.info?.guarantor_sign_name,
        Validators.required,
      ],
      guarantor_sign_date: [
        this.info?.guarantor_sign_date,
        Validators.required,
      ],
    });
  }

  submit() {
    let obj = {
      section: 'guarantor_info',
      ...this.formGroup.value,
    };
    this._creAppService.saveApplicationData(obj).subscribe((data) => {
      if (data.statusCode == 200) {
        this._toaster.success(data.message);
      } else {
        this._toaster.success(data.message);
      }
    });
  }
}
