import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMoviesdb ,ApiResponse} from '../models/moviedb';


@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  apiURL: string = "https://www.omdbapi.com/?s=Avengers&apikey=46bdaf2b";
  constructor(private http:HttpClient) { }

  searchMovie():Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiURL);
  }
}
