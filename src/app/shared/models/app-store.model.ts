import { RouterState } from '@ngrx/router-store';

import { ExploreState } from '../../+explore/reducers/';

export interface AppState {
  router: RouterState,

  explore: ExploreState
}
