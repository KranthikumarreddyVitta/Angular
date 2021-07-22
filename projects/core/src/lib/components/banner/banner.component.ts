import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }
  @Input() iconSrc: string = '';
  @Input() iconAltTxt: string = '';
  @Input() src: string = '';
  @Input() altTxt: string = '';
  @Input() bottomTxt: string = '';
  @Input() leftTxt: string = '';

  ngOnInit(): void {
  }

}
