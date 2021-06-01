/*import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  movieForm: FormGroup;
  
  movies:Movie[] = new Array();

  constructor() { }

  ngOnInit(): void {
    this.movieForm = new FormGroup({
      movieId: new FormControl(),
      movieName: new FormControl(),
      movieGenre: new FormControl(),
      movieHours: new FormControl(),
      movieLanguage: new FormControl(),
      movieDescription: new FormControl(),
      movieReleaseDate:new FormControl()
    });
  }
  showMovie():void{
    let m:Movie= new Movie(this.movieForm.controls.movieId.value, 
      this.movieForm.controls.movieName.value, 
      this.movieForm.controls.movieGenre.value, 
      this.movieForm.controls.movieHours.value, 
      this.movieForm.controls.movieLanguage.value, 
      this.movieForm.controls.movieDescription.value, 
      this.movieForm.controls.movieReleaseDate.value );
    this.movies.push(m);
  }
}

*/
