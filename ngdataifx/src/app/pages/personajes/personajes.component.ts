import { Component, OnInit } from "@angular/core";
import { HogwartsService } from "src/app/core/services/hogwarts.service";
import { Persona } from "../models/persona";

@Component({
    selector: 'app-personajes',
    templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit{
    escuelas : string[] = [];
    personajes : Persona[] = [];
    constructor(
        private _hogwarts : HogwartsService
    ){}

    ngOnInit() : void{
        this.loadSelect();
    }

    loadSelect(){
        const escuelas = ["slytherin", "gryffindor", "ravenclaw", "hufflepuff"];
        this.escuelas = escuelas;
    }

    getEscuela(event : any){
        const escuela = event.target.value;
        this._hogwarts.getCharacterBySchool(escuela)
            .subscribe((response) => {
                this.personajes = response;
                console.log(response);
            }, badRequest => {
                console.log(badRequest);
            })
    }
}