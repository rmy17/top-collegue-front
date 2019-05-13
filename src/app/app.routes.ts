import { Routes } from '@angular/router';
import { ParticipationComponent } from './participation/participation.component';
import { VotesComponent } from './votes/votes.component';


export const ROUTES: Routes = [
    { path: 'Particpation', component: ParticipationComponent },
    { path: 'Votes', component: VotesComponent},


    { path: '', pathMatch: 'full', redirectTo: '/Particpation' },
];