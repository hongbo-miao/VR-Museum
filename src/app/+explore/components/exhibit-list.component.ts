import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Exhibit } from '../models/';

@Component({
  selector: 'vm-exhibit-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .wrapper {
      overflow-y: scroll;
      height: 90vh;
    }
    
    img {
      width: 100%;
    }
  `],
  template: `
    <div class="wrapper">
      <div *ngFor="let exhibit of exhibits">
        <img [src]="exhibit.url"
             (click)="onSelectExhibit(exhibit)">
        <div class="m-b-1"></div>
      </div>
    </div>
  `
})
export class ExhibitListComponent {
  @Input() exhibits: Exhibit[];
  @Output() selectExhibit = new EventEmitter<Exhibit>();

  private onSelectExhibit(exhibit: Exhibit) {
    this.selectExhibit.emit(exhibit);
  }
}
