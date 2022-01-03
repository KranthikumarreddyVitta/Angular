import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreAppService } from './cre-app.service';

@Component({
  selector: 'lib-credit-app',
  templateUrl: './credit-app.component.html',
  styleUrls: ['./credit-app.component.scss'],
})
export class CreditAppComponent implements OnInit {
  sections: Array<any> = [
    {
      label: 'Company & Ownership Information',
      isChecked: false,
    },
    {
      label: 'Business & Property Information',
      isChecked: false,
    },
    {
      label: 'Documentation',
      isChecked: false,
    },
    {
      label: 'Guarantor Information',
      isChecked: false,
    },
    {
      label: 'Payment Authorization',
      isChecked: false,
    },
    {
      label: 'Terms and Conditions',
      isChecked: false,
    },
  ];
  appData: { [key: string]: any } | null = null;
  firstFormGroup = new FormGroup({});
  secondFormGroup = new FormGroup({})
  constructor(private _creAppService: CreAppService) {}

  ngOnInit(): void {
    this.getApplicationData();

  }

  getApplicationData() {
    this._creAppService.getApplicationData().subscribe((data) => {
      if (data.statusCode == 200) {
        this.appData = data;
      }
    });
  }
}
