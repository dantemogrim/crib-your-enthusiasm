import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';

import { Crib } from '../../utils/crib/crib.types';
import { CribService } from '../../utils/crib/crib.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article
      class="mx-auto flex flex-col justify-center items-center max-w-500"
    >
      <div class="grid grid-cols-1 grid-rows-1 w-fit rounded-xl">
        <img
          class="col-span-full row-span-full h-80 object-cover rounded-xl"
          [src]="cribId?.photo"
          [alt]="cribId?.alt"
        />
        <div
          class="bg-orange-500/20 col-span-full row-span-full rounded-xl"
        ></div>
      </div>

      <div class="w-full p-6 m-6 rounded-xl bg-teal-700 text-white shadow-xl">
        <h2 class="text-2xl mb-4 font-clarendon">{{ cribId?.address }}</h2>
        <div class="flex flex-col">
          <div class="flex items-end mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
              stroke="none"
            >
              <path
                d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
              />
            </svg>
            <p class="mx-2">{{ cribId?.city }}, {{ cribId?.state }}</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            nostrum ullam inventore cumque ea cum totam, aliquam repellendus
            mollitia. Quod sequi vero, illum laborum deserunt nulla id hic.
            Nesciunt, saepe?
          </p>
        </div>
      </div>
      <button (click)="goBack()">
        <img alt="Arrow back" src="/icons/arrow-back_mat-000-24.svg" />
      </button>
    </article>
  `,
  styles: [``],
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
