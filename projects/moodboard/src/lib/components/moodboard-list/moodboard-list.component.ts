import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-moodboard-list',
  templateUrl: './moodboard-list.component.html',
  styleUrls: ['./moodboard-list.component.css']
})
export class MoodboardListComponent implements OnInit {

  constructor() { }
    bannerIconImg: any = 'assets/moodboard/images/mb.png';
    bannerIconImgTxt: any = 'Moodboard';
    bannerImgTxt: any = 'Moodboard';
    bannerImg: any = 'assets/moodboard/images/mb-banner.png';
    bannerTxt: any = 'MoodBoard';
    bannerBottomTxt: any = 'Style & create look from our collection of designer furniture';

  ngOnInit(): void {
  }

}
