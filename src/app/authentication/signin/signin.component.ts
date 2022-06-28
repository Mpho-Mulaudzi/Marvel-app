import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  email: string = '';
  password: string ='';

  constructor(
    private _router: Router
  ) {

  }

  ngOnInit(): void {

}

    async loginWithCognito() {

    try {

      var user = await Auth.signIn(this.email.toString(), this.password.toString());

      console.log('Authentication performed for user=' + this.email + 'password=' + this.password + ' login result==' + user);

      var tokens = user.signInUserSession;

      if (tokens != null) {

        console.log('User authenticated');

       this._router.navigate(['/admin']);

        alert('You are logged in successfully !');
      }

   } catch (error) {

      console.log(error);

      alert('User Authentication failed');
    }
  }
}

