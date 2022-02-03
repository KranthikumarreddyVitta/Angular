import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustommoduleRoutingModule } from './custommodule-routing.module';
import { PracticeDirective } from './directives/practice.directive';


@NgModule({
  declarations: [
    PracticeDirective
  ],
  imports: [
    CommonModule,
    CustommoduleRoutingModule
  ],
  exports:[
    PracticeDirective
  ]
})
export class CustommoduleModule { }
