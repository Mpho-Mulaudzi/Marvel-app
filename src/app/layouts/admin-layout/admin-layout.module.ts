import { NgModule } from '@angular/core';
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





@NgModule({
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,

    RatingsComponent,
    MoviesComponent,
    CardComponent,
    RatingsCardComponent
  ],
  exports:[
    CardComponent,
    RatingsCardComponent,
    DashboardComponent
  ]
})

export class AdminLayoutModule {}
