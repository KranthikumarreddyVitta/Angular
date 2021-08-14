import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { MatTab } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MoodboardService } from '../../services/moodboard.service';

@Component({
  selector: 'lib-moodboard-list',
  templateUrl: './moodboard-list.component.html',
  styleUrls: ['./moodboard-list.component.scss']
})
export class MoodboardListComponent implements OnInit {

  constructor(private moodboardService:MoodboardService, private router: Router) {}
  bannerIconImg: any = 'assets/moodboard/images/mb.png';
  bannerIconImgTxt: any = 'Moodboard';
  bannerImgTxt: any = 'Moodboard';
  bannerImg: any = 'assets/moodboard/images/mb-banner.jpg';
  bannerTxt: any = 'MoodBoard';
  bannerBottomTxt: any = 'Style & create look from our collection of designer furniture';
  tabsData: any[] = [{title:'All Moodboards', content: '' },{title:'My Moodboards', content: '' },{title:'Disabled Moodboards', content: '' } ];
  tabContent: any[]= [];    
  projectList: any[] = [];

  ngOnInit(): void {
    this.getMoodBoardList();
    this.getProjectList();
  }
  mbDetails(id: any){
    this.router.navigateByUrl('/moodboard/'+id);
  }
  getProjectList(){
    this.moodboardService.getProjectList().subscribe((response:any) => {
      this.projectList = response.moodboardProject;
    });    
  }
  getMoodBoardList(){
    this.moodboardService.getMoodBoardList().subscribe((response:any) => {
      this.tabContent = response.result;
    });    
  }

  onTabChanged(ev: any){
    console.log(ev);
    if(ev === 1) {
      this.getMyMoodBoardList()
    }
    if(ev === 2) {
      this.getDisabledMBList();
    }
    if(ev === 0) {
      this.getMoodBoardList();
    }
  }  
  getMyMoodBoardList(){
    this.moodboardService.getMyMoodBoardList().subscribe((response:any) => {
      this.tabContent = response.result;
    });    
  }
  getDisabledMBList(){
    this.moodboardService.getDisabledMBList().subscribe((response:any) => {
      this.tabContent = response.result;
    });    
  }
}