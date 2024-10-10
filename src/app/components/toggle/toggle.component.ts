import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      [ngClass]="{ 'eye-open': isOpen, 'eye-close': !isOpen }"
      class="w-6"
      (click)="toggle()"
    >
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
          <path id="eye-bottom" d="m0,0q140,190 280,0" stroke="currentColor" />
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
  `,
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent {
  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  toggle() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }
}
