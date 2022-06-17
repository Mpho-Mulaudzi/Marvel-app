import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';

import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingsComponent } from '../../ratings/ratings.component';
import { MoviesComponent } from '../../movies/movies.component';
import { MoviesResolver } from '../../resolvers/movies.resolver';

import { MoviedbService } from '../../services/moviedb.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
        resolve:{
         admin:MoviesResolver
        }
    },
    { path: 'admin',      component: DashboardComponent ,
     },

    {
      path: 'ratings',        component:RatingsComponent
    },
    {
      path : 'movies',         component:MoviesComponent
    }




];

@NgModule({
    imports: [

      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [
    MoviedbService,
    MoviesResolver
  ],
  })
  export class AdminLayoutRoutingModule { }

