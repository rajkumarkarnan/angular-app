import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

    </div>
  `
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}


