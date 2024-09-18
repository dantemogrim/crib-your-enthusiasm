import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: ` <header class="flex flex-col items-center pb-5 md:pb-10">
    <div class="flex items-center">
      <img
        class="w-20"
        src="/photos/larry-pixel.png"
        alt="Larry David's face as pixel art"
        aria-hidden="true"
      />
      <h1 class="font-silk text-4xl px-2">Crib Your Enthusiasm</h1>
    </div>
    <h2 class="text-xl italic">Iconic houses have never looked this good.</h2>
    <section class="p-3 bg-blue-300 rounded-xl my-2  text-blue-900">
      <h3 class="text-lg">
        Are you able to guess which house belongs to which movie/series?
      </h3>
      <h4 class="font-bold">
        Tap on one of the listings to reveal where to house is known from.
      </h4>
    </section>
  </header>`,
})
export class HeaderComponent {}
