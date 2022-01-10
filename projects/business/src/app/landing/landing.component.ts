import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'projects/core/src/public-api';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  headerBackground = '#2C2C2C';
  headerTextColor = '#FFFFFF';
  isHomePage = true;

  get isLogin(): boolean {
    return this._auth?.isLoggedIn();
  }
  constructor(private _router: Router,
    private _auth: AuthenticationService) { }

  ngOnInit(): void {
  }

}
