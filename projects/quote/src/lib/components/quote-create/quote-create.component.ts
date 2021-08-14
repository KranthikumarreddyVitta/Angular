import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'projects/core/src/lib/services/toaster.service';
import { UserService } from 'projects/core/src/public-api';
import { QuoteCreateFormComponent } from '../../common/components/quote-create-form/quote-create-form.component';
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

  @ViewChild('quoteFormComp') quoteFormComp: QuoteCreateFormComponent =
    {} as QuoteCreateFormComponent;
  constructor(
    private _router: Router,
    private _quoteCreateService: QuoteCreateService,
    private _user: UserService,
    private _location: Location,
    private _toaster: ToasterService
  ) {
    let stateObject = _router.getCurrentNavigation()?.extras.state;
    this.customerName = stateObject?.customerName;
  }

  ngOnInit(): void {
    if (!this.customerName) {
      this._router.navigate(['quote/create']);
    }
    if (this._router.url.includes('copy')) {
      this.subTitle = 'Copying Quote named -';
    } else if (this._router.url.includes('edit')) {
      this.subTitle = 'Editing Quote named -';
      this.submitButtonText = 'UPDATE';
    }
  }

  private getParams(form: FormGroup) {
    let obj = form.value;
    obj.user_id = this._user.getUser().getId();
    obj.userid = this._user.getUser().getId();
    return obj;
  }

  private onSuccess() {
    this._toaster.success('Quote Created');
    this._router.navigate(['quote']);
  }

  private onError() {
    this._toaster.error('Fail');
  }

  onSubmit(evt: FormGroup) {
    let params = this.getParams(evt);
    if (this._router.url.includes('copy')) {
      this._quoteCreateService
        .copyQuote(JSON.stringify(params))
        .subscribe(this.onSuccess, this.onError);
    } else if (this._router.url.includes('edit')) {
      this._quoteCreateService
        .editQuote(JSON.stringify(params))
        .subscribe(this.onSuccess, this.onError);
    } else {
      this._quoteCreateService
        .createQuote(JSON.stringify(params))
        .subscribe(this.onSuccess, this.onError);
    }
  }

  onCancel() {
    this._location.back();
  }
}
