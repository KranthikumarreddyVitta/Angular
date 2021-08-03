import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { ImageComponent } from './components/image/image.component';
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CartComponent } from './components/cart/cart.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from "@angular/common";
import { ImageRendererComponent } from './cell-renderer/image-renderer/image-renderer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { CounterComponent } from './cell-renderer/counter/counter.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ImageComponent,
    NavbarComponent,
    BannerComponent,
    TabsComponent,
    CartComponent,
    FooterComponent,
    ImageRendererComponent,
    CounterComponent
  ],
  imports: [
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
    MatSnackBarModule,
    MatTabsModule,
    MatCardModule
  ],
  exports: [
    ImageRendererComponent,
    CounterComponent,
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    TabsComponent,
    CartComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
