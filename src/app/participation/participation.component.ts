import { Component, OnInit } from '@angular/core';
import { CollegueInscription } from '../models/CollegueInscription';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent implements OnInit {

  collegueInscription = new CollegueInscription("","","");

  constructor() { }

  ngOnInit() {
  }

  Inscription(){
  }
}
