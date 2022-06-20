import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Chartist from 'chartist';
import { IMovies } from '../models/movie';
import { IMoviesdb } from '../models/moviedb';
import { MovieService } from '../services/movie.service';
import { MoviedbService } from '../services/moviedb.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public isloading:boolean = false;
  public movies: IMovies[] = [];
  public allmovies: IMoviesdb[] =[];
  constructor(private route: ActivatedRoute,
              private _movieService:MoviedbService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  //gets the data
  private getMovies() {
    this._movieService.searchMovie().subscribe(result => {
      this.allmovies = result.Search;
    });
}
}
