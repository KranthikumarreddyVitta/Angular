import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { ReusableComponent } from './reusable.component';
import { SortDirective } from './directives/sort.directive';

const routes = [
  {
    path: '',
    component: ReusableComponent,
    children: [
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: '',
        redirectTo: 'table',
        pathMatch: 'full',
      },
      {
        path: 'routing/:id',
        loadChildren: () => import('../lib/modules/routedocument/routedocument.module')
          .then((m) => m.RoutedocumentModule)
      }
    ],
  },

]


@NgModule({
  declarations: [
    ReusableComponent,
    TableComponent,
    SortDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
  ],
  exports: [
    ReusableComponent
  ]
})
export class ReusableModule { }
