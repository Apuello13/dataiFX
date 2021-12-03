import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { Persona } from "src/app/pages/models/persona";
import { environment } from "src/environments/environment";
import { HandleHttpError } from "../utils/HttpError";

@Injectable({
    providedIn: 'root'
})
export class HogwartsService{
    url : string = environment.apiPublicUrl;
    constructor(
        private http : HttpClient
    ){}

    getCharacterBySchool(escuela : string){
        return this.http.get<Persona[]>(`${this.url}/house/${escuela}`)
            .pipe(catchError(HandleHttpError));
    }

    getProfesores(){
        return this.http.get<Persona[]>(`${this.url}/staff`)
            .pipe(catchError(HandleHttpError))
    }

    getEstudiantes(){
        return this.http.get<Persona[]>(`${this.url}/students`)
            .pipe(catchError(HandleHttpError));
    }
}