// src/main.ts
import { provideRouter } from '@angular/router';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Configure the router
    provideClientHydration(), // For server-side rendering hydration
    provideAnimations() // Include animations
  ]
})
.catch(err => console.error(err));

