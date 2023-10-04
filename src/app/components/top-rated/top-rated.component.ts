import { Component, signal } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css'],
})
export class TopRatedComponent {
  movies: Movie[] = [];
  pageNum = signal(1);
  constructor(private MoviesService: MoviesService) {}

  ngOnInit() {
    this.MoviesService.details.next(false);
    this.getTopRatedMovies(this.pageNum());
  }
  getTopRatedMovies(page: number) {
    this.MoviesService.getTopRatedMovies(page).subscribe({
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
    this.getTopRatedMovies(this.pageNum());
  }
}
