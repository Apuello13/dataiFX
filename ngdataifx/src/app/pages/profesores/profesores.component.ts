import { Component, OnInit } from "@angular/core";
import { HogwartsService } from "src/app/core/services/hogwarts.service";
import { Persona } from "../models/persona";

@Component({
    selector: 'app-profesores',
    templateUrl: './profesores.component.html'
})
export class ProfesoresComponent implements OnInit{
    profesores : Persona[] = [];
    constructor(
        private _hogwarts: HogwartsService
    ){}

    ngOnInit() : void{
        this.getProfesores();
    }

    getProfesores(){
        this._hogwarts.getProfesores()
            .subscribe((response) => {
                this.profesores = response;
            }, badRequest => {
                console.log(badRequest);
            })
    }
}