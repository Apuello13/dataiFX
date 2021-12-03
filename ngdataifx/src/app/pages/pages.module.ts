import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';
//Component
import { EstudiantesComponent } from "./estudiantes/estudiantes.component";
import { FormEstudianteComponent } from "./form-estudiante/form-estudiante.component";
import { PersonajesComponent } from "./personajes/personajes.component";
import { ProfesoresComponent } from "./profesores/profesores.component";
//Services
import { EstudianteService } from "./services/estudiante.service";

@NgModule({
    declarations: [        
        PersonajesComponent,
        ProfesoresComponent,
        EstudiantesComponent,
        FormEstudianteComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule
    ],
    providers: [
        EstudianteService
    ]
})
export class PagesModule{}