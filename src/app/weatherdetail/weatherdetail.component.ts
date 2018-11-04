import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';


@Component({
  selector: 'app-weatherdetail',
  templateUrl: './weatherdetail.component.html',
  styleUrls: ['./weatherdetail.component.css']
})
export class WeatherdetailComponent implements OnInit {
  // Values that are going to be used, values are in defaultstate
 city = '?';
 weather = '?';
 temp = 0;
 sunriseTime = 0;
 sunsetTime = 0;
 cloudPercentage = 0;
 longitude = 0;
 latitude = 0;
 windSpeed = 0;
 windDir = 0;
 windDeg = 0;
 forecastData = {};
 rainForecast = 0;
 snowForecast = 0;
 windspeedForecast = 0;
 starterTime = 0;
 endingTime = 0;
 
 

   constructor(
     public weatherService: WeatherService, 
     private route: ActivatedRoute,
     private router: Router) 
     { }

   ngOnInit() {
    //using city and route to get them together so that weatherdetail can get routered
    this.city = this.route.snapshot.params['weatherdetail'];

    this.weatherService.getRecentWeather(this.city).subscribe(x => {
      // Prints variables that are set 
   
      
      this.weather = x.weather.description;
      this.temp = x.temp;
      this.sunriseTime = x.sunriseTime;
      this.sunsetTime = x.sunsetTime;
      this.cloudPercentage = x.cloudPercentage;
      this.longitude = x.longitude;
      this.latitude = x.latitude;
      this.windSpeed = x.windSpeed;
      this.windDir = x.windDir;
      this.windDeg = x.windDeg;
      
    });

    // Reading the forecast data
    this.weatherService.getForecast(this.city).subscribe(x => {
      this.forecastData = x.forecastData;
      this.rainForecast = x.rainForecast;
      this.snowForecast = x.snowForecast;
      this.starterTime = Timesetter(1); // +1 day
      this.endingTime = Timesetter(2); // +2 days
      
      //Sets the starting time to 7 which will be converted in the pipe
      function Timesetter($dayforTime) {
        var date = new Date();
        date.setDate(date.getDate() + $dayforTime);
        date.setHours(7, 0, 0, 0);
        var pp = date.getTime();
        var unix = Math.ceil(pp / 1000);
        return unix;
      }
      
 
    });


  }

 


//used for the return button to go back to nothing, which in this case redirects to /searchcity
  goBack() {
    this.router.navigate(['']);
  }
}
