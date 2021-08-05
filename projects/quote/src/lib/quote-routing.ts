import { Routes } from '@angular/router';
import { QuoteCreateComponent } from './common/components/quote-create/quote-create.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { QuoteComponent } from './components/quote/quote.component';

export const quoteRoute: Routes = [
  {
    path: '',
    component: QuoteListComponent,
  },
  {
    path: 'create',
    component: QuoteCreateComponent,
  },
  {
    path: ':id',
    component: QuoteComponent,
  },
];
