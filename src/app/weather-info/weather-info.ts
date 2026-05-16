import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-info',
  imports: [FormsModule, CommonModule],
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
      this.weatherService.GetWeatherData(cityName).subscribe({
        next: (data: any) => {
          if (data == null || data == undefined || data == '') {
            alert('Please enter a valid city name');
            return;
          } else {
            this.weatherInfo = data;
            if (data?.current_observation?.condition?.text == 'Mostly Sunny' || data?.current_observation?.condition?.text == 'Sunny') {
              this.weatherInfo.weatherImage = '../../assets/weather/Sunny.png';
            }
            else if (data?.current_observation?.condition?.text == 'Cloudy' || data?.current_observation?.condition?.text == 'Partly Cloudy') {
              this.weatherInfo.weatherImage = '../../assets/weather/Cloudy.png';
            }
            else if (data?.current_observation?.condition?.text == 'Rainy') {
              this.weatherInfo.weatherImage = '../../assets/weather/Rainy.png';
            }
            else if (data?.current_observation?.condition?.text == 'Snow') {
              this.weatherInfo.weatherImage = '../../assets/weather/Snow.png';
            }
          }
        },
        error: (err:any) => {
          console.log(err);
        }
      });
    } else {
      alert('Please enter a valid city name');
    }
  }
}
