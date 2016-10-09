import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vm-explore-tip',
  styles: [`
    .wrapper {
      height: 1rem;
      right: 3rem;
      position: absolute;
      z-index: 200;
    }
  `],
  template: `
    <div class="wrapper">
      <ngb-alert *ngIf="!staticAlertClosed"
                 type="success"
                 (close)="staticAlertClosed = true">
        Try to double click the dinosaur!
      </ngb-alert>
    </div>
  `
})
export class ExploreTipComponent implements OnInit {
  staticAlertClosed = false;

  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 3000);
  }
}
