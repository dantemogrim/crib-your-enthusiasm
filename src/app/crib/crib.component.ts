import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Crib } from './crib';
import { CribService } from '../services/crib.service';

@Component({
  selector: 'app-crib',
  standalone: true,
  imports: [CommonModule],
  template: `<section
    class="flex flex-col bg-green-300 justify-center items-start py-5 my-10 rounded-xl"
  >
    <img class="" [src]="crib.photo" [alt]="crib.alt" />
    <h2>{{ crib.address }}</h2>
    <div class="flex">
      <img alt="Pin" src="/icons/pin_mat-000-24.svg" />
      <p>{{ crib.city }}, {{ crib.state }}</p>
    </div>
  </section>`,
})
export class CribComponent {
  // We're saying that the component's interface
  // (👆 dynamically inserted above) is mandatory.
  @Input() crib!: Crib;
}
