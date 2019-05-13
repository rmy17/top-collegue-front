import { Component, OnInit } from '@angular/core';
import { CollegueInscription } from '../models/CollegueInscription';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent implements OnInit {

  collegueInscription = new CollegueInscription("","","");
  message:string;

  constructor(private _serv : DataService, private router: Router) { }

  ngOnInit() {
  }

  Inscription(){
    this._serv.faireInscription(this.collegueInscription).subscribe(col => {
      this.router.navigate(["/Votes"]);
    },err => {this.message = `Erreur dans l'inscription ${err}`})
  }
}
