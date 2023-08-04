import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieListComponent } from './movie-list/movie-list.component';
import { GenericListComponent } from './generic-list/generic-list.component';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GenreComponent } from './genre/genre.component';
import { CreateGenreComponent } from './genre/create-genre/create-genre.component';
import { ActorsComponent } from './actors/actors.component';
import { MovieTheatersComponent } from './movie-theaters/movie-theaters.component';
import { CreatemovieComponent } from './movie-list/createmovie/createmovie.component';
import { CreateactorsComponent } from './actors/createactors/createactors.component';
import { CreatemovieTheatersComponent } from './movie-theaters/createmovie-theaters/createmovie-theaters.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenreComponent } from './genre/edit-genre/edit-genre.component';
import { EditMovietheatersComponent } from './movie-theaters/edit-movietheaters/edit-movietheaters.component';
import { EditMoviesComponent } from './movie-list/edit-movies/edit-movies.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormGenreComponent } from './genre/form.genre/form.genre.component';
import { MovieFilterComponentComponent } from './movie-list/movie-filter-component/movie-filter-component.component';
import { FormActorComponent } from './actors/actor/form-actor/form-actor.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { MarkdownModule } from 'ngx-markdown';
import { MovieTheaterFormComponent } from './movie-theaters/movie-theater-form/movie-theater-form.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './utilities/map/map.component';
import { FormmovieComponent } from './movie-list/formmovie/formmovie.component';
import { MultipleSelectorComponent } from './utilities/multiple-selector/multiple-selector.component';
import { ActorsAutocompleteComponent } from './actors/actors-autocomplete/actors-autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    HomeComponent,
    GenreComponent,
    CreateGenreComponent,
    ActorsComponent,
    MovieTheatersComponent,
    CreatemovieComponent,
    CreateactorsComponent,
    CreatemovieTheatersComponent,
    EditActorComponent,
    EditGenreComponent,
    EditMovietheatersComponent,
    EditMoviesComponent,
    FormGenreComponent,
    MovieFilterComponentComponent,
    FormActorComponent,
    InputImgComponent,
    InputMarkdownComponent,
    MovieTheaterFormComponent,
    MapComponent,
    FormmovieComponent,
    MultipleSelectorComponent,
    ActorsAutocompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MarkdownModule.forRoot(),
    LeafletModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
