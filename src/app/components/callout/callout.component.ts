import { Component } from '@angular/core';

@Component({
  selector: 'app-callout',
  standalone: true,
  imports: [],
  template: `<section
    class="p-3 bg-blue-300 text-center rounded-xl my-2  text-blue-900 max-w-560"
  >
    <ng-content />
  </section>`,
})
export class CalloutComponent {}
