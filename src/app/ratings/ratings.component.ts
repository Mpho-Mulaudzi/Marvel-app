import { Component, OnInit } from '@angular/core';
import { IMovies } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  public titles :IMovies[] =[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovieTitles();
  }

  getMovieTitles(){
    this.movieService.GetData().
    subscribe(data =>this.titles = data)
  }

}
