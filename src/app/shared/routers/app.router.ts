import { Routes } from '@angular/router';

import { HomeComponent } from '../../+home/components/';
import { ExploreComponent } from '../../+explore/components/';
import { VisitComponent } from '../../+visit/components/';

export const router: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'visit', component: VisitComponent },

  { path: '**', redirectTo: 'home' }
];
