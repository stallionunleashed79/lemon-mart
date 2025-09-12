import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '*', component: PageNotFoundComponent },
];
