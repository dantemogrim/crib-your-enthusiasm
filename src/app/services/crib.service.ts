import { Injectable } from '@angular/core';
import { Crib, cribData } from '../crib/crib';

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
}
