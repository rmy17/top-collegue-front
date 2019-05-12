import { Routes } from '@angular/router';
import { Participation } from './participation/participation.component';


export const ROUTES: Routes = [
    { path: 'Particpation', component: Participation },


    { path: '', pathMatch: 'full', redirectTo: '/Particpation' },
];