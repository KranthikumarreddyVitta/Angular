import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoodboardService } from '../../services/moodboard.service';

@Component({
  selector: 'lib-moodboard',
  templateUrl: './moodboard.component.html',
  styleUrls: ['./moodboard.component.scss']
})
export class MoodboardComponent implements OnInit {
  public mbId: any = '';
  constructor(private moodboardService:MoodboardService, private activatedRoute: ActivatedRoute) { 
     this.mbId = this.activatedRoute.snapshot.paramMap.get('id');
  }
  bannerIconImg: any = 'assets/moodboard/images/mb.png';
  bannerIconImgTxt: any = 'Moodboard';
  moodboardDetails: any = '';
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
  ngOnInit(): void {
    this.getMoodboard();
  }

  getMoodboard(){
    this.moodboardService.getMoodBoard(this.mbId).subscribe((response:any) => {
      this.moodboardDetails = response;
    });    
  }

}
