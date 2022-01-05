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
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuoteCreateFormComponent } from './components/quote-create-form/quote-create-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddFPComponent } from './components/add-fp/add-fp.component';
import { AddFPUComponent } from './components/add-fpu/add-fpu.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { SelectFpComponent } from './components/select-fp/select-fp.component';
import { SelectFpuComponent } from './components/select-fpu/select-fpu.component';
import { AddMoodboardQuoteComponent } from './components/add-moodboard-quote/add-moodboard-quote.component';
import { FloorPlanDetailsComponent } from './components/floor-plan-details/floor-plan-details.component';
import { MoodboardComponent } from './components/moodboard/moodboard.component';
import { DeleteItemComponent } from './components/delete-item/delete-item.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    QuoteHeaderComponent,
    TotalCellRendererComponent,
    ItemTypeComponent,
    QuoteCreateFormComponent,
    AddFPComponent,
    AddFPUComponent,
    AddproductComponent,
    SelectFpComponent,
    SelectFpuComponent,
    AddMoodboardQuoteComponent,
    FloorPlanDetailsComponent,
    MoodboardComponent,
    DeleteItemComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    CoreModule,
    FlexLayoutModule,
    AgGridModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    QuoteHeaderComponent,
    QuoteCreateFormComponent,
    ItemTypeComponent,
    TotalCellRendererComponent,
    DeleteItemComponent,
    MoodboardComponent,
  ],
})
export class QuoteCommonModule {}
