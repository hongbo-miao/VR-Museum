import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import * as _ from 'lodash';

const headers = new Headers({ 'Content-Type': 'application/json' });
export const requestOptions = new RequestOptions({ headers });

export function extractData(res: Response): any {
  const body = res.json();
  return !_.isUndefined(body) ? body : {};
}

export function handleError(res: Response) {
  const error = res.json();

  const errorMessage = error.message ? error.message :
    res.status ? `${res.status} - ${res.statusText}` : 'Server error';

  return Observable.throw(errorMessage);
}
