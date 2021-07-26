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


@NgModule({
  declarations: [
    MoodboardListComponent,
    MoodboardComponent
  ],
  imports: [
    RouterModule.forChild(moodboardRoutes),
    CoreModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatSelectModule,
    MatGridListModule
  ],
  exports : [
    
  ]
})
export class MoodboardModule { }
