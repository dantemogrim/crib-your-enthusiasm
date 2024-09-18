import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `<footer class="flex justify-center items-center py-5 md:py-10">
    <p class="pt-3 italic">© {{ year }}</p>
  </footer>`,
})
export class FooterComponent {
  year: number = new Date().getFullYear();
}
