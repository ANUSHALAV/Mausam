import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  GetWeatherData(cityName: string): any {
      let headers = {
        'content-type': 'application/json',
        'x-rapidapi-key': '4f3e61d02amsh4a3d50d49991f94p104451jsn76ca7cd7f596',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
      }
      return this.httpClient.get('https://yahoo-weather5.p.rapidapi.com/weather?location=' + cityName + '&format=json&u=f', { headers });
  }
}
