import { Injectable } from "@angular/core";
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiResponse } from "../models/moviedb";
import { MoviedbService } from "../services/moviedb.service";
@Injectable()
//pre-fetches the data before it is loaded on a component view
export class MoviesResolver implements Resolve<ApiResponse>{
  constructor(private _moviedb:MoviedbService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : ApiResponse | Observable<ApiResponse> | Promise<ApiResponse> {
    return this._moviedb.searchMovie();
  }

}
