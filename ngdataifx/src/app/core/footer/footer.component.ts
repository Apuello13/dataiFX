import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent{
    fecha : string;
    constructor(){
        this.fecha = new Date().toLocaleDateString();
    }
}