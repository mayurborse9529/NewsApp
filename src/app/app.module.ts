import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import{  HttpClientModule} from '@angular/common/http';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ScienceComponent } from './science/science.component';
import { HelthComponent } from './helth/helth.component'
@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    BusinessNewsComponent,
    SportsComponent,
    EntertainmentComponent,
    ScienceComponent,
    HelthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
