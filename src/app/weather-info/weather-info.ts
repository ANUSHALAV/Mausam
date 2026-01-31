import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather-service';

@Component({
  selector: 'app-weather-info',
  imports: [FormsModule],
  templateUrl: './weather-info.html',
  styleUrl: './weather-info.css',
  standalone: true
})
export class WeatherInfo implements OnInit {

  weatherInfo: any = {};
  cityName: string = 'Delhi';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather(this.cityName);
  }

  getWeather(cityName: string) {
    cityName = cityName.trim();
    if (cityName != null && cityName != '' && cityName != undefined) {
      this.weatherService.GetWeatherData(cityName).subscribe((data: any) => {
        this.weatherInfo = {
          City: data.name,
          Country: data.sys.country,
          Temp: data.main.temp + '°C',
          Description: data.weather[0].description,
          Humidity: data.main.humidity + '%',
          Wind: data.wind.speed + ' m/s',
          Pressure: data.main.pressure + ' hPa'
        };
      });
    } else {
      alert('Please enter a valid city name');
    }
  }
}
