import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderDetailService } from './order-detail.service';

@Component({
  selector: 'lib-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  orderId: number = 0;
  constructor(
    private _route: ActivatedRoute,
    private _orderDetailService: OrderDetailService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.orderId = params.id;
    });
  }
}
