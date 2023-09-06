import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Movie } from 'src/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getHomeMovies(){
    return this.http.get<{page:number,total_pages:number,total_results:number,results:Movie[]}>(`${environment.apiUrl}top_rated?${environment.apiKey}${environment.lang}&page=1`);
  }
}
