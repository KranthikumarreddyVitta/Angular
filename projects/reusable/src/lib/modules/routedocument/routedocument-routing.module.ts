import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseroutingComponent } from './baserouting/baserouting.component';
import { Child2Component } from './child2/child2.component';
import { FirstChildComponent } from './first-child/first-child.component';

const routes: Routes = [
  {
    path: 'child',
    component:FirstChildComponent,
    children:
      [
        {
          path: ':id',
          component: BaseroutingComponent
        },
        {
          path:'two',
          component:Child2Component
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutedocumentRoutingModule { }
