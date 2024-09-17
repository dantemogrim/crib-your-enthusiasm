import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Crib } from '../crib/crib';
import { CribService } from '../crib/crib.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `<article>
    <img class="listing-photo" [src]="cribId?.photo" [alt]="cribId?.alt" />
    <h1>{{ cribId?.address }}</h1>
    <form [formGroup]="guessForm" (ngSubmit)="onSubmit()">
      <input
        formControlName="guess"
        type="text"
        placeholder="What is this crib known from?"
      />
      <button type="submit">Submit</button>
    </form>
  </article>`,
})
export class DetailsComponent {
  // Access the URL param (Crib.id) from the ActivatedRoute service.
  route: ActivatedRoute = inject(ActivatedRoute);
  cribService = inject(CribService);
  cribId: Crib | undefined;
  guessForm = new FormGroup({
    guess: new FormControl(''),
  });

  constructor() {
    const cribId = Number(this.route.snapshot.params['id']);
    this.cribId = this.cribService.getCribById(cribId);
  }

  onSubmit() {
    // const guess = this.guessForm.value.guess;
    this.cribService.submitGuess(this.guessForm.value.guess ?? 'nah');
  }
}
