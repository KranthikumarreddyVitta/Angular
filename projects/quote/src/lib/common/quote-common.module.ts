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
import { QuoteCreateComponent } from './components/quote-create/quote-create.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [QuoteHeaderComponent, TotalCellRendererComponent, ItemTypeComponent, QuoteCreateComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    CoreModule,
    FlexLayoutModule,
    AgGridModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ], exports : [
    QuoteHeaderComponent
  ]
})
export class QuoteCommonModule { }
