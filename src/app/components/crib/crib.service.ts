import { Injectable } from '@angular/core';
import { Crib } from '../crib/crib';
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

  submitGuess(guess: string) {
    console.log('Received guess: ', guess);
  }
}
