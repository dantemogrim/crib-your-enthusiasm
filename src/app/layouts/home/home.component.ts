import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../../components/card/card.component';
import { Crib } from '../../utils/crib/crib.types';
import { SearchComponent } from '../../components/search/search.component';
import cribData from '../../utils/crib/cribs.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent, CardComponent],
  template: `
    <div class="flex flex-col justify-center items-center">
      <app-search (searchEvent)="filterResults($event)"></app-search>
      <section
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-14 my-10"
      >
        <app-card
          *ngFor="let crib of filteredCribList"
          [crib]="crib"
        ></app-card>
      </section>
    </div>
  `,
})
export class HomeComponent {
  cribList: Crib[] = cribData;
  filteredCribList: Crib[];

  constructor() {
    this.filteredCribList = this.cribList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredCribList = this.cribList;
      return;
    }

    this.filteredCribList = this.cribList.filter(
      (crib) =>
        crib?.city.toLowerCase().includes(text.toLowerCase()) ||
        crib?.address.toLowerCase().includes(text.toLowerCase())
    );
  }
}
