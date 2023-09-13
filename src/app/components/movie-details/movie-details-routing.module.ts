import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details.component';
import { movieDetailsResolver } from 'src/app/resolver/movie-details.resolver';

const routes: Routes = [
  {
    path:'',
    component:MovieDetailsComponent,
    resolve:{details:movieDetailsResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieDetailsRoutingModule { }
