import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuoteDetailService } from './quote-detail.service';

@Component({
  selector: 'lib-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
   quoteId: number = 0;

  constructor(
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.quoteId = params.id;
    });
  }

 
}
