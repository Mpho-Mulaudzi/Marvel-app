import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AuthLayoutRoutingModule } from "../auth/auth.routing";
import { AngularMaterialModule } from "../../angular-material/angular-material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SigninComponent } from "../signin/signin.component";
import { SignupComponent } from "../signup/signup.component";
import { AuthComponent } from "./auth.component";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  imports: [
    CommonModule,
    AuthLayoutRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  declarations: [SigninComponent, SignupComponent, AuthComponent],
  exports: [SigninComponent, SignupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
