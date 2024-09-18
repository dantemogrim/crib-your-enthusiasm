import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Crib } from './crib';

@Component({
  selector: 'app-crib',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<section
    class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
  >
    <img
      class="h-80 w-72 object-cover rounded-t-xl"
      [src]="crib.photo"
      [alt]="crib.alt"
    />
    <div class="px-4 py-3 w-72">
      <h2 class="text-xl">{{ crib.address }}</h2>
      <div class="flex">
        <img alt="Pin" src="/icons/pin_mat-000-24.svg" />
        <p>{{ crib.city }}, {{ crib.state }}</p>
      </div>
      <a [routerLink]="['/details', crib.id]">Read more</a>
    </div>
  </section>`,
})
export class CribComponent {
  // We're saying that the component's interface
  // (👆 dynamically inserted above) is mandatory.
  @Input() crib!: Crib;
}
