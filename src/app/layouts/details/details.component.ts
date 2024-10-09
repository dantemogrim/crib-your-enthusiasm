import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';

import { Crib } from '../../components/crib/crib.types';
import { CribService } from '../../components/crib/crib.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `<div
    class="mx-auto w-fit flex flex-col justify-center items-center"
  >
    <article class="mt-10 mb-5 w-96 shadow-md rounded-xl bg-red-100/50">
      <img
        class="w-96 h-96 object-cover rounded-t-xl"
        [src]="cribId?.photo"
        [alt]="cribId?.alt"
      />
      <div class="w-full px-4 py-3">
        <h2 class="text-2xl mb-4">{{ cribId?.address }}</h2>
        <div class="flex flex-col">
          <div class="flex mb-4">
            <img alt="Pin" src="/icons/pin_mat-000-24.svg" />
            <p>{{ cribId?.city }}, {{ cribId?.state }}</p>
          </div>
          <p class="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            nostrum ullam inventore cumque ea cum totam, aliquam repellendus
            mollitia. Quod sequi vero, illum laborum deserunt nulla id hic.
            Nesciunt, saepe?
          </p>
        </div>
      </div>
    </article>
    <!-- TODO - component: link (NOTE! What to do with "see more"?) -->
    <button class="my-4" (click)="goBack()">
      <img alt="Arrow back" src="/icons/arrow-back_mat-000-24.svg" />
    </button>
  </div>`,
})
export class DetailsComponent {
  // Access the URL param (Crib.id) from the ActivatedRoute service.
  route: ActivatedRoute = inject(ActivatedRoute);
  cribService = inject(CribService);
  cribId: Crib | undefined;

  location = inject(Location);

  constructor() {
    const cribId = Number(this.route.snapshot.params['id']);
    this.cribId = this.cribService.getCribById(cribId);
  }

  goBack() {
    this.location.back();
  }
}
