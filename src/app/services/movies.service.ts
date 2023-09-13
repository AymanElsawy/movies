import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { MoveiDetails } from 'src/app/models/movie-detials';
import { Movie } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  details = new Subject<boolean>() ; 

  getHomeMovies() {
    return this.http.get<{
      page: number;
      total_pages: number;
      total_results: number;
      results: Movie[];
    }>(
      `${environment.apiUrl}top_rated?${environment.apiKey}${environment.lang}&page=1`
    );
  }
  getNowPlayingMovies() {
    return this.http.get<{
      page: number;
      total_pages: number;
      total_results: number;
      results: Movie[];
    }>(
      `${environment.apiUrl}now_playing?${environment.apiKey}${environment.lang}&page=1`
    );
  }
  getPopularMovies() {
    return this.http.get<{
      page: number;
      total_pages: number;
      total_results: number;
      results: Movie[];
    }>(
      `${environment.apiUrl}popular?${environment.apiKey}${environment.lang}&page=1`
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
}
