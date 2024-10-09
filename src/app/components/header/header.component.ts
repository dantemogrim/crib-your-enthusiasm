import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: ` <header class="flex flex-col items-center py-5 md:pb-10">
    <a [routerLink]="['/']" class="flex items-center">
      <!-- <img
        class="w-20"
        src="/photos/larry.png"
        alt="Larry David's face as pixel art"
        aria-hidden="true"
      /> -->
      <h1
        class="font-franklin font-black text-4xl md:text-5xl mb-4 text-yellow-500"
      >
        Crib Your Enthusiasm
      </h1>
    </a>
    <!-- TODO - component: alert -->
    <h2 class="text-lg md:text-xl italic mb-2">
      Iconic houses have never looked this good.
    </h2>
    <section class="p-3 bg-blue-300 rounded-xl my-2  text-blue-900">
      <h3 class="text-sm md:text-md">
        Can you guess which house belongs to which movie/series?
      </h3>
      <h4 class="font-bold text-xs md:text-sm">
        👁️ Tap on a listing's eye icon to reveal the answer. 👁️
      </h4>
    </section>
  </header>`,
})
export class HeaderComponent {
  // TODO - if user is on home page, show alert. otherwise nah.
}
