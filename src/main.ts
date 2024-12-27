import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import {routes} from './app/app.routes'

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), // Enables animations globally
    provideAnimationsAsync(),
    appConfig.providers,
  ],
}).catch(err => console.error(err));
