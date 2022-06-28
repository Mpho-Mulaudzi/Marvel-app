import { Component, Input, OnInit } from "@angular/core";
import { IMovies } from "../models/movie";

@Component({
  selector: "app-ratings-card",
  templateUrl: "./ratings-card.component.html",
  styleUrls: ["./ratings-card.component.scss"],
})
export class RatingsCardComponent implements OnInit {
  @Input() movie_title: IMovies;

  constructor() {}

  ngOnInit(): void {}
}
