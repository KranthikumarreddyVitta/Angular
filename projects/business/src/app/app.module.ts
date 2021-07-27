import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EnvironmentService } from 'projects/core/src/lib/services/environment.service';
import { APP_DATA, CoreModule } from 'projects/core/src/public-api';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp } from './app.initializer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [{
    provide : APP_DATA,
    useValue : environment
  },{
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    multi: true,
    deps:[APP_DATA,Injector]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
