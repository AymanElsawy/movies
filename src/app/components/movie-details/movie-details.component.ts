import { MoviesService } from 'src/app/services/movies.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoveiDetails } from 'src/app/models/movie-detials';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  movieDetails = {} as MoveiDetails;
  photo = '';

  constructor(
    private route: ActivatedRoute,
    private MoviesService: MoviesService
  ) {}
  ngOnInit() {
    this.MoviesService.details.next(true);
    this.route.data.subscribe({
      next: (data) => {
        this.movieDetails = data['details'];
        this.photo =
          'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces' +
          this.movieDetails.backdrop_path;
        console.log(this.movieDetails);
      },
    });
  }
}
