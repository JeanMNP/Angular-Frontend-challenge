import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component.js'

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),   // Necessário para Angular Material
    provideHttpClient(),   // Para chamadas HTTP
    // Aqui você pode adicionar NgRx ou Signals se usar estado global
  ],
}).catch(err => console.error(err));
