import { Routes } from '@angular/router';
import { FloorPlanDetailsComponent } from './common/components/floor-plan-details/floor-plan-details.component';
import { FloorPlanUnitComponent } from './components/floor-plan-unit/floor-plan-unit.component';
import { QuoteCreateComponent } from './components/quote-create/quote-create.component';
import { QuoteDetailComponent } from './components/quote-detail/quote-detail.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { QuoteComponent } from './components/quote/quote.component';

export const quoteRoute: Routes = [
  {
    path: '',
    component: QuoteComponent,
    children: [
      {
        path: '',
        component: QuoteListComponent,
      },
      {
        path: 'create',
        component: QuoteCreateComponent,
      },
      {
        path: 'edit',
        component: QuoteCreateComponent,
      },
      {
        path: 'copy',
        component: QuoteCreateComponent,
      },
      {
        path: ':id',
        component: QuoteDetailComponent,
      },
      {
        path: ':id/floorPlan',
        component: FloorPlanDetailsComponent,
      }, {
        path: ':id/floor-plan-unit/:unit_id',
        component: FloorPlanUnitComponent,
      }
    ],
  },
];
