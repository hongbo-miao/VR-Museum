import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vm-gallery-vr',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .wrapper {
      position: relative;
    }

    .title {
      left: 0;
      position: absolute;
      text-align: center;
      top: 13rem;
      width: 100%;
      color: #fff;
      background: #000;
      opacity: .4;
      padding: 4rem;
    }
  `],
  template: `
    <div class="wrapper">
      <a-scene>
        <a-sky id="image-360" radius="10" src="assets/img/gallery.jpg">
          <a-animation attribute="rotation"
                       from="0 -30 0"
                       to="0 330 0"
                       dur="30000"
                       easing="linear"
                       repeat="indefinite">
          </a-animation>
        </a-sky>
      </a-scene>

      <h1 class="display-4 title vm-disable-selection">VR Museum</h1>
    </div>
  `
})
export class GalleryVrComponent {}
