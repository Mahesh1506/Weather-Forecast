import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url = 'https://api.openweathermap.org/data/2.5/weather';
apiKey = '8d8daf4fa8b0ad6ac436866c04b0e0f9';
  constructor(private http: HttpClient) { }

getWeatherDataBycoords(lat,lon){

let params = new HttpParams()
.set('lat', lat)
.set('lon', lon)
.set('units', 'imperial')
.set('appid', this.apiKey)
return this.http.get(this.url,{params});
}

getWeatherDataByCityName(city: string){
  let params = new HttpParams()
.set('q', city)
.set('units', 'imperial')
.set('appid', this.apiKey)
return this.http.get(this.url,{params});
}
}
