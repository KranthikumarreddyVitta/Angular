import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-reusable',
  template: `
    <p>
      reusable works!
    </p>
  `,
  styles: [
  ]
})
export class ReusableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
