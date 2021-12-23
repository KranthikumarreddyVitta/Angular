import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService, CoreService } from 'projects/core/src/public-api';
import { CreAppService } from '../cre-app.service';

@Component({
  selector: 'lib-property-info',
  templateUrl: './property-info.component.html',
  styleUrls: ['./property-info.component.scss'],
})
export class PropertyInfoComponent implements OnInit {
  formGroup = new FormGroup({});
  @Input() data: { [key: string]: any } | null = null;
  constructor(
    private fb: FormBuilder,
    private _creAppService: CreAppService,
    private _toaster: ToasterService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      property_business_info: [
        this.data?.property_business_info,
        Validators.required,
      ],
      property_name: [this.data?.property_name, Validators.required],
      property_website_name: [
        this.data?.property_website_name,
        Validators.required,
      ],
      property_street_address: [
        this.data?.property_street_address,
        Validators.required,
      ],
      property_state: [this.data?.property_state, Validators.required],
      property_zip: [this.data?.property_zip, [Validators.required]],
      property_phone: [
        this.data?.property_phone,
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      property_reg_state: [
        this.data?.property_reg_state,
        Validators.required,
      ],
      property_manager: [
        this.data?.property_manager,
        Validators.required,
      ],
    });
  }

  submit() {
    let obj = {
      section: 'business_info',
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
