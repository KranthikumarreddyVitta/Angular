import { Location } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import {
  AuthenticationService,
  ScrollService,
} from 'projects/core/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  headerBackground = '#FEBF2D';
  headerTextColor = 'white';
  get isLogin(): boolean {
    return this._auth?.isLoggedIn();
  }
  constructor(
    private _router: Router,
    private _auth: AuthenticationService,
    private _scrollService: ScrollService
  ) {
    _router.events.subscribe((event) => {
      if (this._router.url === '/dashboard') {
        this.headerBackground = '#2C2C2C';
        this.headerTextColor = '#FFFFFF';
      } else {
        this.headerBackground = '#2C2C2C';
        this.headerTextColor = '#FFFFFF';
      }
    });
  }

  scrolled(evt: any) {
    console.log(evt);
  }
  ngAfterViewInit() {
    let ele = document.getElementById('application');
    if (ele) {
      ele.onscroll = this._scrollService.scrollCallback;
    }
  }
}
