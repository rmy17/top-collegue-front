import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
  
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
  <div class="row justify-content-md-center">
    <h1 class="display-4">Top Collègues</h1>
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
