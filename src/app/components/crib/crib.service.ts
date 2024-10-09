import { Injectable } from '@angular/core';
import { Crib } from './crib.types';
import cribData from '../crib/cribs.json';

@Injectable({
  providedIn: 'root',
})
export class CribService {
  cribCollection: Crib[] = [...cribData];

  getAllCribs(): Crib[] {
    return this.cribCollection;
  }

  getCribById(id: number): Crib | undefined {
    return this.cribCollection.find((crib) => crib.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
