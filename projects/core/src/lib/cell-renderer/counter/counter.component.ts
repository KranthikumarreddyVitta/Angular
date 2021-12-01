import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {
  Column,
  ICellRendererParams,
  RedrawRowsParams,
  RowNode,
} from 'ag-grid-community';
import { CoreService } from '../../services/core.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit, ICellRendererAngularComp {
  @Input() min: number = 1;
  @Input() max: number = Infinity;
  @Input() readOnly = false;
  @Input() counter: number = 1;
  @Output() counterChange = new EventEmitter();
  @Input() customCss = false;

  private params: ICellRendererParams = {} as ICellRendererParams;
  constructor(private _user: UserService, private _coreService: CoreService) {}

  ngOnInit(): void {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.counter = params.value;
    this.max = params.data?.total_warehouse_quantity ?? Infinity;
    // for same user.
    if (this.params.data.userid === this._user.getUser().getId()) {
      this.readOnly = true;
    }
    // for internal user
    if (
      this._user.getUser().getCompanyId() === this.params.data.company_id &&
      this.params.data.application_type === 1
    ) {
      this.readOnly = true;
    }
    if (params?.data?.order_status) {
      this.readOnly = false;
    }
    // this.readOnly = true;
  }

  refresh(params: ICellRendererParams): boolean {
    this.counter = params.value;
    return true;
  }

  increment(): void {
    console.log('increase');
    if (this.counter + 1 > this.max) {
      return;
    }
    this.counter++;
    this.updateValue();
    this.counterChange.emit(this.counter);
  }
  decrement(): void {
    console.log('decrease');
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
    this.params?.context?.counterFComponentUpdate(this.params);
    // if (this.params.column?.getId()) {
    //   this._coreService.updateMDItem(this.params.data).subscribe((data) => {
    //     let item = document.getElementById('refresh');
    //     item?.click();
    //   });
    // }
  }
}
