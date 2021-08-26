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
  projectName: any = '';
  selectedIndex: any = 0;
  ngOnInit(): void {
    this.getMoodBoardList();
    this.getProjectList();
  }
  mbDetails(id: any){
    this.router.navigateByUrl('/moodboard/'+id);
  }
  projectFilter(ev:any){
    this.projectName = ev;
    this.onTabChanged({index: this.selectedIndex}); 
  }
  getProjectList(){
    this.moodboardService.getProjectList().subscribe((response:any) => {
      this.projectList = response.moodboardProject;
    });    
  }
  getMoodBoardList(){
    let param = {supplier_id:0,project_name: this.projectName}
    this.moodboardService.getMoodBoardList(param).subscribe((response:any) => {
      this.tabContent = response.result;
    });    
  }

  onTabChanged(ev: any){
    console.log(ev);
    if(ev.index == 1) {
      this.getMyMoodBoardList()
    }
    if(ev.index == 2) {
      this.getDisabledMBList();
    }
    if(ev.index == 0) {
      this.getMoodBoardList();
    }
  }  
  getMyMoodBoardList(){
    let param = {supplier_id:0,project_name: this.projectName}
    this.moodboardService.getMyMoodBoardList(param).subscribe((response:any) => {
      this.tabContent = response.result;
    });    
  }
  getDisabledMBList(){
    let param = {supplier_id:0,project_name: this.projectName}
    this.moodboardService.getDisabledMBList(param).subscribe((response:any) => {
      this.tabContent = response.result;
    });    
  }
}