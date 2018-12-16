import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { RolesComponent } from './roles/roles.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { PeriodoComponent } from './periodo/periodo.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DocenteComponent } from './docente/docente.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    RolesComponent,
    AdministradorComponent,
    PeriodoComponent,
    CicloComponent,
    DocenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
