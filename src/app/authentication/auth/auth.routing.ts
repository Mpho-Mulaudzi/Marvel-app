import { RouterModule, Routes } from "@angular/router";
import { Component, NgModule } from "@angular/core";
import { SigninComponent } from "../signin/signin.component";
import { SignupComponent } from "../signup/signup.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: SigninComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLayoutRoutingModule {}
