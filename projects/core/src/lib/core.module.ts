import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { ImageComponent } from './components/image/image.component';
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { BannerComponent } from './components/banner/banner.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CartComponent } from './components/cart/cart.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    HeaderComponent,
    ImageComponent,
    NavbarComponent,
    BannerComponent,
    TabsComponent,
    CartComponent
  ],
  imports: [
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    BrowserModule,
    MatSnackBarModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    TabsComponent,
    CartComponent
  ]
})
export class CoreModule { }
