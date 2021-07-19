import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ImageComponent } from './components/image/image.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ImageComponent
  ],
  imports: [
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
