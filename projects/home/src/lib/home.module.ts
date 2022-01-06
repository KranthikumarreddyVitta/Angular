import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HomeComponentNew } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from 'projects/core/src/public-api';

const routes = [
  {
    path:'',
    component:HomeComponentNew
  }
]


@NgModule({
  declarations: [
    HomeComponent,
    HomeComponentNew
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CarouselModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    CoreModule
  ],
  exports: [
    HomeComponent,
    HomeComponentNew
  ]
})
export class HomeModule { }
