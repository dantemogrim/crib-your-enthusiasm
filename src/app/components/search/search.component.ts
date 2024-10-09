import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  template: `
    <div
      class="p-3 overflow-hidden w-12 h-12 hover:w-80 bg-green-500 shadow-sm rounded-full flex group items-center hover:duration-300 duration-300"
    >
      <div class="flex items-center justify-center fill-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Isolation_Mode"
          data-name="Isolation Mode"
          viewBox="0 0 24 24"
          width="22"
          height="22"
        >
          <path
            d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        class="outline-none text-md bg-transparent w-full text-white font-normal px-4"
        (input)="onSearch(filter.value)"
        #filter
      />
    </div>
  `,
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(value: string) {
    this.searchEvent.emit(value);
  }
}
