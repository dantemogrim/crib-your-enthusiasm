import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, FooterComponent, RouterOutlet],
  template: `
    <app-header></app-header>
    <main>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = 'crazy-cool-cribs';
}
