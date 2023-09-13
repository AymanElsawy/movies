import { MoviesService } from 'src/app/services/movies.service';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { MoveiDetails } from 'src/app/models/movie-detials';



export const movieDetailsResolver: ResolveFn<MoveiDetails> = (route, state) => {
  
  return inject(MoviesService).getMovieDetails(route.params['id']!);
};
