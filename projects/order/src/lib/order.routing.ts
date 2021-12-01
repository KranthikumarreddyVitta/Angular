import { Routes } from '@angular/router';
import { FloorPlanDetailsComponent } from 'projects/quote/src/lib/common/components/floor-plan-details/floor-plan-details.component';
import { FloorPlanUnitComponent } from 'projects/quote/src/lib/components/floor-plan-unit/floor-plan-unit.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderComponent } from './components/order/order.component';

export const orderRouting: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: '',
        component: OrderListComponent,
      },
      {
        path: ':id',
        component: OrderDetailsComponent,
      },
      {
        path: ':id/:fpId',
        component: FloorPlanDetailsComponent,
      }, {
        path: ':id/floor-plan-unit/:fpId/unit/:unit_id',
        component: FloorPlanUnitComponent,
      }
    ],
  },
];
