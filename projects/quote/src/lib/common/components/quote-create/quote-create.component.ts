import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { CoreService } from 'projects/core/src/public-api';

@Component({
  selector: 'lib-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.scss'],
})
export class QuoteCreateComponent implements OnInit {
  @Input() quoteNumber: string = '';
  @Input() phone: string = '';
  @Input() customerName = '';
  @Input() address = '';
  @Input() email = '';
  @Input() state = '';
  @Input() companyName = '';
  @Input() city = '';
  @Input() projectName = '';
  @Input() zipCode = '';

  stateList : Array<any>= ['A',"B"]

  quoteFromGroup: FormGroup = new FormGroup({});

  constructor(private _coreService : CoreService,private _location: Location) {}

  ngOnInit(): void {
    this.quoteFromGroup.addControl(
      'quoteNumber',
      new FormControl(this.quoteNumber, Validators.required)
    );
    this.quoteFromGroup.addControl(
      'phone',
      new FormControl(this.phone, Validators.required)
    );
    this.quoteFromGroup.addControl(
      'customerName',
      new FormControl(this.customerName, Validators.required)
    );
    this.quoteFromGroup.addControl(
      'address',
      new FormControl(this.address, Validators.required)
    );
    this.quoteFromGroup.addControl(
      'email',
      new FormControl(this.email, Validators.required)
    );
    this.quoteFromGroup.addControl(
      'state',
      new FormControl(this.state, Validators.required)
    );
    this.quoteFromGroup.addControl(
      'companyName',
      new FormControl(this.city, Validators.required)
    );
    this.quoteFromGroup.addControl(
      'city',
      new FormControl(this.city, Validators.required)
    );
    this.quoteFromGroup.addControl(
      'projectName',
      new FormControl(this.projectName, Validators.required)
    );
    this.quoteFromGroup.addControl(
      'zipCode',
      new FormControl(this.zipCode, Validators.required)
    );

  }

  getStateList(){
    this._coreService.getStateList().subscribe(data=>{
      this.stateList= data;
    })
  }

  cancel(){
    this._location.back();
  }
}
