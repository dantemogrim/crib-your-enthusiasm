import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CalloutComponent } from '../callout/callout.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CalloutComponent],
  template: ` <header class="flex flex-col items-center py-5 md:pb-10">
    <a [routerLink]="['/']" class="flex justify-center items-center mb-2">
      <!-- <img
        class="w-20"
        src="/photos/larry.png"
        alt="Larry David's face as pixel art"
        aria-hidden="true"
      /> -->
      <h1 class="font-clarendon font-black text-3xl sm:text-5xl text-amber-500">
        Crib Your Enthusiasm
      </h1>
    </a>
    <h2 class="text-xs sm:text-lg italic mb-2">
      Iconic houses have never looked this good.
    </h2>
    <app-callout>
      <h3 class="text-md">
        Are you able to figure out which house belongs to which movie/series?
      </h3>
      <h4 class="font-bold text-sm">
        👁️ Tap an "eye-con" to reveal the answer. 👁️
      </h4>
    </app-callout>
  </header>`,
})
export class HeaderComponent {
  // TODO - if user is on home page, show callout. otherwise nah.
}
