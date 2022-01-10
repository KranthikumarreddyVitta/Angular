import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent implements OnInit {

  text = 'CART';
  iconPath: string = 'assets/cart/images/cart.svg';
  
  constructor() { }

  ngOnInit(): void {
  }

}
