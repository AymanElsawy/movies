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
  id!: number;
  videos: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private MoviesService: MoviesService
  ) {}
  ngOnInit() {
    this.swiperInit();
    this.MoviesService.details.next(true);
    this.getMovieDetails();
    this.getMovieVideos();
  }
  getMovieDetails() {
    this.route.data.subscribe({
      next: (data) => {
        this.movieDetails = data['details'];
        console.log(this.movieDetails);
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
      mousewheel:{
        forceToAxis:false
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
          slidesPerView: 5,
          spaceBetween: 0,
        },
      },
      on: {
        init() {},
      },
    };
    const swiperEl: any = document.querySelector('.swiper');
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
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
}