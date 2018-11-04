import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherdetailComponent } from './weatherdetail/weatherdetail.component';
import { SearchcityComponent } from './searchcity/searchcity.component';

const routes: Routes = [
  { path: 'weatherdetail/:weatherdetail', component: WeatherdetailComponent },
  { path: 'searchcity', component: SearchcityComponent},
  { path: '',  redirectTo: '/searchcity', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }