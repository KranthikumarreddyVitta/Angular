import { Component, Input, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Column, ICellRendererParams, RedrawRowsParams, RowNode } from 'ag-grid-community';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit, ICellRendererAngularComp {
  @Input() counter: number = 0;
  @Input() min: number =0;
  @Input() max:number = Infinity;
  private params : ICellRendererParams={} as ICellRendererParams;
  constructor() {}

  ngOnInit(): void {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.counter = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    this.counter = params.value;
    return true;
  }

  increment(): void {
    if(this.counter+1 > this.max){
      return;
    }
    this.counter++;
    this.updateValue()
  }
  decrement(): void {
    if(this.counter -1< this.min){
      return;
    }
    this.counter--;
    this.updateValue()
    
  }
  
  private updateValue(){
    this.params.node.setDataValue(this.params.column?.getId() as string, this.counter)
    this.params.api.refreshCells({columns: ['is_total'],force: true})
  }
}
