import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsComponent } from './movie-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot({}),
  ],
})
export class MovieDetailsModule {}
