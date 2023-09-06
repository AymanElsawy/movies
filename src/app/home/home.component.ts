import { Component } from '@angular/core';
import { Movie } from 'src/models/movie.model';
import { MoviesService } from 'src/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  movies :Movie[] =[];
  constructor(private MoviesService:MoviesService){}

  ngOnInit(){
    this.MoviesService.getHomeMovies().subscribe({
      next:((data:{page:number,total_pages:number,total_results:number,results:Movie[]})=>{
        this.movies = data.results ;
      })
    })
  }
}
