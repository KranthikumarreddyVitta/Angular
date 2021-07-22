import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavItem } from './inavbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @Input() background : string = "#FEBF2D";
  @Input() color : string = 'white';
  @Input() navList : Array<INavItem>= [
    { name: 'Dashboard', route: 'dashboard', isActive: false },
    { name: 'Moodboard', route: 'moodboard', isActive: false },
    { name: 'Quote', route: 'quote', isActive: false },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateToModule(item: INavItem){
    this.router.navigate([item.route])
  }
}
