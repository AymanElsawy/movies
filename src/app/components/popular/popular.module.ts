import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularRoutingModule } from './popular-routing.module';
import { PopularComponent } from './popular.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@NgModule({
  declarations: [PopularComponent],
  imports: [
    CommonModule,
    PopularRoutingModule,
    NgxPaginationModule,
    MovieCardComponent,
  ],
})
export class PopularModule {}
