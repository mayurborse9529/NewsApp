import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HelthComponent } from './helth/helth.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';

const routes: Routes = [
  {
    path:'', component:TopheadlineComponent
    
  },
  {
   path:'bsnews', component:BusinessNewsComponent
  }
  ,{
    path:'sports',component:SportsComponent
  },
  {
    path:'science',component:ScienceComponent
  },
  {
    path:'helth',component:HelthComponent
  },
  {
    path:'ent',component:EntertainmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
