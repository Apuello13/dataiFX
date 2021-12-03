import { Injectable } from "@angular/core";
import { Persona } from "../models/persona";

@Injectable()
export class EstudianteService{
    estudiante : Persona | null = null;

    saveEstudiante(estudiante : Persona){
        this.estudiante = estudiante;
    }

    getEstudiante() : Persona | null{
        return this.estudiante;
    }
}