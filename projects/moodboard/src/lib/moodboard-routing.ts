import { Routes } from '@angular/router';
import { MoodboardListComponent } from './components/moodboard-list/moodboard-list.component';
import { MoodboardComponent } from './components/moodboard/moodboard.component';

export const moodboardRoutes: Routes = [
  {
    path: '',
    component: MoodboardListComponent
  },{
    path:':id',
    component:MoodboardComponent
  }
];




