import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoodboardListComponent } from './components/moodboard-list/moodboard-list.component';
import { moodboardRoutes } from './moodboard-routing';
import { MoodboardComponent } from './components/moodboard/moodboard.component';
import { CoreModule } from 'projects/core/src/public-api';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from "@angular/common";
import {MatGridListModule} from '@angular/material/grid-list';
import { CreateMoodboardComponent } from './components/create-moodboard/create-moodboard.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import { AgGridModule } from 'ag-grid-angular';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    MoodboardListComponent,
    MoodboardComponent,
    CreateMoodboardComponent,
  ],
  imports: [
    RouterModule.forChild(moodboardRoutes),
    CoreModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatSelectModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTabsModule,
    FormsModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCardModule,
    AgGridModule,
    MatCheckboxModule 
  ],
  exports : [
    
  ]
})
export class MoodboardModule { }
