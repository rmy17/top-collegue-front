import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { CollegueParticipant } from './models/CollegueParticipant';
import { CollegueInscription } from './models/CollegueInscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
  
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row justify-content-md-center">
          <h1 class="display-4">Top Collègues</h1>
        </div>
      </div>
      <div *ngIf="bool===true">
          <p>{{colConnecte.prenom}} {{colConnecte.nom}}</p>
          <button (click)="deconnexion()" type="button" class="btn btn-link">Se deconnecter</button>
      </div>
    </div>
  </div>
  <app-menu></app-menu>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'top-collegues';

  bool:Boolean;
  colConnecte = new CollegueParticipant("","","","",0);
  constructor(private _serv : DataService, private router: Router) {
  }

  ngOnInit() {
    this._serv.recupCollegueConnecte().subscribe(col => { 
      this.colConnecte = col }, err => { });
    this._serv.isConnect.subscribe(bool=>{
      console.log(bool);
      this.bool=bool
    })
    }

    deconnexion(){
      this._serv.logout().subscribe(rep => {
        this.router.navigate(['/Participation'])
      },err => {
        console.log(err)
      })
    }
}
