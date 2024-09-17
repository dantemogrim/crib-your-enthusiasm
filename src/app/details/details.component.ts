import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `<p>details works!</p>`,
})
export class DetailsComponent {
  // Access the URL param (Crib.id) from the ActivatedRoute service.
  route: ActivatedRoute = inject(ActivatedRoute);
  cribId = 0;

  constructor() {
    this.cribId = Number(this.route.snapshot.params['id']);
  }
}
