import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './actors/actors.component';
import { CreateGenreComponent } from './genre/create-genre/create-genre.component';
import { CreateactorsComponent } from './actors/createactors/createactors.component';
import { CreatemovieTheatersComponent } from './movie-theaters/createmovie-theaters/createmovie-theaters.component';
import { CreatemovieComponent } from './movie-list/createmovie/createmovie.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';
import { MovieTheatersComponent } from './movie-theaters/movie-theaters.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditMovietheatersComponent } from './movie-theaters/edit-movietheaters/edit-movietheaters.component';
import { EditMoviesComponent } from './movie-list/edit-movies/edit-movies.component';
import { EditGenreComponent } from './genre/edit-genre/edit-genre.component';
import { MovieFilterComponentComponent } from './movie-list/movie-filter-component/movie-filter-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'genres', component: GenreComponent },
  { path: 'genres/create', component: CreateGenreComponent },
  { path: 'genres/edit/:id', component: EditGenreComponent },
  { path: 'movies/filter', component: MovieFilterComponentComponent },

  { path: 'actors', component: ActorsComponent },
  { path: 'actors/create', component: CreateactorsComponent },
  { path: 'actors/edit/:id', component: EditActorComponent },

  { path: 'movietheaters', component: MovieTheatersComponent },
  { path: 'movietheaters/create', component: CreatemovieTheatersComponent },
  { path: 'movietheaters/edit/:id', component: EditMovietheatersComponent },

  { path: 'movies/create', component: CreatemovieComponent },
  { path: 'movies/edit/:id', component: EditMoviesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
