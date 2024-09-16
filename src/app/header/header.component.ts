import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: ` <header class="flex items-center pb-5 md:pb-10">
    <img
      class="brand-logo"
      src="/icons/home_mat-000-24.svg"
      width="50"
      height="50"
      alt="logo"
      aria-hidden="true"
    />
    <h1 class="font-silk text-4xl px-2">Crazy Cool Cribs</h1>
  </header>`,
})
export class HeaderComponent {}
