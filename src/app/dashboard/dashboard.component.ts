import { Component, OnInit ,Input} from '@angular/core';
import * as Chartist from 'chartist';
import { IMovies } from '../models/movie';
import { IMoviesdb } from '../models/moviedb';
import { MovieService } from '../services/movie.service';
import { MoviedbService } from '../services/moviedb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public isloading:boolean = false;
  public movies: IMovies[] = [];
  public allmovies: IMoviesdb[] =[];

  constructor(private _movieservice:MovieService,
              private _movieService:MoviedbService) { }

  ngOnInit() {
    this.getMovies();

  }

  //gets the data
  private getMovies() {
    this._movieService.searchMovie().subscribe(result => {
      this.allmovies = result.Search;
    });
  }

  // private MoreMovies() {
  //   this._movieService.getSpiderMan()
  //   .subscribe(data => this.spiderman =data)
   }

