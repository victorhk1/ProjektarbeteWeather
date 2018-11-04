import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import {Router} from '@angular/router';

import { AppService } from '../app.service'; 
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-searchcity',
  templateUrl: './searchcity.component.html',
  styleUrls: ['./searchcity.component.css']
})
export class SearchcityComponent implements OnInit {
  searchnewplace:string;
  failed:boolean;
  
  public city_list;
  id:string;
  nm:string;
  lat:number;
  lon:number;
  countryCode:string;


  constructor(
    public weatherService: WeatherService, 
    private router: Router,
    public appService: AppService) { }

  // subscribing city list  
  ngOnInit() {
    this.appService.getData().subscribe(city_list=> {
      this.city_list = city_list
   
    });

  }
  
//Takes in the cities and checks if they exists, also subscribes and adds to the routing
  citySearcher() {
  
    this.failed = false;
    const city = this.searchnewplace;
    this.weatherService.getRecentWeather(city).subscribe(x => {
      console.log('City has been found');
      this.router.navigate(['/weatherdetail/' + city]);
    },
      error => {
        console.log('City did not get found');
        this.failed = true;
      });
  }
 } 
