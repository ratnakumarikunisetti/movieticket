import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../movie';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-rf-form',
  templateUrl: './rf-form.component.html',
  styleUrls: ['./rf-form.component.css']
})
export class RfFormComponent implements OnInit {
  isUpdate:boolean=false;
  movieForm: FormGroup;
  movies: Movie[];
  movieSearchForm: any;
  movies1: any;

  constructor(private fb: FormBuilder, private service:MovieserviceService) {
    this.movies = new Array();
}

ngOnInit() {
 //console.log("ng on init");
 this.movieForm = this.fb.group({
   movieId: ['', Validators.required],
   movieName: ['', Validators.required],
   movieGenre: ['', Validators.required],
   movieHours: ['', Validators.required],
   movieLanguage: ['', Validators.required],
   movieDescription: ['', Validators.required],
   movieReleaseDate: ['', Validators.required]
 });

 this.service.getAllMovies().subscribe(data=>{
   alert("Data: ");
      this.movies= data;
    });
}
/*saveMovie(): void {​​​
  let m:Movie=this.movieForm.value;
  //logic for saving the employee
  if(!this.isUpdate){​​​
  this.service.addMovie(m)
        .subscribe(data=> {​​​
 alert("Movie with Id " + m.movieId + " is created");
  this.service.getAllMovies().subscribe(ms=> {​​​
  this.movies = ms;
          }​​​);
        }​​​);
      }​​​
  //updating the Movie
  else{​​​
  this.service.updateMovie(m).subscribe(data=> {​​​
  alert("Movie  is Updated");
  this.service.getAllMovies().subscribe(ms=> {​​​
  this.movies = ms;
               }​​​);
        }​​​);
  this.isUpdate=false;
      }​​​
  this.movieForm.reset();
    }​​​
  
      
 UpdateMovie(movieId: number) {​​​
  let m = this.movies.find(e=>e.movieId == movieId)
  this.movieForm = this.fb.group({​​​
  movieId: [m.movieId, Validators.required],
  movieName: [m.movieName, Validators.required],
  movieGenre: [m.movieGenre, Validators.required],
  movieHours: [m.movieHours, Validators.required],
  movieLanguage: [m.movieLanguage, Validators.required],
  movieDescription: [m.movieDescription, Validators.required],
  movieReleaseDate: [m.movieReleaseDate, Validators.required],
      }​​​);
  this.isUpdate=true;
    }​​​
*/
  //Deletes theMovie

  deleteMovie(movieId:number) {
    let candelete = confirm(`Are you Sure to Delete booking ${movieId}`);
    if (candelete==true) {
      this.service.deleteMovie(movieId).subscribe(data => {
        alert("Deleted Scuccessfully");
        this.service.getAllMovies().subscribe(abcd => {
          this.movies = abcd;
        });
      });
    }
  }
addMovie(): void {
 // console.log(this.addMovie())
 let m: Movie = new Movie(this.movieForm.controls.movieId.value, 
  this.movieForm.controls.movieName.value, 
  this.movieForm.controls.movieGenre.value, 
  this.movieForm.controls.movieHours.value, 
  this.movieForm.controls.movieLanguage.value,
  this.movieForm.controls.movieDescription.value, 
  this.movieForm.controls.movieReleaseDate.value);
 
 this.service.addMovie(m).subscribe(data =>{
   alert("data: "+JSON.stringify(data));
   this.movies.push(m);
 });
}
findMovie(movieId:number)
  {

    this.service.getMovieByID(this.movieSearchForm.controls.movieId.value)
    .subscribe((data:any)=>{
      this.movies1=data;
    });
  }

UpdateMovie(movieId: number) {
  let m: Movie = new Movie(this.movieForm.controls.movieId.value, 
    this.movieForm.controls.movieName.value, 
    this.movieForm.controls.movieGenre.value, 
    this.movieForm.controls.movieHours.value, 
    this.movieForm.controls.movieLanguage.value,
    this.movieForm.controls.movieDescription.value, 
    this.movieForm.controls.movieReleaseDate.value);
   
   this.service.updateMovie(m).subscribe(data =>{
     alert("data: "+JSON.stringify(data));
     this.movies.push(m);
  
  });
  this.isUpdate=true;
}

}
