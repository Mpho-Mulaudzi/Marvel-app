import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { HomeComponent } from '../../home/home.component'
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingsComponent } from '../../ratings/ratings.component';
import { MoviesComponent } from '../../movies/movies.component';
import { MoviesResolver } from '../../resolvers/movies.resolver';
import { MoviedbService } from '../../services/moviedb.service';

import { AuthGuard } from '../../services/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
        resolve:{
         admin:MoviesResolver
        }
    },
    { path: 'admin',      component: HomeComponent ,
     },

    {
      path: 'ratings',        component:RatingsComponent
    },
    {
      path : 'movies',         component:MoviesComponent,
      canActivate:[AuthGuard]},




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

