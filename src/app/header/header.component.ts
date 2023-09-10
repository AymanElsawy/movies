import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { Movie } from 'src/models/movie.model';
import { MoviesService } from 'src/services/movies.service';

// register Swiper custom elements
register();
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  swiperParams: any = {
    slidesPerView: 4,
    autoplay: {
      delay: 1000,
    },
    injectStylesUrls: ['./navbar.component.css'],
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      // when window width is <= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      390: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    on: {
      init() {},
    },
  };
  movies: Movie[] = [];

  constructor(private MoviesService:MoviesService){}
  ngOnInit(){
    const swiperEl: any = document.querySelector('swiper-container');
    Object.assign(swiperEl, this.swiperParams);
    this.getMovies();
  }

  getMovies(){
    this.MoviesService.getNowPlayingMovies().subscribe({
      next: (data: {
        page: number;
        total_pages: number;
        total_results: number;
        results: Movie[];
      }) => {
        this.movies = data.results.slice(0, 10);
      },
    });
  }
}

  
