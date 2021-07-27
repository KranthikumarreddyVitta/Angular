import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OrderDetailService } from './order-detail.service';
@Component({
  selector: 'lib-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

 orderId: number =0;
  constructor(private _route :ActivatedRoute, private _orderDetailService : OrderDetailService) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.orderId = params.id;
    });
  }

}
