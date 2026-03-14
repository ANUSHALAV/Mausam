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
          this.weatherInfo = data;
          if (data?.current_observation?.condition?.text == 'Sunny') {
            this.weatherInfo.weatherImage = '../../assets/weather/sunny.png';
          }
          else if (data?.current_observation?.condition?.text == 'Cloudy') {
            this.weatherInfo.weatherImage = '../../assets/weather/cloudy.png';
          }
          else if (data?.current_observation?.condition?.text == 'Rainy') {
            this.weatherInfo.weatherImage = '../../assets/weather/rainy.png';
          }
          else if (data?.current_observation?.condition?.text == 'Snow') {
            this.weatherInfo.weatherImage = '../../assets/weather/snow.png';
          }
        }
      });
    } else {
      alert('Please enter a valid city name');
    }
  }
}
