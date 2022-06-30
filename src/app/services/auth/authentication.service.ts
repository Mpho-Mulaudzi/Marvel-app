import { Injectable } from "@angular/core";
import { Auth } from "aws-amplify";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { User } from "./user";
import { Hub, Logger } from "aws-amplify";
interface CognitoUser {
  user: CognitoUser;
  userConfirmed: boolean;
  userSub: string;
}
@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  isLoggedIn$ = new BehaviorSubject<boolean>(false);
  userName: string;
  password: string;
  email: string;
  phone_no: number;

  constructor(private router: Router) {
    Hub.listen("auth", (data) => {
      console.log("auth event", data);
      switch (data.payload.event) {
        case "signIn":
          this.isLoggedIn$.next(true);
          break;
        case "signOut":
          this.isLoggedIn$.next(false);
          break;
      }
    });
  }

  async signUp() {
    try {
      const { user } = await Auth.signUp({
        username: this.userName,
        password: this.password,
        attributes: {
          email: this.email, // optional
          phone_number: this.phone_no, // optional - E.164 number convention
          // other custom attributes
        },
      });
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }
  async signIn() {
    try {
      const user = await Auth.signIn({ username: "", password: "" });
    } catch (error) {
      console.log("error signing in", error);
    }
  }
  login(user: User) {
    if (user.userName !== "" && user.password !== "") {
      this.isLoggedIn$.next(true);
      this.router.navigate(["/admin"]);
    }
  }

  logout() {
    this.isLoggedIn$.next(false);
    this.router.navigate(["auth/login"]);
  }

  getState() {}
}
