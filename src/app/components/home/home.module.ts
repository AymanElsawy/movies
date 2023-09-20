import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { MovieCardComponent } from '../movie-card/movie-card.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxPaginationModule,
    MovieCardComponent,
  ],
})
export class HomeModule {}
