import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  movies: Movie[] = [];
  constructor(private MoviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.MoviesService.getHomeMovies().subscribe({
      next: (data: {
        page: number;
        total_pages: number;
        total_results: number;
        results: Movie[];
      }) => {
        this.movies = data.results;
      },
    });
  }

  movieDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
