import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { orderRouting } from './order.routing';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CoreModule } from 'projects/core/src/public-api';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    OrderComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    AgGridModule,
    RouterModule.forChild(orderRouting)
  ],
  exports: [
    OrderComponent,
  ]
})
export class OrderModule { }
