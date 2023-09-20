import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

// register Swiper custom elements
register();
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  movies: Movie[] = [];
  constructor(private MoviesService: MoviesService, private router: Router) {}
  ngOnInit() {
    this.swiperInit();
    this.getMovies();
  }
  swiperInit() {
    let swiperParams: any = {
      slidesPerView: 4,
      mousewheel: {
        forceToAxis: false,
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: true,
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
          spaceBetween: 0,
        },
      },
      on: {
        init() {},
      },
    };
    const swiperEl: any = document.querySelector('.header-swiper');
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }
  getMovies() {
    this.MoviesService.getPopularMovies(1).subscribe({
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
  getMovieDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
