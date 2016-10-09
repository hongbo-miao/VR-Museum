import { Component, Input, OnChanges, SimpleChange, ChangeDetectionStrategy } from '@angular/core';

import { Exhibit } from '../models/';

@Component({
  selector: 'vm-exhibit-vr',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a-scene *ngIf="!show3d" (dblclick)="onToggle()" >
      <a-curvedimage [attr.src]="exhibit?.url"
                     radius="5.7"
                     theta-start="52"
                     theta-length="90"
                     height="6"
                     position="0 1.3 0"
                     rotation="0 90 0"
                     scale=".8 .8 .8">
      </a-curvedimage>
      
      <a-camera>
        <a-cursor id="cursor">
          <a-animation begin="click"
                       easing="ease-in"
                       attribute="scale"
                       fill="backwards"
                       from="0.1 0.1 0.1"
                       to="1 1 1"
                       dur="150">
          </a-animation>
          <a-animation begin="cursor-fusing"
                       easing="ease-in"
                       attribute="scale"
                       from="1 1 1"
                       to="0.1 0.1 0.1"
                       dur="1500">
          </a-animation>
        </a-cursor>
      </a-camera>
    </a-scene>
    
    
    <a-scene *ngIf="show3d" (dblclick)="onToggle()">
      <a-assets>
        <a-asset-item id="trex-obj"
                      [attr.src]="exhibit?.objUrl">
        </a-asset-item>
        <!--<a-asset-item id="trex-mtl" src="assets/img/1.mtl"></a-asset-item>-->
      </a-assets>
      <!--<a-entity obj-model="obj: #trex-obj; mtl: #trex-mtl" rotation="0 -60 0" position="0 .5 -1.2"></a-entity>-->
      <a-entity obj-model="obj: #trex-obj" rotation="0 -60 0" position="0 .5 -1.2"></a-entity>
    </a-scene>
  `
})
export class ExhibitVrComponent implements OnChanges {
  @Input() exhibit: Exhibit;

  show3d: boolean = false;

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    this.show3d = false;
  }

  private onToggle() {
    if (!this.exhibit.has3d) return;

    this.show3d = !this.show3d;
  }
}
