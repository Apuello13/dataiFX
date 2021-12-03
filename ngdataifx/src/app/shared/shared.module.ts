import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
//Pipes
import { NoImagePipe } from './pipes/no-image.pipe';
import { AgePipe } from './pipes/age.pipe';
//Components
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    NoImagePipe,
    AgePipe,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    NoImagePipe,
    AgePipe,
    TableComponent
  ],
})
export class SharedModule { }
