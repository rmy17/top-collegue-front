import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CollegueParticipant } from '../models/CollegueParticipant';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})

export class ClassementComponent implements OnInit {

  tabCollegueParticipant = new Array();
  constructor(private _serv : DataService) { }

  ngOnInit() {
    this._serv.recupCollegueParticipants().subscribe(col=> this.tabCollegueParticipant = col.sort((a,b)=> {
      if (a.points < b.points)
        return 1;
      else if(a.points === b.points)
        return 0;
      else
        return -1;
    }))
  }

}
