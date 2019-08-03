import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonlistComponent } from './personlist/personlist.component';
import{HttpClient ,HttpClientModule} from '@angular/common/http'
import {PersonService} from './person.service'

@NgModule({
  declarations: [
    AppComponent,
    PersonlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient,PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
