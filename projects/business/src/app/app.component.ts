import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from 'projects/core/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  headerBackground = '#FEBF2D';
  headerTextColor = 'white';
  get isLogin(): boolean {
    return this.auth?.isLoggedIn();
  }
  constructor(
    private router: Router,
    location: Location,
    private auth: AuthenticationService
  ) {
    router.events.subscribe((event) => {
      if (this.router.url === '/dashboard') {
        this.headerBackground = '#FEBF2D';
        this.headerTextColor = 'black';
      } else {
        this.headerBackground = '#2C2C2C';
        this.headerTextColor = '#FFFFFF';
      }
    });
  }
}
