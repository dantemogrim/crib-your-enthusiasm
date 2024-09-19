import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CribService } from '../crib/crib.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section
      class="max-w-md w-full border border-blue-600 rounded-xl  p-8 space-y-8"
    >
      <h2 class="text-center text-xl font-extrabold text-blue-600">
        Make a (fake) application to "live here"
      </h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <input
          class="peer h-10 w-full border-b-2 border-blue-300 bg-transparent  focus:outline-none focus:border-blue-600"
          id="first-name"
          type="text"
          formControlName="firstName"
          placeholder="first name"
        />
        <input
          class="peer h-10 w-full border-b-2 border-blue-300 bg-transparent  focus:outline-none focus:border-blue-600"
          id="last-name"
          type="text"
          formControlName="lastName"
          placeholder="last name"
        />
        <input
          class="peer h-10 w-full border-b-2 border-blue-300 bg-transparent  focus:outline-none focus:border-blue-600"
          id="email"
          type="email"
          formControlName="email"
          placeholder="email"
        />
        <button
          type="submit"
          class="w-full py-2 px-4 mt-6 text-white bg-blue-500 hover:bg-blue-700 rounded-md shadow-lg font-semibold transition duration-200"
        >
          Apply now
        </button>
      </form>
    </section>
  `,
})
export class FormComponent {
  cribService = inject(CribService);
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  submitApplication() {
    this.cribService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
