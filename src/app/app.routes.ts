import { Routes } from '@angular/router';

import { DetailsComponent } from './layouts/details/details.component';
import { HomeComponent } from './layouts/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details page',
  },
];
