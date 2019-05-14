import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CollegueInscription } from '../models/CollegueInscription';
import { Vote } from '../models/Vote';
import { CollegueParticipant } from '../models/CollegueParticipant';
import { Observable, Subject, Subscription } from 'rxjs';
import { tap, map, flatMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private connecte = new Subject<Boolean>();
  private colConnect = new Subject<CollegueParticipant>();
  collegueParticipants = new CollegueParticipant("", "", "", "",0);
  bool:boolean;

  constructor(private _http: HttpClient) { }

  logout() {
    return this._http.post(`${environment.urlServ}/logout`, null, {
      withCredentials: true
    }).pipe(tap(colConnect => {
     this.connecte.next(false);
   }));
  }

  faireInscription(collegueInscription: CollegueInscription): Observable<CollegueParticipant> {
    return this._http.post<CollegueInscription>(`${environment.urlServ}/inscription`, collegueInscription, {
      withCredentials: true
    }).pipe(flatMap(colConnect =>this.recupCollegueConnecte()));
  }

  recupCollegueConnecte(): Observable<CollegueParticipant>{
    return this._http.get<CollegueParticipant>(`${environment.urlServ}/me`,{
     withCredentials : true
   }).pipe(tap(colConnect => {
     this.colConnect.next(colConnect);
    this.connecte.next(true);
  }))
  }

  recupCollegueParticipants(): Observable<CollegueParticipant> {
    return this._http.get<CollegueParticipant>(`${environment.urlServ}/votes`, {
      withCredentials: true
    });
  }

  retourVote(vote: Vote) {
    return this._http.patch<Boolean>(`${environment.urlServ}/vote`, vote, {
      withCredentials: true
    });
  }

  get isConnect(){
    return this.connecte.asObservable();
  }

  isLoggedIn (): Observable<boolean> {

		return this.recupCollegueConnecte().pipe(
			tap(
				user => {
					this.colConnect.next(user);
					this.bool = true;
				} 
			), 
			map(user => true)
		)
}

}
