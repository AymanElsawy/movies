import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsComponent } from './movie-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SafePipe } from 'src/app/pipes/safe.pipe';
@NgModule({
  declarations: [MovieDetailsComponent, SafePipe],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot({}),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MovieDetailsModule {}
