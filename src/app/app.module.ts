import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AppRoutingModule } from "./app.routing";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../../src/app/angular-material/angular-material.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RatingsComponent } from "../../src/app/ratings/ratings.component";
import { MoviesComponent } from "../../src/app/movies/movies.component";
import { RatingsCardComponent } from "../../src/app/ratings-card/ratings-card.component";
import { HomeComponent } from "../../src/app/home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    NgbModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ToastrModule.forRoot(),
    CommonModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DashboardComponent,
    RatingsComponent,
    MoviesComponent,
    RatingsCardComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
