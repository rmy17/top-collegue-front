import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CollegueInscription } from '../models/CollegueInscription';
import { CollegueParticipant } from '../models/CollegueParticipant';

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

  faireInscription(collegueInscription:CollegueInscription){
    return this._http.post<CollegueInscription>(`${environment.urlServ}/inscription`,collegueInscription,{
      withCredentials :true
    })
  }

  
 recupCollegueParticipants(){
  return this._http.get<CollegueParticipant>(`${environment.urlServ}/votes`,{
   withCredentials : true
 }).pipe(tap(colConnect => this.colConnecte.next(colConnect)))
}
 
}
