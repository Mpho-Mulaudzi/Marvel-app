import { Component, OnInit } from '@angular/core';
import { IMovies } from '../models/movie';
import { IMoviesdb } from '../models/moviedb';
import { MoviedbService } from '../services/moviedb.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movies: IMoviesdb[]=[] ;
  public moviefilter = this.movies.map(x=> x.Title ==="Avengers: Infinity War");
  constructor(private _movieService : MoviedbService) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(){

    this._movieService.searchMovie().subscribe(result=>
      {
        this.movies= result.Search;
      })
  }
}
