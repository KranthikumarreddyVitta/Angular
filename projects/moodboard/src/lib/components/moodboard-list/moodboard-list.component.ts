import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { MatTab } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MoodboardService } from '../../services/moodboard.service';

@Component({
  selector: 'lib-moodboard-list',
  templateUrl: './moodboard-list.component.html',
  styleUrls: ['./moodboard-list.component.scss']
})
export class MoodboardListComponent implements OnInit {

  constructor(private moodboardService:MoodboardService, 
    private router: Router , 
    private _user:UserService,
    private _toaster: ToasterService
    ) {}
  bannerIconImg: any = 'assets/moodboard/images/moodboard.svg';
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
  defaultImg="https://inhabitr-furniture-prod.s3.amazonaws.com/noimage.jpg";
  isInternal:boolean = false;
  
  ngOnInit(): void {
    this.getMoodBoardList();
    this.getProjectList();
    this.isInternal = this._user.getUser().isInternalUser();
  }
  mbDetails(id: any){
    this.router.navigateByUrl('/moodboard/'+id);
  }
  projectFilter(ev:any){
    this.projectName = ev?.target.value;
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
  removeMB(sgid: any){
    let param = {"moodboard_id":sgid,"user_id":this._user.getUser().getId()};
    this.moodboardService.removeMyMB(param).subscribe((response:any) => {
      this._toaster.success(response.message);
    }, error => this._toaster.error('Please contact site administrator!')
    );
    
  }
  onTabChanged(ev: any){
    this.selectedIndex = ev.index;
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
  createMB(){
    this.router.navigate(['moodboard/create']);

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