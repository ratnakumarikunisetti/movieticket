import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MovieFormComponent } from '../movie-form/movie-form.component';
import { RfFormComponent } from '../rf-form/rf-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [//MovieFormComponent,
    RfFormComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
   exports: [//MovieFormComponent, 
    RfFormComponent]
})
export class MoviemodelModule { }
