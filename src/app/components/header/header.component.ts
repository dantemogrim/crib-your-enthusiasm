import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: ` <header class="flex flex-col items-center pb-5 md:pb-10">
    <a [routerLink]="['/']" class="flex items-center">
      <img
        class="w-20"
        src="/photos/larry-pixel.png"
        alt="Larry David's face as pixel art"
        aria-hidden="true"
      />
      <h1 class="font-silk text-2xl md:text-4xl px-2">Crib Your Enthusiasm</h1>
    </a>
    <h2 class="text-lg md:text-xl italic mb-2">
      Iconic houses have never looked this good.
    </h2>
    <section class="p-3 bg-blue-300 rounded-xl my-2  text-blue-900">
      <h3 class="text-sm md:text-md">
        Are you able to guess which house belongs to which movie/series?
      </h3>
      <h4 class="font-bold text-xs md:text-sm">
        Tap on a listing's arrow to guess where each house is known from.
      </h4>
    </section>
  </header>`,
})
export class HeaderComponent {}
