import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoodboardService } from '../../services/moodboard.service';

@Component({
  selector: 'lib-create-moodboard',
  templateUrl: './create-moodboard.component.html',
  styleUrls: ['./create-moodboard.component.scss']
})
export class CreateMoodboardComponent implements OnInit {
  bannerIconImg: any = 'assets/moodboard/images/mb.png';
  bannerIconImgTxt: any = 'Moodboard';
  bannerImgTxt: any = 'Moodboard';
  bannerImg: any = 'assets/moodboard/images/mb-banner.jpg';
  bannerTxt: any = 'MoodBoard';
  bannerBottomTxt: any = 'Style & create look from our collection of designer furniture';
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

  constructor(public fb: FormBuilder, private moodboardService:MoodboardService) {
    this.mbCreateForm = this.fb.group({
                          moodboardName: ['', Validators.required],
                          moodboardType: ['', Validators.required],
                          moodboardCompany: ['', Validators.required],
                          moodboardProjectName: ['', Validators.required],
                          moodboardState: ['', Validators.required],
                          moodboardCity: ['', Validators.required],
                          moodboardZip: ['', Validators.required]
                        });
   }


  ngOnInit(): void {
    this.getStates();
  }

  getStates(){
    this.moodboardService.getStateList().subscribe((response:any) => {
      this.stateList = response.states;
    });    

  }
  onSubmit() {
    let val = this.mbCreateForm.value;
    let param = { 
      moodboard_name: val.moodboardName,
      moodboard_type: val.moodboardType,
      company_name: val.moodboardCompany,
      project_name: val.moodboardProjectName,
      state: val.moodboardState,
      city: val.moodboardCity,
      zipcode: val.moodboardZip,
      userid: '98'
    }
    this.moodboardService.createMoodboard(param).subscribe((response:any) => {
      console.log(response);
    });
  }
}
