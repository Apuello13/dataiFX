import { Component, OnInit } from "@angular/core";
import { HogwartsService } from "src/app/core/services/hogwarts.service";
import { Persona } from "../models/persona";
import { EstudianteService } from "../services/estudiante.service";

@Component({
    selector: 'app-estudiantes',
    templateUrl: './estudiantes.component.html'
})
export class EstudiantesComponent implements OnInit{
    estudiantes : Persona[] = [];
    constructor(
        private _hogwarts : HogwartsService,
        private _estudiante : EstudianteService
    ){}

    ngOnInit() : void{
        this.getEstudiantes();
    }

    getEstudiantes(){
        this._hogwarts.getEstudiantes()
            .subscribe((response) => {
                this.estudiantes = response;
                this.getEstudiantesByForm();
            }, badRequest => {
                console.log(badRequest);
            })
    }

    getEstudiantesByForm(){
        const estudiante = this._estudiante.getEstudiante();
        if(estudiante)
            this.estudiantes.push(estudiante);
    }
}