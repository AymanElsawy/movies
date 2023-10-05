import { MoviesService } from 'src/app/services/movies.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoveiDetails } from 'src/app/models/movie-detials';
import { Credits } from 'src/app/models/movie-credits';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  movieDetails = {} as MoveiDetails;
  photo = '';
  id!: number;
  videos: string[] = [];
  movieCredits!:Credits;
  constructor(
    private route: ActivatedRoute,
    private MoviesService: MoviesService
  ) {}
  ngOnInit() {
    this.swiperInit();
    this.MoviesService.details.next(true);
    this.getMovieDetails();
    this.getMovieVideos();
    this.getMovieCredits();
  }
  getMovieDetails() {
    this.route.data.subscribe({
      next: (data) => {
        this.movieDetails = data['details'];
        this.photo =
          'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces' +
          this.movieDetails.backdrop_path;
        this.id = this.movieDetails.id;
      },
    });
  }
  swiperInit() {
    let swiperParams: any = {
      slidesPerView: 4,
      mousewheel: {
        forceToAxis: false,
      },
      loop: true,
      navigation: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        390: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is <= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
      on: {
        init() {},
      },
    };
    const swiperEl: any = document.querySelector('.swiper');
    const swiperElCast: any = document.querySelector('.swiper-cast');
    Object.assign(swiperEl, swiperParams);
    Object.assign(swiperElCast, swiperParams);
    swiperEl.initialize();
    swiperElCast.initialize();
  }
  getMovieVideos() {
    this.MoviesService.getMovieVideos(this.id).subscribe({
      next: (data) => {
        data.results.map((video) => {
          this.videos.push(`https://www.youtube.com/embed/${video.key}`);
        });
      },
    });
  }
  getMovieCredits() {
    this.MoviesService.getMovieCredits(this.id).subscribe({
      next: (data) => {
        this.movieCredits = data ;
        console.log(this.movieCredits);
      },
    });
  }
}
