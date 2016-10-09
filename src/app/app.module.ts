import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { compose } from '@ngrx/core/compose';
import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import {
  HomeComponent,
  GalleryVrComponent
} from './+home/components/';
import {
  ExploreComponent,
  ExhibitVrComponent,
  ExhibitInfoComponent,
  ExhibitListComponent,
  ExploreTipComponent
} from './+explore/components/';
import {
  InfoComponent,
  LocationIconComponent,
  MapComponent,
  VisitComponent
} from './+visit/components/';
import { NavbarComponent } from './shared/components/';
import { ExploreService } from './+explore/services/';
import { exploreReducer } from './+explore/reducers/';
import { ExploreEffects } from './+explore/effects/';
import { router } from './shared/routers/';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    HomeComponent,
    GalleryVrComponent,

    ExploreComponent,
    ExhibitVrComponent,
    ExhibitInfoComponent,
    ExhibitListComponent,
    ExploreTipComponent,

    InfoComponent,
    LocationIconComponent,
    MapComponent,
    VisitComponent
  ],
  imports: [
    RouterModule.forRoot(router),

    StoreModule.provideStore(
      compose(
        storeFreeze,
        storeLogger({
          collapsed: true,
          duration: false,
          timestamp: false
        }),
        combineReducers
      )({
        router: routerReducer,

        explore: exploreReducer
      })
    ),

    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),  // note that you must instrument after importing StoreModule

    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBKJQsnSfack7v84h-eHkOZBtC6ZHLBFwI'
    }),

    EffectsModule.run(ExploreEffects),

    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    ExploreService
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
