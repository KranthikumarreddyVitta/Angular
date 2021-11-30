import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'projects/core/src/public-api';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() showMenu = false;
  @Input() showSearch = false;
  loginName = ''

  constructor(private _authenticationService: AuthenticationService ,
    private _user:UserService) {}

  ngOnInit(): void {
    this.getUserName();
  }

  logout() {
    this._authenticationService.logout();
  }

  getUserName() {
    this.loginName = this._user.getUser().getFirstName() + ' ' + this._user.getUser().getLastName()
  }
}
