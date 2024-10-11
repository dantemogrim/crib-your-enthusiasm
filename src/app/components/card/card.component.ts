import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Crib } from '../../utils/crib/crib.types';
import { ToggleComponent } from '../toggle/toggle.component';
import { SpoilerComponent } from '../spoiler/spoiler.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    RouterModule,
    SpoilerComponent,
    ToggleComponent,
  ],
  template: `
    <section
      [ngClass]="{ '': showAnswer, '': !showAnswer }"
      class="w-72 shadow-xl rounded-xl bg-teal-700 text-white flex flex-col justify-center items-center"
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
      <div class="w-full p-5 rounded-b-xl">
        <h3 class="font-clarendon text-xl">{{ crib.address }}</h3>
        <div class="flex justify-between">
          <div class="flex items-end">
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
            <p class="mx-2">{{ crib.city }}, {{ crib.state }}</p>
          </div>
          <app-toggle [(isOpen)]="showAnswer"></app-toggle>
        </div>
      </div>
      <app-spoiler [(showSpoiler)]="showAnswer">
        <p class="text-lg font-bold mb-2">{{ crib.knownFrom }}</p>
        <a [routerLink]="['/details', crib.id]" class="hover:underline">
          read more
        </a>
      </app-spoiler>
    </section>
  `,
})
export class CardComponent {
  // We're saying that the component's interface
  // (👆 dynamically inserted above) is mandatory.
  @Input() crib!: Crib;
  showAnswer: boolean = false;
}
