import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRatedRoutingModule } from './top-rated-routing.module';
import { TopRatedComponent } from './top-rated.component';

import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { MovieCardComponent } from '../movie-card/movie-card.component';
@NgModule({
  declarations: [TopRatedComponent],
  imports: [CommonModule, TopRatedRoutingModule, NgxPaginationModule,MovieCardComponent],
})
export class TopRatedModule {}
