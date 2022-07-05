import { Component, OnInit } from "@angular/core";
import { Apollo, ApolloBase, gql } from "apollo-angular";
@Component({
  selector: "app-testing",
  templateUrl: "./testing.component.html",
  styleUrls: ["./testing.component.scss"],
})
export class TestingComponent implements OnInit {
  users: any[];
  name: string;
  constructor(private appolloProvider: Apollo) {}

  ngOnInit(): void {
    // this.appolloProvider
    //   .watchQuery({
    //     query: gql`
    //       {
    //         users {
    //           name
    //         }
    //       }
    //     `,
    //   })
    //   .valueChanges.subscribe((result: any) => {
    //     this.users = result?.data?.users;
    //   });
  }
}
