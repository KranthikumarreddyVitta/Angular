import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-reusable',
  styles: [
  ],
  templateUrl: './reusable.component.html'
})
export class ReusableComponent implements OnInit {

  links = [{
    router: '/business/practice/table',
    isActive: true,
    name: 'Table'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
