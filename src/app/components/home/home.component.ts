import { Component } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  movies: Movie[] = [];
  pageNum = 1;
  constructor(
    private MoviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((p) => console.log(p));
    this.getHomeMovies(this.pageNum);
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
    this.pageNum = event;
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.getHomeMovies(this.pageNum);
  }

  movieDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

  watchTrailler(id:number){
    this.MoviesService.getMovieVideos(id).subscribe({
      next:(data)=>{
        data.results.forEach(video=>{
          if(video.type === 'Trailer')  window.open(`https://www.youtube.com/watch?v=${video.key}`, '_blank');
        })
      }
    })
  }
}
