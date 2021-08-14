import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoodboardService } from '../../services/moodboard.service';

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
  catagorydata = [{
      imageSrc: 'assets/moodboard/images/Categories-01.png',
      value: 'Living Room',
    },
    {
      imageSrc: 'assets/moodboard/images/Categories-02.png',
      value: 'Bedroom',
    },
    {
      imageSrc: 'assets/moodboard/images/Categories-03.png',
      value: 'Dining Room',
    },
    {
      imageSrc: 'assets/moodboard/images/Categories-04.png',
      value: 'Office',
    },
    {
      imageSrc: 'assets/moodboard/images/Categories-05.png',
      value: 'Outdoor',
    },
    {
      imageSrc: 'assets/moodboard/images/Categories-06.png',
      value: 'Others',
    }
  ]
  mbId: any = '';
  currentPage: any = '';
  boardname: any = '';
  constructor(public fb: FormBuilder, private moodboardService:MoodboardService,private activatedRoute: ActivatedRoute, private router: Router) {
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
    if(this.mbId !== ''){
      this.getMoodboard();
    }
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
        moodboardType: response.moodboard.moodboard_type_name,
        moodboardCompany: response.moodboard.company_name,
        moodboardProjectName: response.moodboard.project_name,
        moodboardState: response.moodboard.state,
        moodboardCity: response.moodboard.city,
        moodboardZip: response.moodboard.zipcode
      });
    });    
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
      userid: '98'
    }
    if(this.mbId!== '' && this.currentPage != 'create') { 
      param['moodboard_id'] = this.mbId;
      this.moodboardService.updateMoodboard(param).subscribe((response:any) => {
        console.log(response);
      });
    }else{
      this.moodboardService.createMoodboard(param).subscribe((response:any) => {
        console.log(response);
      });
    }
  }
}
