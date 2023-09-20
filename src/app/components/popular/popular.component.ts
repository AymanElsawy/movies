import { Component, signal } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent {
  movies: Movie[] = [];
  pageNum = signal(1);
  constructor(private MoviesService: MoviesService) {}

  ngOnInit() {
    this.getPopularMovies(this.pageNum());
  }
  getPopularMovies(page: number) {
    this.MoviesService.getPopularMovies(page).subscribe({
      next: (data: {
        page: number;
        total_pages: number;
        total_results: number;
        results: Movie[];
      }) => {
        this.movies = data.results;
      },
      error: (err) => {},
      complete: () => {},
    });
  }

  pageChanged(event: any) {
    this.pageNum.set(event);
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.getPopularMovies(this.pageNum());
  }
}
