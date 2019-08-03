import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchComponent } from './fetch/fetch.component';
import{HttpClient,HttpClientModule} from '@angular/common/http'
import{FetchService} from './fetch.service'

@NgModule({
  declarations: [
    AppComponent,
    FetchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient,FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
