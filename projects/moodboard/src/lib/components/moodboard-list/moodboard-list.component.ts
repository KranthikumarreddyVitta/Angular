import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MoodboardService } from '../../services/moodboard.service';

@Component({
  selector: 'lib-moodboard-list',
  templateUrl: './moodboard-list.component.html',
  styleUrls: ['./moodboard-list.component.scss']
})
export class MoodboardListComponent implements OnInit {

  constructor(private moodboardService:MoodboardService) { }
  bannerIconImg: any = 'assets/moodboard/images/mb.png';
  bannerIconImgTxt: any = 'Moodboard';
  bannerImgTxt: any = 'Moodboard';
  bannerImg: any = 'assets/moodboard/images/mb-banner.png';
  bannerTxt: any = 'MoodBoard';
  bannerBottomTxt: any = 'Style & create look from our collection of designer furniture';
  tabsData: any[] = [{title:'All Moodboards', content: '' },{title:'My Moodboards', content: '' },{title:'Disabled Moodboards', content: '' } ];
  tabContent: any[]= [];    
  ngOnInit(): void {
    this.getMoodBoardList();
  }

  getMoodBoardList(){
    this.moodboardService.getMoodBoardList().subscribe((response:any) => {
      this.tabContent = response.result;
    });    
  }
  getMyMoodBoardList(){
    this.moodboardService.getMyMoodBoardList().subscribe((response:any) => {
      this.tabContent = response.result;
    });    
  }

}
