import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { QuoteService } from 'projects/quote/src/public-api';
import { MoodboardService } from '../../services/moodboard.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lib-create-moodboard-popup',
  templateUrl: './create-moodboard-popup.component.html',
  styleUrls: ['./create-moodboard-popup.component.scss']
})
export class CreateMoodboardPopupComponent implements OnInit {

  mbCreateForm: FormGroup;
  stateList: any = [];
  mbTypeList: any = [];
  catagorydata = [{
      imageSrc: 'assets/moodboard/images/Categories-01.png',
      value: 'Living Room',
      type_id: 1
    },
    {
      imageSrc: 'assets/moodboard/images/Categories-02.png',
      value: 'Bedroom',
      type_id: 2
    },
    {
      imageSrc: 'assets/moodboard/images/Categories-03.png',
      value: 'Dining Room',
      type_id: 3
    },

    {
      imageSrc: 'assets/moodboard/images/Categories-04.png',
      value: 'Office',
      type_id: 4
    },
    {
      imageSrc: 'assets/moodboard/images/Categories-05.png',
      value: 'Outdoor',
      type_id: 5
    },
    {
      imageSrc: 'assets/moodboard/images/Categories-06.png',
      value: 'Others',
      type_id: 6
    }
  ]
  mbId: any = null;
  currentPage: any = '';
  boardname: any = '';
  showPDropdown: any = true;
  showDropdown: any = true;
  dCompanyList: any = [];
  companyList: any = [];
  projectList: any = [];
  selectedCompany: any = '';
  selectedProject: any = '';

  constructor(public fb: FormBuilder, private moodboardService:MoodboardService,
    public _user: UserService, private _toster: ToasterService, private _quoteService: QuoteService,
    public _dialogRef: MatDialogRef<CreateMoodboardPopupComponent>,
    private activatedRoute: ActivatedRoute, private router: Router) {
    this.mbCreateForm = this.fb.group({
                          moodboardName: ['', Validators.required],
                          moodboardType: ['', Validators.required],
                          moodboardCompany: [''],
                          moodboardProjectName: [''],
                          company_id: [''],
                          project_id: [''],
                          moodboardState: ['', Validators.required],
                          moodboardCity: ['', Validators.required],
                          moodboardZip: ['', Validators.required]
                        });
     }
  ngOnInit(): void {
    this.getStates();
    this.getMoodBoardType();  
    this.getcompanyByUserMoodboard();
    this.getCompanyList();
  }
  getMoodBoardType(){
    this.moodboardService.getMoodBoardType().subscribe((response:any) => {
      this.mbTypeList = response.result;
      this.catagorydata = this.mbTypeList.map((item: any, i: any) => Object.assign({}, item, this.catagorydata[i]));
    });    
  }
  getcompanyByUserMoodboard(){
    this.moodboardService.getcompanyByUserMoodboard().subscribe((response:any) => {
      this.mbCreateForm.patchValue({moodboardCompany:response.result[0].company});
    });    
  }

  getCompanyList() {
    this._quoteService.getCompanyList().subscribe((data: any) => {
      if(typeof data.result == 'string'){
        this.companyList = [];
        this.selectedCompany = "";
        return;
      }
     // this.companyList = data.result.map((x: any) => x.company);
      this.companyList  = data.result;
      let companyId = data.result.find((x: any)=> x.company == this.selectedCompany)?.sgid;
      if(companyId){
        this.getProjectList(companyId, null);
      }
    });
  }
  getProjectList(companyId: any, event: any) {
    if(event !== null) companyId = event.target.value;
    this._quoteService.getProjectList(companyId).subscribe((data: any)=> {
      if(typeof data.result == 'string'){
        this.projectList = [];
        this.selectedProject = "";
      } else {
        this.projectList  = data.result; //.map((x: any)=> x.project);
        this.selectedProject = this.projectList[0];
      }
    })  
  }

  validatedCityZipCode(){
    let param = {zipcode: this.mbCreateForm.value.moodboardZip, 
      city_name: this.mbCreateForm.value.moodboardCity};
    this.moodboardService.validatedCityZipCode(param).subscribe((response:any) => {
       response.result;
    });    
  }
  getStates(){
    this.moodboardService.getStateList().subscribe((response:any) => {
      this.stateList = response.states;
    });    

  }
  getMoodboard(){
    this.moodboardService.getMoodBoard(this.mbId).subscribe((response:any) => {
      this.boardname = response.moodboard.boardname;
      this.mbCreateForm.setValue({
        moodboardName: response.moodboard.boardname,
        moodboardType: response.moodboard.boardtypeid,
        moodboardCompany: response.moodboard.company_name,
        moodboardProjectName: response.moodboard.project_name,
        moodboardState: response.moodboard.state,
        moodboardCity: response.moodboard.city,
        moodboardZip: response.moodboard.zipcode
      });
    });    
  }
  resetForm(){
    this.mbCreateForm.reset();
  }
  cancel() {
    this._dialogRef.close();
  }
  onSubmit() {
    let val = this.mbCreateForm.value;
    let param: {[index: string]:any} = { 
      moodboard_name: val.moodboardName,
      moodboard_type: val.moodboardType,
      company_name: val.moodboardCompany,
      project_name: val.moodboardProjectName,
      state: val.moodboardState,
      city: val.moodboardCity,
      zipcode: val.moodboardZip,
      userid: this._user.getUser().getId()
    
    }
    if(this.showDropdown == false)
    param['company_name'] = this.companyList.find((x: any)=> x.sgid == val.company_id)?.company;
    if(this.showPDropdown == false)
    param['project_name'] = this.projectList.find((x: any)=> x.sgid == val.project_id)?.project;
    
    this.moodboardService.createMoodboard(param).subscribe((response:any) => {
        if(response.statusCode === 200)
        { this._toster.success(response.message);
      //    this.router.navigate(['moodboard',response.moodboard_id])
        }
        else this._toster.error(response.message);
      }, error => this._toster.error('Please contact site administrator!')
      );
  }

}
