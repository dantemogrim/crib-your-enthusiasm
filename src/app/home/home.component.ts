import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Crib, cribData } from '../crib/crib';
import { CribComponent } from '../crib/crib.component';
import { CribService } from '../services/crib.service';

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
  cribService: CribService = inject(CribService);
  constructor() {
    this.cribList = this.cribService.getAllCribs();
  }

  // Will be an array of the Crib interface.
  cribList: Crib[] = [...cribData];
}
