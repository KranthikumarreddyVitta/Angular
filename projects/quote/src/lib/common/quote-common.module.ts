import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteHeaderComponent } from './components/quote-header/quote-header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from 'projects/core/src/public-api';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgGridModule } from 'ag-grid-angular';
import { TotalCellRendererComponent } from './components/total-cell-renderer/total-cell-renderer.component';
import { ItemTypeComponent } from './components/item-type/item-type.component';



@NgModule({
  declarations: [QuoteHeaderComponent, TotalCellRendererComponent, ItemTypeComponent],
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
