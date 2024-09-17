import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Crib } from './crib';

@Component({
  selector: 'app-crib',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<section
    class="flex flex-col bg-green-300 justify-center items-start py-5 my-10 rounded-xl"
  >
    <img class="" [src]="crib.photo" [alt]="crib.alt" />
    <h2 class="text-xl">{{ crib.address }}</h2>
    <div class="flex">
      <img alt="Pin" src="/icons/pin_mat-000-24.svg" />
      <p>{{ crib.city }}, {{ crib.state }}</p>
    </div>
    <a [routerLink]="['/details', crib.id]">Read more</a>
  </section>`,
})
export class CribComponent {
  // We're saying that the component's interface
  // (👆 dynamically inserted above) is mandatory.
  @Input() crib!: Crib;
}
