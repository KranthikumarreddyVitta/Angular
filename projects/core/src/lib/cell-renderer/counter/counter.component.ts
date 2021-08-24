import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {
  Column,
  ICellRendererParams,
  RedrawRowsParams,
  RowNode,
} from 'ag-grid-community';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit, ICellRendererAngularComp {
 
  @Input() min: number = 0;
  @Input() max: number = Infinity;
  @Input() readOnly = false;
  @Input() counter: number = 0;
  @Output() counterChange = new EventEmitter();

  private params: ICellRendererParams = {} as ICellRendererParams;
  constructor(private _user: UserService) {}

  ngOnInit(): void {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.counter = params.value;
    if (this.params.data.userid === this._user.getUser().getId()) {
      this.readOnly = true;
    }
    if (
      this._user.getUser().getCompanyId() === this.params.data.company_id &&
      this.params.data.application_type === 1
    ) {
      this.readOnly = true;
    }
  }

  refresh(params: ICellRendererParams): boolean {
    this.counter = params.value;
    return true;
  }

  increment(): void {
    if (this.counter + 1 > this.max) {
      return;
    }
    this.counter++;
    this.updateValue();
    this.counterChange.emit(this.counter);
  }
  decrement(): void {
    if (this.counter - 1 < this.min) {
      return;
    }
    this.counter--;
    this.updateValue();
    this.counterChange.emit(this.counter);
  }

  private updateValue() {
    this.params?.node?.setDataValue(
      this.params.column?.getId() as string,
      this.counter
    );
    this.params?.api?.refreshCells({ columns: ['is_total'], force: true });
  }
}
