import { Component, OnInit } from "@angular/core";
import { ROUTES } from "../sidebar/sidebar.component";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
import { Router } from "@angular/router";
import { HostListener } from "@angular/core";
import { AuthenticationService } from "../../services/auth/authentication.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
@HostListener("window:scroll", ["$event"])
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  hide: string = "";
  constructor(
    location: Location,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    window.addEventListener("scroll", this.scroll, true);
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
  onLogout() {
    this.authService.logout(); // {3}
  }
  scroll = (): void => {
    let scrollHeigth = 20;
    if (window.scrollY >= scrollHeigth) {
      console.log(window.scrollY);
      document.body.style.setProperty("--navbar-scroll", "black");
      document.body.style.setProperty("--navbar-scroll-text", "black");
      document.body.style.setProperty(
        "--navbar-scroll-shadow",
        "0px 6px 12px -5px #000000"
      );
    } else if (window.scrollY < scrollHeigth) {
      document.body.style.setProperty("--navbar-scroll", "transparent");
      document.body.style.setProperty("--navbar-scroll-text", "black");
      document.body.style.setProperty("--navbar-scroll-shadow", "none");
    }
  };

  hideNavbar() {
    return "this.isLoggedIn$ | async";
  }
}
