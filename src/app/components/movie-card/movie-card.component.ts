import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from 'src/app/models/movie.model';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input('movie') movie!: Movie; // get movie form outside component
  private router = inject(Router); // inject router
  private MoviesService = inject(MoviesService); //inject movie service

  movieDetails(id: number) {
    this.router.navigate(['/details', id]); // navigate to moviedetails component
  }

  watchTrailler(id: number) {
    // get movie videos
    this.MoviesService.getMovieVideos(id).subscribe({
      next: (data) => {
        data.results.forEach((video) => {
          if (video.type === 'Trailer')
            window.open(
              `https://www.youtube.com/watch?v=${video.key}`,
              '_blank'
            );
        });
      },
    });
  }
}
