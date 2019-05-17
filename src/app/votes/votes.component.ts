import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CollegueParticipant } from '../models/CollegueParticipant';
import { Vote } from '../models/Vote';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  constructor(private _serv : DataService) { }
  vote = new Vote("",true);
  tabCollegueParticipants = new Array();

  ngOnInit() {
    this._serv.recupCollegueParticipants().subscribe(colP => this.tabCollegueParticipants=colP, err => {})
  }


  envoyeVote(bool:boolean, email:string){
    this.vote.bool=bool;
    this.vote.email=email;
    console.log(this.vote);
    this._serv.retourVote(this.vote).subscribe(()=>{}, err => {
    })
  }
}
