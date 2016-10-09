import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../shared/models/';
import { Exhibit } from '../models/';
import { ExploreState } from '../reducers/';
import { ExploreActions } from '../actions/';

@Component({
  selector: 'vm-explore',
  styles: [`
    .info-wrapper {
      position: absolute;
      z-index: 100;
      
      background-color: #fff;
      opacity: .7;
    }
  `],
  template: `
    <div class="col-xs-2">
      <vm-exhibit-list
        [exhibits]="(exploreModel$ | async)?.exhibits"
        (selectExhibit)="onSelectExhibit($event)">
      </vm-exhibit-list>
    </div>

    <div class="col-xs-10">
      <div class="info-wrapper">
        <vm-exhibit-info
          [exhibit]="(exploreModel$ | async)?.exhibit">
        </vm-exhibit-info>
      </div>
      <vm-exhibit-vr
        [exhibit]="(exploreModel$ | async)?.exhibit">
      </vm-exhibit-vr>
    </div>
    
    <vm-explore-tip></vm-explore-tip>
  `
})
export class ExploreComponent implements OnInit {
  exploreModel$: Observable<ExploreState>;
  exhibits: Exhibit[];
  exhibit: Exhibit;

  constructor(
    private _store: Store<AppState>
  ) {}

  ngOnInit() {
    this.exploreModel$ = this._store.select<ExploreState>('explore');

    this._store.dispatch({ type: ExploreActions.EXPLORE_GET_EXHIBITS });
  }

  private onSelectExhibit(exhibit: Exhibit) {
    this._store.dispatch({ type: ExploreActions.EXPLORE_SELECT_EXHIBIT, payload: exhibit });
  }
}
