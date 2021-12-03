import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(yearOfBirth: unknown): number | string {
    const anioActual = new Date().getFullYear();
    return yearOfBirth !== "" ? anioActual - Number(yearOfBirth) : "N/A";
  }

}
