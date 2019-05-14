import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DataService } from './data.service';
import { catchError } from 'rxjs/operators';
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnexionGuardService implements CanActivate {
  constructor(private router: Router, private serv: DataService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    // retourne `true` si l'utilisateur est connecté ou redirige vers la page de /login
    return this.serv.isLoggedIn()
			.pipe(
				catchError( () => of(this.router.parseUrl('/login') ))
); 
  }
}
