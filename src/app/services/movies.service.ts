import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { MoveiDetails } from 'src/app/models/movie-detials';
import { Movie } from 'src/app/models/movie.model';
import { MovieVidoes } from '../models/movie-videos';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  details = new Subject<boolean>();

  getTopRatedMovies(pageNum: number) {
    return this.http.get<{
      page: number;
      total_pages: number;
      total_results: number;
      results: Movie[];
    }>(
      `${environment.apiUrl}top_rated?${environment.apiKey}${environment.lang}&page=${pageNum}`
    );
  }
  getNowPlayingMovies(pageNum: number) {
    return this.http.get<{
      page: number;
      total_pages: number;
      total_results: number;
      results: Movie[];
    }>(
      `${environment.apiUrl}now_playing?${environment.apiKey}${environment.lang}&page=${pageNum}`
    );
  }
  getPopularMovies(pageNum:number) {
    return this.http.get<{
      page: number;
      total_pages: number;
      total_results: number;
      results: Movie[];
    }>(
      `${environment.apiUrl}popular?${environment.apiKey}${environment.lang}&page=${pageNum}`
    );
  }
  getUpcomingMovies() {
    return this.http.get<{
      page: number;
      total_pages: number;
      total_results: number;
      results: Movie[];
    }>(
      `${environment.apiUrl}upcoming?${environment.apiKey}${environment.lang}&page=1`
    );
  }
  getMovieDetails(id: number): Observable<MoveiDetails> {
    return this.http.get<MoveiDetails>(
      `${environment.apiUrl}${id}?${environment.apiKey}${environment.lang}`
    );
  }
  getMovieVideos(id: number) {
    return this.http.get<{ id: number; results: MovieVidoes[] }>(
      `${environment.apiUrl}${id}/videos?${environment.apiKey}${environment.lang}`
    );
  }
}
