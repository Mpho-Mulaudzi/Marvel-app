import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutingModule } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { RatingsComponent } from '../../ratings/ratings.component';
import { MoviesComponent} from "../../movies/movies.component"
import { CardComponent } from '../../card/card.component';
import { RatingsCardComponent } from '../../ratings-card/ratings-card.component';
import { HomeComponent } from '../../home/home.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminLayoutRoutingModule,
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
    AngularMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    DashboardComponent,
    RatingsComponent,
    MoviesComponent,
    CardComponent,
    RatingsCardComponent,
    HomeComponent,

  ],
  exports:[
    CardComponent,
    RatingsCardComponent,
    DashboardComponent,
    HomeComponent,


  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminLayoutModule {}
