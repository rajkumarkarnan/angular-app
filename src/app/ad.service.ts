import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(
        HeroProfileComponent,
        { name: 'User A', bio: 'UK Customer...' }
      ),
      new AdItem(
        HeroProfileComponent,
        { name: 'User B', bio: 'UK Customer...' }
      ),
      new AdItem(
        HeroJobAdComponent,
        { headline: 'User C', body: 'Indian Customer..' }
      ),
      new AdItem(
        HeroJobAdComponent,
        { headline: 'User D', body: 'Indian Customer...' }
      )
    ];
  }
}
