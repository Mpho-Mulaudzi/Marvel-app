import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovies } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _url : string = '/assets/data/moviesinfo.json'
  private _title: IMovies;

  constructor(private http : HttpClient)
  {}

   GetData():Observable<IMovies[]>{
    return this.http.get<IMovies[]>(this._url);
  }

}
