import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-spoiler',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      [ngClass]="{
        'opacity-full h-20 p-3': showSpoiler,
        'opacity-0 h-0': !showSpoiler
      }"
      class="w-72 flex flex-col rounded-b-xl items-center text-center justify-center text-black bg-amber-400 transform transition-all duration-300"
    >
      <ng-content class="duration-700"></ng-content>
    </div>
  `,
})
export class SpoilerComponent {
  @Input() showSpoiler: boolean = false;
  @Output() showSpoilerChange = new EventEmitter<boolean>();
}
