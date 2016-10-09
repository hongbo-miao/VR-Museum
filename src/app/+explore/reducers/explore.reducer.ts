import { ActionReducer, Action } from '@ngrx/store';

import { Exhibit } from '../models/';
import { ExploreActions } from '../actions/';

export interface ExploreState {
  exhibits?: Exhibit[],
  exhibit?: Exhibit
}

const initialState: ExploreState = {};

export const exploreReducer: ActionReducer<ExploreState> = (state = initialState, action: Action) => {
  switch (action.type) {
    case ExploreActions.EXPLORE_GET_EXHIBITS_SUCCESS: {
      const exhibits = action.payload.exhibits;
      return Object.assign({}, state, { exhibits, exhibit: exhibits[0] });
    }

    case ExploreActions.EXPLORE_SELECT_EXHIBIT: {
      return Object.assign({}, state, { exhibit: action.payload });
    }

    default: {
      return state;
    }
  }
};
