// import { Component, NgModule } from "@angular/core";
import { Component, NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
import { CommonModule } from "@angular/common";
// import { BrowserModule } from "@angular/platform-browser";
import { BrowserModule } from "@angular/platform-browser";
// import { Routes, RouterModule } from "@angular/router";
import { Routes, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { RatingsComponent } from "../../src/app/ratings/ratings.component";
import { MoviesComponent } from "../app/movies/movies.component";
import { DashboardComponent } from "../app/dashboard/dashboard.component";
import { HomeComponent } from "../app/home/home.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "admin",
    pathMatch: "full",
  },

  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
      {
        path: "home",
        component: HomeComponent,
      },

      {
        path: "ratings",
        component: RatingsComponent,
      },
      {
        path: "movies",
        component: MoviesComponent,
        // canActivate: [AuthGuard],
      },
    ],
  },

  {
    path: "auth",
    loadChildren: () =>
      import("./authentication/auth/auth.module").then((x) => x.AuthModule),
  },
  {
    path: "**",
    redirectTo: "/",
  },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
