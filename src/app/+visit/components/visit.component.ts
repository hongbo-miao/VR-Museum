import { Component } from '@angular/core';

@Component({
  selector: 'vm-visit',
  template: `
    <vm-location-icon></vm-location-icon>
    <vm-info></vm-info>
    <vm-map></vm-map>
  `
})
export class VisitComponent {}
