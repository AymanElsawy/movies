import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'top-rated',
    loadChildren: () =>
      import('./components/top-rated/top-rated.module').then(
        (m) => m.TopRatedModule
      ),
  },
  {
    path: 'popular',
    loadChildren: () =>
      import('./components/popular/popular.module').then(
        (m) => m.PopularModule
      ),
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./components/movie-details/movie-details.module').then(
        (m) => m.MovieDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
