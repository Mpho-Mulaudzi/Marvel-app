import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
interface CognitoUser
{
    user: CognitoUser;
    userConfirmed: boolean;
    userSub: string;
}
@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {
 private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}

   async signUp() {
    try {
        const { user } = await Auth.signUp({
            username:"",
            password:"",
            attributes: {
                email:"",          // optional
                phone_number:"",   // optional - E.164 number convention
                // other custom attributes
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}
async signIn() {
    try {
        const user = await Auth.signIn({username:"", password:""});
    } catch (error) {
        console.log('error signing in', error);
    }
}
   login(user: User){
    if (user.userName !== '' && user.password !== '' ) { // {3}
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}




