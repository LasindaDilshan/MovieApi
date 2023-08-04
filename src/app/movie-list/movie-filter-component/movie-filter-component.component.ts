import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter-component',
  templateUrl: './movie-filter-component.component.html',
  styleUrls: ['./movie-filter-component.component.css'],
})
export class MovieFilterComponentComponent implements OnInit {
  form!: FormGroup;
  genres = [
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Action' },
  ];
  movies = [
    {
      title: 'Spider-Man',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,1,380,562_.jpg',
    },
    {
      title: 'Avengers',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    },
    {
      title: 'Toy Story',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg',
    },
  ];
  originalmovies = this.movies;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingRelease: false,
      inTheaters: false,
    });
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
      this.movies = this.originalmovies;
      this.filterMocies(value);
    });
  }
  Clear() {
    this.form.reset();
  }
  filterMocies(values: any) {
    if (values.title) {
      this.movies = this.movies.filter(
        (movie) => movie.title.indexOf(values.title) !== -1,
      );
    }
  }
}
