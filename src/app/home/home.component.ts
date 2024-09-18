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
      <form class="flex justify-center items-center gap-2">
        <input
          class="rounded-full border border-gray-900 bg-transparent py-1 px-6"
          type="text"
          placeholder="filter by city"
        />
        <button
          class="align-middle select-none font-text-center rounded-full border border-gray-900 py-1 px-6"
          type="button"
        >
          search
        </button>
      </form>
    </section>
    <section
      class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
    >
      <app-crib *ngFor="let crib of cribList" [crib]="crib"></app-crib>
    </section>
  `,
})
export class HomeComponent {
  cribList: Crib[] = cribData;
}
