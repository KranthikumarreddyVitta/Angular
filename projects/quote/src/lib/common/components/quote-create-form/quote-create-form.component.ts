import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'projects/core/src/lib/services/toaster.service';
import { CoreService, UserService } from 'projects/core/src/public-api';
import { Location } from '@angular/common';
import { QuoteCreateFormService } from './quote-create-form.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuoteService } from '../../../quote.service';
import { MAT_DATE_FORMATS } from '@angular/material/core';

export type QuoteFormType = 'CREATE' | 'EDIT' | 'COPY';
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
  @Input() stateId: number = NaN;
  @Input() companyName = '';
  @Input() companyId = '';
  @Input() city = '';
  @Input() projectName = '';
  @Input() projectId = '';
  @Input() zipCode = '';
  @Input() startDate: Date | null = null;
  @Input() endDate: Date | null = null;
  @Input() submitButtonText = 'CREATE';
  @Output() onCancel = new EventEmitter();
  @Output() onSubmit = new EventEmitter();
  @Input() type: QuoteFormType = 'CREATE';
  stateList: Array<any> = ['A', 'B'];
  showPDropdown: any = false;
  showDropdown: any = false;
  quoteFromGroup: FormGroup = new FormGroup({});
  dCompanyList: any = [];
  companyList: any = [];
  projectList: any = [];
  selectedCompany: any = '';
  selectedProject: any = '';
  constructor(
    private _coreService: CoreService,
    private _router: Router,
    private _toaster: ToasterService,
    private _location: Location,
    private _fromService: QuoteCreateFormService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public _dialogRef: MatDialogRef<QuoteCreateFormComponent>,
    public _user: UserService,
    private _quoteService: QuoteService
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
    this.endDate = stateObject?.endDate ? new Date(stateObject?.endDate) : null;
    this.startDate = stateObject?.startDate ?new Date(stateObject?.startDate): null;
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
      new FormControl(this.phone, [
        Validators.required,
        Validators.pattern(
          '^(1s?)?((([0-9]{3}))|[0-9]{3})[s-]?[\0-9]{3}[s-]?[0-9]{4}$'
        ),
      ])
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
      new FormControl(this.email, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ])
    );
    this.quoteFromGroup.addControl(
      'state_id',
      new FormControl(this.stateId, [Validators.required])
    );
    this.quoteFromGroup.addControl(
      'company_id',
      new FormControl(this.companyId)
    );
    this.quoteFromGroup.addControl(
      'companyName',
      new FormControl(this.companyName ?? this._user.getUser().getCompanyName())
    );
    this.quoteFromGroup.addControl(
      'city',
      new FormControl(this.city, Validators.required)
    );
    this.quoteFromGroup.addControl(
      'project_id',
      new FormControl(this.projectId)
    );
    this.quoteFromGroup.addControl(
      'project_name',
      new FormControl(this.projectName)
    );
    this.quoteFromGroup.addControl(
      'zipcode',
      new FormControl(this.zipCode, [
        Validators.required,
        Validators.pattern('^[0-9]{5}(?:-[0-9]{5})?$'),
      ])
    );
    this.quoteFromGroup.addControl(
      'preferred_delivery_start_date',
      new FormControl(this.startDate)
    );
    this.quoteFromGroup.addControl(
      'preferred_delivery_end_date',
      new FormControl(this.endDate)
    );
    this.getStateList();
    this.getCompanyList();
  }

  getStateList() {
    this._coreService.getStateList().subscribe((data) => {
      this.stateList = data;
      if (undefined == this.stateId)
        this.quoteFromGroup.controls.state_id.patchValue(
          this.stateList[0].sgid
        );
    });
  }

  getCompanyList() {
    this._quoteService.getCompanyList().subscribe((data: any) => {
      if (typeof data.result == 'string') {
        this.companyList = [];
        this.selectedCompany = '';
        return;
      }
      // this.companyList = data.result.map((x: any) => x.company);
      this.companyList = data.result;
      let companyId = data.result.find(
        (x: any) => x.company == this.selectedCompany
      )?.sgid;
      if (companyId) {
        this.getProjectList(companyId, null);
      }
    });
  }
  selectProjectList(id: any, event: any) {
    let projectId = event.target.value;
    this.projectName = this.projectList.find(
      (x: any) => x.sgid == projectId
    ).project;
    this.quoteFromGroup.controls.project_name.patchValue(this.projectName);
  }
  getProjectList(companyId: any, event: any) {
    if (event !== null) companyId = event.target.value;
    this._quoteService.getProjectList(companyId).subscribe((data: any) => {
      if (typeof data.result == 'string') {
        this.projectList = [];
        this.selectedProject = '';
      } else {
        this.projectList = data.result; //.map((x: any)=> x.project);
        this.selectedProject = this.projectList[0];
        this.quoteFromGroup.controls.project_name.patchValue(
          this.projectList[0].project
        );
      }
    });
  }
  cancel() {
    this.onCancel.emit();
    if (this.dialogData.isDialog) {
      this._dialogRef.close();
    } else {
      this._location.back();
    }
  }

  submit() {
    this._fromService.createQuote(this.quoteFromGroup, this.type).subscribe(
      (data) => {
        if (data.statusCode == 200) {
          this.onSubmit.emit(data?.quote);
          if (this.dialogData.isDialog) {
            this._dialogRef.close();
          }
        }
        this._toaster.success(data.message);
      },
      (error) => {
        this._toaster.error(error);
      }
    );
  }
}
