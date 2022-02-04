import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { ReusableComponent } from './reusable.component';
import { SortDirective } from './directives/sort.directive';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComplexComponent } from './components/complex/complex.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { FullNamePipe } from './pipes/fullname';

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
        path: 'reactive',
        component: ReactiveComponent
      },
      {
        path: 'complex',
        component: ComplexComponent
      },
      {
        path: 'demopipe',
        component: PipedemoComponent
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
    SortDirective,
    ReactiveComponent,
    ComplexComponent,
    PipedemoComponent,
    FullNamePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports: [
    ReusableComponent
  ]
})
export class ReusableModule { }
