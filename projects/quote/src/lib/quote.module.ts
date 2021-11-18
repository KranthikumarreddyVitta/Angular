import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { CoreModule } from 'projects/core/src/public-api';
import { QuoteCommonModule } from './common/quote-common.module';
import { QuoteCreateComponent } from './components/quote-create/quote-create.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { QuoteComponent } from './components/quote/quote.component';
import {MatRadioModule} from '@angular/material/radio';
import { quoteRoute } from './quote-routing';
import { QuoteDetailComponent } from './components/quote-detail/quote-detail.component';
import { FloorPlanUnitComponent } from './components/floor-plan-unit/floor-plan-unit.component';
import { MatDividerModule } from '@angular/material/divider';
import { MoodboardComponent } from '../lib/common/components/moodboard/moodboard.component';
@NgModule({
  declarations: [QuoteListComponent, QuoteComponent,QuoteCreateComponent, FloorPlanUnitComponent, QuoteDetailComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    QuoteCommonModule,
    MatDialogModule,
    CoreModule,
    MatFormFieldModule,
    MatSelectModule,
    AgGridModule,
    MatRadioModule,
    RouterModule.forChild(quoteRoute),
    MatDividerModule
  ],
  exports: [],
})
export class QuoteModule {}
