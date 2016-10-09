import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vm-location-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .wrapper {
      height: 33rem;
      position: absolute;
      opacity: .3;
    }
  `],
  template: `
    <img class="wrapper" src="assets/img/location.png">
  `
})
export class LocationIconComponent {}
