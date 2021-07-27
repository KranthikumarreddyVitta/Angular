import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { CoreModule } from 'projects/core/src/public-api';
import { QuoteCommonModule } from './common/quote-common.module';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { QuoteComponent } from './components/quote/quote.component';

import { quoteRoute } from "./quote-routing";

@NgModule({
  declarations: [
  
    QuoteListComponent,
       QuoteComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    QuoteCommonModule,
    CoreModule,
    AgGridModule,
    RouterModule.forChild(quoteRoute)
  ],
  exports: [
  ]
})
export class QuoteModule { }
