import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Crib } from '../../components/crib/crib';
import { CribComponent } from '../../components/crib/crib.component';
import cribData from '../../components/crib/cribs.json';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent, CribComponent],
  template: `
    <div class="flex flex-col justify-center items-center">
      <app-search></app-search>
      <section
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <app-crib *ngFor="let crib of cribList" [crib]="crib"></app-crib>
      </section>
    </div>
  `,
})
export class HomeComponent {
  cribList: Crib[] = cribData;
}
