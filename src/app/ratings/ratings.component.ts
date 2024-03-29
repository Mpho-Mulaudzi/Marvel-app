import { Component, OnInit } from "@angular/core";
import { IMovies } from "../models/movie";
import { MovieService } from "../services/movie.service";
import { Apollo, ApolloBase, gql } from "apollo-angular";
@Component({
  selector: "app-ratings",
  templateUrl: "./ratings.component.html",
  styleUrls: ["./ratings.component.scss"],
})
export class RatingsComponent implements OnInit {
  public titles: IMovies[] = [];
  users: any[];
  name: string;
  constructor(private appolloProvider: Apollo) {}

  ngOnInit(): void {
    this.appolloProvider
      .watchQuery({
        query: gql`
          {
            users {
              name
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.users = result?.data?.users;
        console.log(result);
      });
  }
}
