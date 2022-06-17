import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@HostListener('window:scroll', ['$event'])
export class NavbarComponent implements OnInit {
    constructor(location: Location,  private element: ElementRef, private router: Router) {
}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true)
  }

  scroll = (): void => {

   let scrollHeigth =20;
    if(window.scrollY >= scrollHeigth){
      console.log(window.scrollY);
      document.body.style.setProperty('--navbar-scroll', "black");
      document.body.style.setProperty('--navbar-scroll-text', "black");
      document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
    }else if(window.scrollY < scrollHeigth){
      document.body.style.setProperty('--navbar-scroll', "transparent");
      document.body.style.setProperty('--navbar-scroll-text', "black");
      document.body.style.setProperty('--navbar-scroll-shadow', "none");
    }
  }

}

