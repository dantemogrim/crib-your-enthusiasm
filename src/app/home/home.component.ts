import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Crib } from '../crib/crib';
import { CribComponent } from '../crib/crib.component';
import cribData from '../crib/cribs.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CribComponent],
  template: `
    <section>
      <form class="flex justify-start items-center gap-2">
        <input
          class="py-1 rounded-md"
          type="text"
          placeholder="Filter by city"
        />
        <button
          class="align-middle select-none font-text-center rounded-full border border-gray-900 py-1 px-6"
          type="button"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-crib *ngFor="let crib of cribList" [crib]="crib"></app-crib>
    </section>
  `,
})
export class HomeComponent {
  cribList: Crib[] = cribData;
}
