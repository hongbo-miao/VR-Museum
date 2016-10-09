import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { ExploreActions } from '../actions/';
import { ExploreService } from '../services/';

@Injectable()
export class ExploreEffects {
  constructor(
    private actions$: Actions,
    private _exploreService: ExploreService
  ) {}

  @Effect() getExhibits$ = this.actions$
    .ofType(ExploreActions.EXPLORE_GET_EXHIBITS)
    .switchMap(() => this._exploreService.getExhibits()
      .map(exhibits => ({ type: ExploreActions.EXPLORE_GET_EXHIBITS_SUCCESS, payload: exhibits }))
      .catch(error => Observable.of({ type: ExploreActions.EXPLORE_GET_EXHIBITS_FAIL, payload: error }))
    );
}
