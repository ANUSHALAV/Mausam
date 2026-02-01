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
  todayDate: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.todayDate = new Date().toDateString();;
    this.getWeather(this.cityName);
  }

  getWeather(cityName: string) {
    cityName = cityName.trim();
    if (cityName != null && cityName != '' && cityName != undefined) {
      this.weatherService.GetWeatherData(cityName).subscribe((data: any) => {
        if (data == null || data == undefined || data == '') {
          alert('Please enter a valid city name');
          return;
        } else {
          this.weatherInfo = {
            City: data.location.city,
            Country: data.location.country,
            Temp: ((5 / 9) * (data.current_observation.condition.temperature - 32)) + ' °C',
            Description: data.current_observation.condition.text,
            Humidity: data.current_observation.atmosphere.humidity + '%',
            Wind: data.current_observation.wind.speed + 'Km/h',
            Visibility: data.current_observation.atmosphere.visibility + ' %',
            Pressure: data.current_observation.atmosphere.pressure + ' hPa'
          };
        }
      });
    } else {
      alert('Please enter a valid city name');
    }
  }
}
