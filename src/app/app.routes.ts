import { Routes } from '@angular/router';
import { ParticipationComponent } from './participation/participation.component';


export const ROUTES: Routes = [
    { path: 'Particpation', component: ParticipationComponent },


    { path: '', pathMatch: 'full', redirectTo: '/Particpation' },
];