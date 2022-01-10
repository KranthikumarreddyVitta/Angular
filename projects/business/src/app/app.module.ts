import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EnvironmentService } from 'projects/core/src/lib/services/environment.service';
import { APP_DATA, CoreModule, FooterComponent } from 'projects/core/src/public-api';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp } from './app.initializer';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [
    { provide: Document, useValue: document },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    {
      provide: APP_DATA,
      useValue: environment,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [APP_DATA, Injector],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
