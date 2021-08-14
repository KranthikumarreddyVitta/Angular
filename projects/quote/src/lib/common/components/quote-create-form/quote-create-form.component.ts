import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'projects/core/src/lib/services/toaster.service';
import { CoreService } from 'projects/core/src/public-api';

@Component({
  selector: 'lib-quote-create-form',
  templateUrl: './quote-create-form.component.html',
  styleUrls: ['./quote-create-form.component.scss'],
})
export class QuoteCreateFormComponent implements OnInit {
  @Input() quoteNumber: string = '';
  @Input() phone: string = '';
  @Input() customerName = '';
  @Input() address = '';
  @Input() email = '';
  @Input() stateId : number= NaN;
  @Input() companyName = '';
  @Input() city = '';
  @Input() projectName = '';
  @Input() zipCode = '';
  @Input() submitButtonText = 'CREATE';

  @Output() onCancel = new EventEmitter();
  @Output() onSubmit = new EventEmitter();
  stateList: Array<any> = ['A', 'B'];

  quoteFromGroup: FormGroup = new FormGroup({});

  constructor(
    private _coreService: CoreService,
    private _router: Router,
    private _toaster: ToasterService
  ) {
    let stateObject = _router.getCurrentNavigation()?.extras.state;
    this.quoteNumber = stateObject?.quoteNumber;
    this.phone = stateObject?.phone;
    this.customerName = stateObject?.customerName;
    this.address = stateObject?.address;
    this.email = stateObject?.email;
    this.stateId = stateObject?.state;
    this.companyName = stateObject?.companyName;
    this.city = stateObject?.city;
    this.projectName = stateObject?.projectName;
    this.zipCode = stateObject?.zipCode;
  }

  ngOnInit(): void {
    if (this.quoteNumber) {
      this.quoteFromGroup.addControl(
        'quote_id',
        new FormControl(this.quoteNumber, Validators.required)
      );
    }

    this.quoteFromGroup.addControl(
      'contact_no',
      new FormControl(this.phone, [Validators.required,Validators.pattern('^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$')])
    );
    this.quoteFromGroup.addControl(
      'name',
      new FormControl(this.customerName, Validators.required)
    );
    this.quoteFromGroup.addControl(
      'address',
      new FormControl(this.address, Validators.required)
    );
    this.quoteFromGroup.addControl(
      'email',
      new FormControl(this.email, [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
    );
    this.quoteFromGroup.addControl(
      'state_id',
      new FormControl(this.stateId, [Validators.required])
    );
    this.quoteFromGroup.addControl(
      'companyName',
      new FormControl(this.companyName, Validators.required)
    );
    this.quoteFromGroup.addControl(
      'city',
      new FormControl(this.city, Validators.required)
    );
    this.quoteFromGroup.addControl(
      'project_name',
      new FormControl(this.projectName, Validators.required)
    );
    this.quoteFromGroup.addControl(
      'zipcode',
      new FormControl(this.zipCode, [Validators.required,Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')])
    );
    this.getStateList();
  }

  getStateList() {
    this._coreService.getStateList().subscribe((data) => {
      this.stateList = data;
    });
  }

  cancel() {
    this.onCancel.emit();
  }

  submit() {
    this._coreService.validateZipCode(this.city, this.stateId, this.zipCode).subscribe(data=>{
      if(data){
        this.onSubmit.emit(this.quoteFromGroup);
      }
    },error=>{
      this._toaster.warning('Invalid Zip code');
    })
  }
}
