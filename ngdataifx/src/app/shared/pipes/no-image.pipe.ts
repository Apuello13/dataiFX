import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(urlImage: string): string {
    return urlImage === "" ? "assets/img/noimage.png" : urlImage;
  }

}
