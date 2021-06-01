export class Movie {
    movieId:number ; 
    movieName:string ;	
    movieGenre:string ;
    movieHours:string ;
    movieLanguage:string;
    movieDescription:string ;
    movieReleaseDate:string ;
   
    constructor(movieId:number,movieName:string, movieGenre:string ,movieHours:string, movieLanguage:string, movieDescription:string, movieReleaseDate:string) {
    this.movieId=movieId;
    this.movieName = movieName;
    this.movieGenre = movieGenre;
    this.movieHours = movieHours;
    this.movieLanguage = movieLanguage;
    this.movieDescription = movieDescription;
    this.movieReleaseDate=movieReleaseDate;	
}
toString():string{
    return "movieId:"+this.movieId+ "movieName:"+this.movieName+"movieGenre:"+this.movieGenre+"movieHours"+this.movieHours+"movieLanguage:"+this.movieLanguage+"movieDescription:"+this.movieDescription+"movieReleaseDate:"+this.movieReleaseDate;  

}
}
