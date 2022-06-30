import { Component, OnInit, DoCheck } from "@angular/core";
import { Auth } from "aws-amplify";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  givenName: string;
  familyName: string;
  constructor(private _router: Router, private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  registerForm = this._formBuilder.group({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  register(): void {
    try {
      const user = Auth.signUp({
        username: this.email,
        password: this.password,
        attributes: {
          email: this.email,
          given_name: this.givenName,
          family_name: this.familyName, // optional - E.164 number convention
          // other custom attributes
        },
      });

      // alert("User signup completed , please check verify your email.");
    } catch (error) {
      console.log("error signing up:", error);
    }
    this.registerForm.reset();
  }

  navigateToSignIn() {
    this._router.navigateByUrl("auth/login");
  }
}
