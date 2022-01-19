import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavItem } from './inavbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() background: string = '#FEBF2D';
  @Input() color: string = 'white';
  @Input() navList: Array<INavItem> = [
    // { name: 'Dashboard', route: 'dashboard', isActive: false },
    { name: 'Shop', route: 'business/shop', isActive: false },
    { name: 'Moodboard', route: 'business/moodboard', isActive: false },
    { name: 'Quote', route: 'business/quote', isActive: false },
    { name: 'Order', route: 'business/order', isActive: false },
    { name: 'My Account', route: 'business/dashboard/profile', isActive: false },
    { name: 'Practice', route: 'business/practice', isActive: false }
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToModule(item: INavItem) {
    if (item.name === 'My Account') {
      this.router.navigate([item.route], {queryParams: {account: true}});
    } else {
      this.router.navigate([item.route]);
    }
  }
}
