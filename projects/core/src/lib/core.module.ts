import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { ImageComponent } from './components/image/image.component';
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HeaderComponent,
    ImageComponent,
    NavbarComponent
  ],
  imports: [
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    BrowserModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
