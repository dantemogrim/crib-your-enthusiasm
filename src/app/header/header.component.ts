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
  </header>`,
})
export class HeaderComponent {}
