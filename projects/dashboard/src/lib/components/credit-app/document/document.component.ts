import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { CreAppService } from '../cre-app.service';

@Component({
  selector: 'lib-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
})
export class DocumentComponent implements OnInit {
  formGroup: FormGroup = {} as FormGroup;
  @Input() docInfo: { [key: string]: any } | null = null;

  constructor(
    private fb: FormBuilder,
    private creAppService: CreAppService,
    private _toaster: ToasterService
  ) {}
  list: Array<any> = [
    {
      name: 'Business Credit Report for your business (if available) or sign appendix 1 to allow us to pull a credit report for your business',
      value: 'OPT0',
    },
    {
      name: 'Past 2 years P&L ',
      value: 'OPT1',
    },
    {
      name: 'Past 2 years Balance Sheet',
      value: 'OPT2',
    },
    {
      name: 'Full contract with Property Management or Building Owner for each project',
      value: 'OPT3',
    },
    {
      name: 'Leadership Bios or Linkedin of Key officers',
      value: 'OPT4',
    },
    {
      name: 'Forecast of the projects in pipeline and links or any details for the',
      value: 'OPT5',
    },
    {
      name: 'Building / Properties',
      value: 'OPT6',
    },
  ];
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      OPT0: false,
      OPT1: false,
      OPT2: false,
      OPT3: false,
      OPT4: false,
      OPT5: false,
      OPT6: false,
      ...this.docInfo,
    });
  }

  submit() {
    let obj = {
      section: 'document_info',
      document_required: this.formGroup.value,
    };
    this.creAppService.saveApplicationData(obj).subscribe((data) => {
      if (data.statusCode == 200) {
        this._toaster.success(data.message);
      } else {
        this._toaster.success(data.message);
      }
    });
  }
}
