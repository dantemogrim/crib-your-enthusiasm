import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Crib } from './crib.types';
import { SpoilerToggleComponent } from '../spoiler-toggle/spoiler-toggle.component';

@Component({
  selector: 'app-crib',
  standalone: true,
  imports: [CommonModule, RouterModule, SpoilerToggleComponent],
  template: `
    <section class="w-72 flex flex-col justify-center items-center">
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
      <div class="w-full p-5 bg-teal-500">
        <h2 class="text-xl mb-4">{{ crib.address }}</h2>
        <div class="flex justify-between">
          <div class="flex">
            <img alt="Pin" src="/icons/pin_mat-000-24.svg" />
            <p>{{ crib.city }}, {{ crib.state }}</p>
          </div>
        </div>
      </div>
      <div
        class=" w-full bg-blue-500 duration-500 flex flex-col justify-center items-center"
      >
        <p>{{ crib.knownFrom }}</p>
        <a [routerLink]="['/details', crib.id]" class="flex">
          read more
          <img
            class="duration-200 hover:scale-125 active:scale-100"
            alt="Arrow"
            src="/icons/arrow-forward_mat-000-24.svg"
          />
        </a>
      </div>

      <button
        class="w-16 flex justify-center items-center h-8 rounded-b-full bg-green-300 shadow-md"
      >
        <img
          class="duration-200 hover:scale-125 active:scale-100"
          src="/icons/eye_mat-000-24.svg"
          alt="Eye"
        />
      </button>
    </section>
    <!-- <div class="card work w-40 h-28 grid grid-rows-1 group">
      <div class="card-desc bg-blue-500">
        <div class="card-header">
          <div class="card-title">Play</div>
          <div class="card-menu"></div>
        </div>
        <div class="card-time">32hrs</div>
        <p class="recent">Last Week-36hrs</p>
      </div>

      <app-spoiler-toggle></app-spoiler-toggle>
    </div> -->
  `,
})
export class CribComponent {
  // We're saying that the component's interface
  // (👆 dynamically inserted above) is mandatory.
  @Input() crib!: Crib;
  // showSpoiler: boolean = false;

  // toggleSpoiler() {
  //   this.showSpoiler = !this.showSpoiler; // Toggle the showSpoiler state
  // }
}
