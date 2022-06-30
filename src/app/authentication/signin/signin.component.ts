import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/auth/authentication.service";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { Auth } from "aws-amplify";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  isLoggedIn$: Observable<Boolean>;
  email: string = "";
  password: string = "";

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  async loginWithCognito() {
    try {
      var user = await Auth.signIn(
        this.email.toString(),
        this.password.toString()
      );

      console.log(
        "Authentication performed for user=" +
          this.email +
          "password=" +
          this.password +
          " login result==" +
          user
      );

      var tokens = user.signInUserSession;

      if (tokens != null) {
        console.log("User authenticated");

        this.router.navigateByUrl("admin");
      }
    } catch (error) {
      console.log(error);

      console.error("auth failed");
    }
  }
}
