import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/pages/models/persona';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  toggle: boolean = false;
  @Input() personas: Persona[] = [];

  orderByAge() {
    this.toggle = !this.toggle;
    this.personas.sort((a, b) =>
      this.toggle
        ? a.yearOfBirth - b.yearOfBirth
        : b.yearOfBirth - a.yearOfBirth
    );
  }
}
