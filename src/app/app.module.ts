import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherdetailComponent } from './weatherdetail/weatherdetail.component';
import { SearchcityComponent } from './searchcity/searchcity.component';
import {FormsModule} from '@angular/forms';
import { DateAddPipe } from './date-add.pipe';



@NgModule({
  declarations: [
    AppComponent,
    WeatherdetailComponent,
    SearchcityComponent,
    DateAddPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
