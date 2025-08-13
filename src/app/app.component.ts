import { Component } from '@angular/core';
import { WeatherService } from './shared/service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  weather:any;
  errorMessage:string=''

  constructor(
    private _weatherService:WeatherService
  ){}

  fetchWeather(city:string){
    this._weatherService.getWeather(city).subscribe({
      next:(data)=>{
        this.weather=data;
        this.errorMessage=''
      },
      error:(err)=>{
        this.errorMessage='City not found';
        this.weather=null;
      }
    })
  }
}
