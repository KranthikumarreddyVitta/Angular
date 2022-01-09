import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() showMenu = false;
  @Input() showSearch = false;
  searchForm: FormGroup;
  loginName = ''
  searchString = '';

  constructor(private _authenticationService: AuthenticationService ,
    private route: Router,   
    private aRoute: ActivatedRoute,
    private formBuilder: FormBuilder,

    private _user:UserService) {
      this.searchForm  = this.formBuilder.group({
        keywords:  ['', Validators.required]
      });
    
    }

  ngOnInit(): void {
    this.getUserName();
  }

  logout() {
    this._authenticationService.logout();
  }

  getUserName() {
    this.loginName = this._user.getUser().getFirstName() + ' ' + this._user.getUser().getLastName()
  }
  search() {
    this.searchString = this.searchForm.value.keywords;
    this.route.navigate(['/shop'], {queryParams: { keywords: this.searchString}});
    this.searchString = '';
  }

  accountSetting() {
    this.route.navigate(['dashboard/profile'], {queryParams: {account: true}});
  }
}
