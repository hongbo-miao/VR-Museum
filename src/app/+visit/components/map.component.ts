import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vm-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .wrapper {
      margin: 11rem 0 0 21rem;
      /*background: linear-gradient(to right, #f6f8fa , #fff);*/
    }
    
    .sebm-google-map-container {
      height: 300px;
    }
  `],
  template: `    
    <div class="wrapper">
      <sebm-google-map [latitude]="lat" [longitude]="lng">
        <sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>
      </sebm-google-map>
    </div>
  `
})
export class MapComponent {
  lat: number = 42.3411822;
  lng: number = -83.0603206;
}
