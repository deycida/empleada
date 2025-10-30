import { bootstrapApplication } from '@angular/platform-browser';
import { EmpleadosComponent } from './app/empleados/empleados';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(EmpleadosComponent, {
  providers: [provideHttpClient()]
});
