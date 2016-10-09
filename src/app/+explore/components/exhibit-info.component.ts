import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Exhibit } from '../models/';

@Component({
  selector: 'vm-exhibit-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .wrapper {
      width: 40rem;
    }
    
    .content {
      color: gray;
    }
  `],
  template: `
    <div class="wrapper vm-disable-selection">
      <h5>{{exhibit.title}}</h5>
      <p class="content">{{exhibit.description}}</p>
    </div>
  `
})
export class ExhibitInfoComponent {
  @Input() exhibit: Exhibit;
}
