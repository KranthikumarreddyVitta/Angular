import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutedocumentRoutingModule } from './routedocument-routing.module';
import { BaseroutingComponent } from './baserouting/baserouting.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { Child2Component } from './child2/child2.component';


@NgModule({
  declarations: [
    BaseroutingComponent,
    FirstChildComponent,
    Child2Component
  ],
  imports: [
    CommonModule,
    RoutedocumentRoutingModule
  ]
})
export class RoutedocumentModule { }
