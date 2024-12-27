import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';
import { AboutPageComponent } from './features/about-page/about-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'about',component: AboutPageComponent},
    { path: '**', redirectTo: '' },
];