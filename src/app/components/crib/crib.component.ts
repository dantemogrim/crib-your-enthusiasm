import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Crib } from './crib';

@Component({
  selector: 'app-crib',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section
      class="w-72 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
    >
      <div class="grid grid-cols-1 grid-rows-1">
        <img
          class="col-span-full row-span-full h-80 object-cover rounded-t-xl"
          [src]="crib.photo"
          [alt]="crib.alt"
        />
        <div
          class=" bg-orange-500/20 col-span-full row-span-full rounded-t-xl"
        ></div>
      </div>
      <div class="p-5 bg-red-100/50">
        <h2 class="text-xl mb-4">{{ crib.address }}</h2>
        <div class="flex justify-between">
          <div class="flex">
            <img alt="Pin" src="/icons/pin_mat-000-24.svg" />
            <p>{{ crib.city }}, {{ crib.state }}</p>
          </div>
          <a [routerLink]="['/details', crib.id]">
            <img
              class="duration-200 hover:scale-125 active:scale-100"
              alt="Arrow"
              src="/icons/arrow-forward_mat-000-24.svg"
            />
          </a>
        </div>
      </div>
    </section>
  `,
})
export class CribComponent {
  // We're saying that the component's interface
  // (👆 dynamically inserted above) is mandatory.
  @Input() crib!: Crib;
}
