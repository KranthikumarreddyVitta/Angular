import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteHeaderComponent } from './components/quote-header/quote-header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from 'projects/core/src/public-api';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [QuoteHeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    CoreModule,
    FlexLayoutModule,
    AgGridModule,
  ], exports : [
    QuoteHeaderComponent
  ]
})
export class QuoteCommonModule { }
