import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
const routes: Routes = [
          {
            path: 'auth',
            redirectTo: 'login',
            pathMatch: 'full',
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
     })
  export class AuthLayoutRoutingModule { }