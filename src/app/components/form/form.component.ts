import { Component, inject } from '@angular/core';
import { CribService } from '../crib/crib.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div
      style="animation: slideInFromLeft 1s ease-out;"
      class="max-w-md w-full border border-blue-600 rounded-xl  p-8 space-y-8"
    >
      <h3
        style="animation: appear 2s ease-out;"
        class="text-center text-xl font-extrabold text-blue-600"
      >
        What's this crib known from?
      </h3>
      <form [formGroup]="guessForm" (ngSubmit)="onSubmit()" class="space-y-6">
        <div class="relative">
          <input
            placeholder="Your Guess"
            formControlName="guess"
            class="peer h-10 w-full border-b-2 border-blue-300 bg-transparent placeholder-transparent focus:outline-none focus:border-blue-600"
            name="text"
            type="text"
            required
          />
          <label
            class="absolute left-0 -top-3.5 text-blue-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm"
            for="text"
            >Your Guess</label
          >
        </div>

        <button
          class="w-full py-2 px-4 text-white bg-blue-500 hover:bg-blue-700 rounded-md shadow-lg font-semibold transition duration-200"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  `,
})
export class FormComponent {
  cribService = inject(CribService);
  guessForm = new FormGroup({
    guess: new FormControl(''),
  });

  onSubmit() {
    // const guess = this.guessForm.value.guess;
    this.cribService.submitGuess(this.guessForm.value.guess ?? 'nah');
  }
}
