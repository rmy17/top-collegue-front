import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipationComponent } from './participation/participation.component';
import { VotesComponent } from './votes/votes.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { ClassementComponent } from './classement/classement.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipationComponent,
    VotesComponent,
    MenuComponent,
    ClassementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
