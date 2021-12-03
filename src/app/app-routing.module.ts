import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { FormEstudianteComponent } from './pages/form-estudiante/form-estudiante.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/personajes', pathMatch: 'full' },
      { path: 'personajes', component: PersonajesComponent },
      { path: 'profesores', component: ProfesoresComponent },
      { path: 'estudiantes', component: EstudiantesComponent }
    ]
  },
  { path: 'estudiante-form', component: FormEstudianteComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
