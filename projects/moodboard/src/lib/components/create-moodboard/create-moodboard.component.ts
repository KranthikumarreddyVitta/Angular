import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoodboardService } from '../../services/moodboard.service';
import { ToasterService, UserService } from 'projects/core/src/public-api';

@Component({
  selector: 'lib-create-moodboard',
  templateUrl: './create-moodboard.component.html',
  styleUrls: ['./create-moodboard.component.scss']
})
export class CreateMoodboardComponent implements OnInit {
  bannerIconImg: any = 'assets/moodboard/images/mb.png';
  bannerIconImgTxt: any = 'Moodboard';
  bottomTxt: any = 'Style & create look from our collection of designer furniture';
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
  constructor(public fb: FormBuilder, private moodboardService:MoodboardService,
    private _user: UserService, private _toster: ToasterService,
    private activatedRoute: ActivatedRoute, private router: Router) {
    this.mbCreateForm = this.fb.group({
                          moodboardName: ['', Validators.required],
                          moodboardType: ['', Validators.required],
                          moodboardCompany: ['', Validators.required],
                          moodboardProjectName: ['', Validators.required],
                          moodboardState: ['', Validators.required],
                          moodboardCity: ['', Validators.required],
                          moodboardZip: ['', Validators.required]
                        });
      this.mbId = this.activatedRoute.snapshot.paramMap.get('id');
      this.currentPage = this.router.url.split('/')[2];                  
     }
  ngOnInit(): void {
    this.getStates();
    this.getMoodBoardType();  
    this.getcompanyByUserMoodboard();
    if(this.mbId != null){
      this.getMoodboard();
    }
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
    if(this.mbId!== '' && this.currentPage != 'create') { 
      param['moodboard_id'] = this.mbId;
      this.moodboardService.updateMoodboard(param).subscribe((response:any) => {
        if(response.statusCode === 200){ 
          this._toster.success(response.message);
          this.router.navigateByUrl('/moodboard');
      }
        else this._toster.error(response.message);
      }, error => this._toster.error('Please contact site administrator!')
      );
    }else{
      this.moodboardService.createMoodboard(param).subscribe((response:any) => {
        if(response.status_code === 200)
        { this._toster.success(response.message);
          this.router.navigateByUrl('/moodboard');
        }
        else this._toster.error(response.message);
      }, error => this._toster.error('Please contact site administrator!')
      );
    }
  }
}
