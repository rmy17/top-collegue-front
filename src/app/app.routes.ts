import { Routes } from '@angular/router';
import { ParticipationComponent } from './participation/participation.component';
import { VotesComponent } from './votes/votes.component';
import { ClassementComponent } from './classement/classement.component';
import { ConnexionGuardService } from './services/connexion-guard.service';


export const ROUTES: Routes = [
    { path: 'Participation', component: ParticipationComponent },
    { path: 'Votes', canActivate: [ConnexionGuardService], component: VotesComponent },
    { path : 'Classement', canActivate: [ConnexionGuardService], component: ClassementComponent },


    { path: '', pathMatch: 'full', redirectTo: '/Participation' },
];