import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 @Injectable({
  providedIn: 'root'
})
export class WeatherService {
   http: any;
   constructor(private httpClient: HttpClient) { }
  // sets my own API Key
  apiKey = 'b5b3939c554e54f4fee95b9175925aba';
  // sets settings to metric
  unit = 'metric';

  // Reads in the "weatherdata" depending on the city, makes a call to the API. Also console logs it.
  getRecentWeather(city: string): Observable<any> {
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${this.unit}&APPID=${this.apiKey}`;
    console.log('apiCall', apiCall);
    return this.httpClient.get<any>(apiCall).pipe(
      map(resp => {
        
        // Sets values from the API
        // If it's called etc "main.weather" in the documentation make use of it
        const weather = resp.weather[0];
        const temp = resp.main.temp;
        const sunriseTime = timeConverter(resp.sys.sunrise);
        const sunsetTime = timeConverter(resp.sys.sunset);
        const cloudPercentage = resp.clouds.all;
        const longitude = resp.coord.lon;
        const latitude = resp.coord.lat;
        const windSpeed = resp.wind.speed;
        const windDeg = resp.wind.deg;
        const windDir = degDirectioner(resp.wind.deg);

        // throws the values in to x
        const x = { weather, temp, sunriseTime, sunsetTime, cloudPercentage, longitude, latitude, windSpeed, windDir, windDeg, };
        return x;
      }));
  }
  // forecast data from the forecast part of the API (snow, rain etc)
  getForecast(city: string): Observable<any> {
    const apiCall = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${this.unit}&APPID=${this.apiKey}`;
    console.log('apiCall', apiCall);
    return this.httpClient.get<any>(apiCall).pipe(
      map(resp => {
        
        // Getting all the forecastData
        const rainForecast = resp.list[0].rain;
        const snowForecast = resp.list[0].snow;
        const forecastData = resp;
        
        
        //throws the values in to x
        const x = { forecastData, rainForecast, snowForecast};
        console.log(x);
        return x;

      }));
    
  }
  
}

// Function to set time correctly
function timeConverter($timeStamp) {
  var date = new Date($timeStamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var brandNewTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  return brandNewTime;
}
// Function to convert the Wind direction to the correct direction so that it get's more readable
// Checks if the degrees are larger or smaller than a certain SET degree amount to determine the direction
var degDirectioner = function(deg){
  if (deg>11.25 && deg<33.75){ return "NNE"; }
  else if (deg>33.75 && deg<56.25){ return "ENE"; }
  else if (deg>56.25 && deg<78.75){ return "E"; }
  else if (deg>78.75 && deg<101.25){ return "ESE"; }
  else if (deg>101.25 && deg<123.75){ return "ESE"; }
  else if (deg>123.75 && deg<146.25){ return "SE"; }
  else if (deg>146.25 && deg<168.75){ return "SSE"; }
  else if (deg>168.75 && deg<191.25){ return "S"; }
  else if (deg>191.25 && deg<213.75){ return "SSW"; }
  else if (deg>213.75 && deg<236.25){ return "SW"; }
  else if (deg>236.25 && deg<258.75){ return "WSW"; }
  else if (deg>258.75 && deg<281.25){ return "W"; }
  else if (deg>281.25 && deg<303.75){ return "WNW"; }
  else if (deg>303.75 && deg<326.25){ return "NW"; }
  else if (deg>326.25 && deg<348.75){ return "NNW"; }
  else { return "N"; }
}