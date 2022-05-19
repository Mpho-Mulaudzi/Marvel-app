import { Component, OnInit ,Input} from '@angular/core';
import * as Chartist from 'chartist';
import { IMovies } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public isloading:boolean = false;
  public movies: IMovies[] = [];

  constructor(private _movieservice:MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  //gets the data
  private getMovies() {
    this._movieservice.GetData()
    .subscribe(data=>this.movies=data);
  }
}
