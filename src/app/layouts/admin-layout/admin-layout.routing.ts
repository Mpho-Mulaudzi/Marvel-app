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
import { SigninComponent } from '../../authentication/signin/signin.component';
import { SignupComponent } from '../../authentication/signup/signup.component';

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
      path : 'movies',         component:MoviesComponent
    },
    {
      path :  'login',         component:SigninComponent
    },
    {
      path:    'signup',        component:SignupComponent
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

