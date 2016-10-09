import { Injectable } from '@angular/core';
// import { Http, URLSearchParams } from '@angular/http';
// import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import { requestOptions, extractData, handleError } from '../../shared/lib/';

@Injectable()
export class ExploreService {
  // pixabay API only let developers get image info, but not allowing show images
  //
  // private url = 'https://pixabay.com/api';
  // private key = 'key';
  //
  // constructor(
  //   // private _http: Http,
  //   private _jsonp: Jsonp
  // ) {}
  //
  //
  // getExhibits(): Observable<any> {
  //   let params = new URLSearchParams();
  //   params.set('key', this.key);
  //   params.set('callback', 'JSONP_CALLBACK');
  //   params.set('image_type', 'photo');
  //   params.set('q', 'art+exhibit');
  //
  //   return this._jsonp
  //     .get(`${this.url}`, { search: params })
  //     .map(extractData)
  //     .catch(handleError);
  // }

  getExhibits(): Observable<any> {
    return Observable.of({
      exhibits: [
        {
          _id: '1',
          url: '/assets/img/1.png',
          objUrl: '/assets/img/1.obj',
          title: 'Stan le T. rex',
          description: 'T. rex, the "tyrant lizard king" is one of the largest terrestrial carnivores and could be as long as 15 metres!',
          has3d: true
        },
        {
          _id: '2',
          url: '/assets/img/2.png',
          title: 'Music Mounted on an Eagle',
          description: 'The Statue shows a detail from "Die Musik": model for the southern tympanum, Gottfried Semper`s first Hoftheater in Dresden, 1839',
          has3d: false
        },
        {
          _id: '3',
          url: '/assets/img/3.png',
          title: 'Horse Armor of Duke Ulrich of Württemberg, for use in the field',
          description: 'This horse armor is the earliest complete example outside of Europe, and one of only a handful of such early date in the world.',
          has3d: false
        },
        {
          _id: '4',
          url: '/assets/img/4.png',
          title: 'Armor for use on horseback in the field',
          description: 'This armor is one of a few complete, or reasonably complete, European field armors surviving from the beginning of the sixteenth century.',
          has3d: false
        },
        {
          _id: '5',
          url: '/assets/img/5.png',
          title: 'Kuruma-Dansu (Chest of Drawers)',
          description: 'Large wood chest on four on four wood wheels. Enclosed on three sides with two sliding door panels on the front.',
          has3d: false
        },
        {
          _id: '6',
          url: '/assets/img/6.png',
          title: 'Caméra Technicolor trichrome à trois films 35 mm ouverte',
          description: '',
          has3d: false
        }
      ]
    });
  }
}
