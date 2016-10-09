import { Component } from '@angular/core';

@Component({
  selector: 'vm-navbar',
  styles: [`
    #top-nav {
      text-transform: uppercase;
    }

    .navbar {
      background-color: #fff;
      opacity: .9;
      margin-top: 1rem;
    }

    .navbar-nav > li.active > a {
      color: royalblue;
      border-bottom: 1px solid royalblue;
    }
    
    .brand {
      font-size: 1.5rem;
    }
  `],
  template: `
    <nav class="navbar navbar-light bg-faded navbar-fixed-top">
      <div class="container-fluid">
        
        <h1 class="navbar-brand vm-thin brand">VR Museum</h1>
    
        <div class="collapse navbar-toggleable-xs">
          <ul id="top-nav" class="nav navbar-nav">
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/home']">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/explore']">Explore</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/visit']">Visit</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}
