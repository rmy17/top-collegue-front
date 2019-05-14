import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CollegueParticipant } from '../models/CollegueParticipant';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {

  tabCollegueParticipant:CollegueParticipant;
  constructor(private _serv : DataService) { }

  ngOnInit() {
    this._serv.recupCollegueParticipants().subscribe(col=> this.tabCollegueParticipant = col)
  }

}
