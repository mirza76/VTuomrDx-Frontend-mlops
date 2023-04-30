import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './AppConfig/appconfig.interface';
import { API_CONFIG, API_SERVICE } from './AppConfig/appconfig.service';

@Injectable({
  providedIn: 'root'
})

export class VtumordxServicesService {

  constructor(@Inject(API_SERVICE) private config:AppConfig, private http: HttpClient) { 

  }

  getPredictions(image: FormData) {
    return this.http.post<any>(this.config.apiPath + "prediction", image, {responseType: 'blob' as 'json', observe: 'response'});
  }

}
