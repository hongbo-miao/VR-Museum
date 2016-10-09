import { Component } from '@angular/core';

@Component({
  selector: 'vm-app',
  styles: [`
    .container-fluid {
      padding-top: 6rem;
    }
  `],
  template: `
    <vm-navbar></vm-navbar>
    
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
