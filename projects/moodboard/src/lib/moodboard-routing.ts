import { Routes } from '@angular/router';
import { CreateMoodboardComponent } from './components/create-moodboard/create-moodboard.component';
import { MoodboardListComponent } from './components/moodboard-list/moodboard-list.component';
import { MoodboardComponent } from './components/moodboard/moodboard.component';

export const moodboardRoutes: Routes = [
  {
    path: '',
    component: MoodboardListComponent
  },{
    path: 'create',
    component: CreateMoodboardComponent
  },{
    path:':id',
    component:MoodboardComponent
  }
];




