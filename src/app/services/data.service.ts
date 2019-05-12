import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  logout(){
    return this._http.post(`${environment.urlServ}/logout`,null, {
     withCredentials : true
   })
  }
 
}
