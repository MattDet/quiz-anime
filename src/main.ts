import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Démarrer l'application avec bootstrapApplication
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Configurer le routage avec provideRouter
  ]
})
.catch(err => console.error(err));
