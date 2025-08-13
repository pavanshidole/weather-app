import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherKey = '2135613895259360134bc1e2a5f84e20';
  private apiUrl = `${environment.baseUrl}`;

  constructor(
    private _http:HttpClient
  ) { }

  getWeather(city:string):Observable<any>{
    return this._http.get<any>(`${this.apiUrl}?q=${city}&appid=${this.weatherKey}&units=metric`)
  }
}
