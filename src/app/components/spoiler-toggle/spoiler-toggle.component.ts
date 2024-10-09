import { Component } from '@angular/core';

@Component({
  selector: 'app-spoiler-toggle',
  standalone: true,
  imports: [],
  template: `
    <div
      class="flex justify-center items-start group-hover:py-4 h-14 group-hover:h-24  bg-green-400 transform group-hover:transition-all group-hover:duration-300 transition-all duration-300"
    >
      <button class="w-8" (click)="toggleSpoiler()">
        <svg
          viewBox="-20 -200 320 400"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g id="eye" stroke-width="25" fill="none">
            <g id="eye-lashes" stroke="currentColor">
              <line x1="140" x2="140" y1="90" y2="180" />
              <line x1="70" x2="10" y1="60" y2="140" />
              <line x1="210" x2="270" y1="60" y2="140" />
            </g>

            <path
              id="eye-bottom"
              d="m0,0q140,190 280,0"
              stroke="currentColor"
            />
            <path id="eye-top" d="m0,0q140,190 280,0" stroke="currentColor" />

            <circle
              id="eye-pupil"
              cx="140"
              cy="0"
              r="40"
              fill="currentColor"
              stroke="none"
            />
          </g>
        </svg>
      </button>
    </div>
  `,
  styleUrls: ['./spoiler-toggle.component.css'],
})
export class SpoilerToggleComponent {
  showSpoiler: boolean = false;

  toggleSpoiler() {
    this.showSpoiler = !this.showSpoiler; // Toggle the showSpoiler state
    const button = document.querySelector('button');
    // button?.classList.toggle('eye-close'); // Toggle the active class on the button
    button?.classList.toggle('eye-open'); // Toggle the active class on the button
  }
}
