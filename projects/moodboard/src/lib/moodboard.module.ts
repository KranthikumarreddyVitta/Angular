import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoodboardListComponent } from './components/moodboard-list/moodboard-list.component';
import { moodboardRoutes } from './moodboard-routing';
import { MoodboardComponent } from './components/moodboard/moodboard.component';
import { CoreModule } from 'projects/core/src/public-api';



@NgModule({
  declarations: [
    MoodboardListComponent,
    MoodboardComponent
  ],
  imports: [
    RouterModule.forChild(moodboardRoutes),
    CoreModule
  ],
  exports : [
    
  ]
})
export class MoodboardModule { }
