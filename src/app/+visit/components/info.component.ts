import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vm-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .wrapper {
      text-align: right;
    }
    
    .content {
      color: gray;
      font-size: 1.5rem;
    }
    
    .contact {
      color: lightgray;
    }
  `],
  template: `
    <div class="wrapper">
      <h6 class="display-4 vm-thin">TODAY'S HOURS</h6>
      <p class="content">10:30 a.m.–5:30 p.m.</p>
      
      <div class="m-t-3"></div>
      
      <a class="contact" target="_blank" href="https://github.com/Hongbo-Miao">https://github.com/Hongbo-Miao</a>
    </div>
  `
})
export class InfoComponent {}
