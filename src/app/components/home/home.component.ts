import { Component, signal } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  movies: Movie[] = [];
  pageNum = signal(1);
  constructor(private MoviesService: MoviesService) {}

  ngOnInit() {
    this.MoviesService.details.next(false);
    this.getHomeMovies(this.pageNum());
  }
  getHomeMovies(page: number) {
    this.MoviesService.getNowPlayingMovies(page).subscribe({
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
    this.getHomeMovies(this.pageNum());
  }
}
