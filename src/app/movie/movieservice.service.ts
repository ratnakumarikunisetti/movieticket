import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  UpdateMovie(m: Movie) {
    throw new Error('Method not implemented.');
  }

  
  constructor(private http:HttpClient) { }
  addMovie(m:Movie):Observable<Object>{
    alert(JSON.stringify(m));
    return this.http.post("http://localhost:8082/MovieTicket/mts/movie/addMovie", m);
  }
  getAllMovies():Observable<Movie[]>{
   
    return this.http.get<Movie[]>("http://localhost:8082/MovieTicket/mts/movie/viewMovieList");
  }
getMovieByID(movieId:number):Observable<Movie>{​​​
    return this.http.get<Movie>(`http://localhost:8082/MovieTicket/mts/movie/viewMovie/${​​​movieId}​​​`);
      }​​​

      deleteMovie(movieId:number):Observable<Object>{​​​
        return this.http.delete<Object>(`http://localhost:8082/MovieTicket/mts/movie/deleteMovie/${movieId}`);
          }​​​

  
    updateMovie(m:Movie):Observable<Object>{​​​
    return this.http.put<Object>("http://localhost:8082/MovieTicket/mts/movie/updateMovie",m);
      }​​​
      errorHandler(error:HttpErrorResponse)
      {
        return Observable.throw(error.message || "Server Error");

      }
      
      
    }​​​






