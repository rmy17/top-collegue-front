import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
  <div class="row justify-content-md-center">
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
  </div>
  </div>
  </div>
  </div>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'top-collegues';
}
