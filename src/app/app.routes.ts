import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';



import { EstudianteComponent } from './estudiante/estudiante.component';
import { RolesComponent } from './roles/roles.component';


const app_routes: Routes = [
    
    { path: 'estudiante', component: EstudianteComponent},
    { path: 'roles', component:RolesComponent},
 
  ];

export const app_routing = RouterModule.forRoot(app_routes);