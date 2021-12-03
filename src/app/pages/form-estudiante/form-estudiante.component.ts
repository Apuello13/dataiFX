import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Persona } from "../models/persona";
import { EstudianteService } from "../services/estudiante.service";

@Component({
    selector: 'app-form-estudiante',
    templateUrl: './form-estudiante.component.html',
    styleUrls: ['./form-estudiante.component.scss']
})
export class FormEstudianteComponent {
    estudianteForm : FormGroup;
    constructor(
        private formBuilder : FormBuilder,
        private _estudiante : EstudianteService,
        private router : Router
    ){
        this.estudianteForm = this.formBuilder.group({
            name : ['', Validators.required],
            patronus: ['', Validators.required],
            yearOfBirth: ['', Validators.required],
            image: ['']
        });
    }

    submitForm(){
        let formEstudiante : Persona;
        formEstudiante = this.estudianteForm.value;
        formEstudiante.yearOfBirth = this.getYearOfBirth();
        formEstudiante.image = this.getImage();
        this._estudiante.saveEstudiante(formEstudiante);
        this.router.navigateByUrl('/estudiantes');
    }

    getYearOfBirth() : number{
        return Number(this.estudianteForm.get('yearOfBirth')?.value.split('-')[0]);
    }

    getImage() : string{
        var image = document.getElementById('image-preview').getAttribute('src');
        return !image ? "" : image;
    }

    setImage(event : any){
        var image = document.getElementById('image-preview');
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => image?.setAttribute('src', reader.result?.toString())
    }

    isValidField(keyField : string){
        return this.estudianteForm.get(keyField)?.touched && 
            this.estudianteForm.get(keyField)?.invalid;
    }
}