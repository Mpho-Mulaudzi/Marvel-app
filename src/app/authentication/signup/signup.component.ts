
import { Component, OnInit } from '@angular/core';
import {Auth} from 'aws-amplify';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email:string;
  password:string;
  givenName:string;
  familyName:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
   register(){

    try {

        const user  =  Auth.signUp({
           username: this.email,
           password: this.password,
            attributes: {
                 email: this.email,
                 given_name: this.givenName,
               family_name: this.familyName   // optional - E.164 number convention
                // other custom attributes
            }
        });
        console.log(user);
          alert('User signup completed , please check verify your email.');
              this.router.navigate(['/auth/login']);
    } catch (error) {
        console.log('error signing up:', error);
    }

  }
}

