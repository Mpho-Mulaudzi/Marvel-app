import { Component, OnInit ,Input} from '@angular/core';
import { IMovies } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movies: IMovies;
  constructor(private _movieservice:MovieService) { }

  ngOnInit(): void {

  }
}
