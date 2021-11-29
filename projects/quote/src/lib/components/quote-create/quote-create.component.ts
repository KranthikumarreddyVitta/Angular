import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'projects/core/src/lib/services/toaster.service';
import { UserService } from 'projects/core/src/public-api';
import {
  QuoteCreateFormComponent,
  QuoteFormType,
} from '../../common/components/quote-create-form/quote-create-form.component';
import { QuoteCreateService } from './quote-create.service';

@Component({
  selector: 'lib-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.scss'],
})
export class QuoteCreateComponent implements OnInit {
  customerName: string = '';
  subTitle =
    'Get an estimated cost for a particular moodboard, piece or project.';
  submitButtonText = 'CREATE';
  type: QuoteFormType = 'CREATE';

  @ViewChild('quoteFormComp') quoteFormComp: QuoteCreateFormComponent =
    {} as QuoteCreateFormComponent;
  constructor(private _router: Router, private _toaster: ToasterService, private _location: Location) {
    let stateObject = _router.getCurrentNavigation()?.extras.state;
    this.customerName = stateObject?.customerName;
  }

  ngOnInit(): void {
    if (!this.customerName) {
      this._router.navigate(['quote/create']);
    }
    if (this._router.url.includes('copy')) {
      this.type = 'COPY';
      this.subTitle = 'Copying Quote named -';
    } else if (this._router.url.includes('edit')) {
      this.subTitle = 'Editing Quote named -';
      this.type = 'EDIT';
      this.submitButtonText = 'UPDATE';
    }
  }

  onSubmit(quote: any) {
    this._toaster.success('Quote Created');
    if(this.type == 'COPY') this._location.back();
    this._router.navigate(['quote', quote.sgid],{state:{initDialog:true}});
  }

  onCancel() {
    // this._location.back();
  }
}
