import { Component } from '@angular/core';
import { MovieTheatersService } from './movie-theaters.service';
import { Router } from '@angular/router';
import { movieCreationDTO } from '../movie-list/movieCreationDTO';
import { movieTheaterCreationDto } from './movietheatermodel';

@Component({
  selector: 'app-movie-theaters',
  templateUrl: './movie-theaters.component.html',
  styleUrls: ['./movie-theaters.component.css']
})
export class MovieTheatersComponent {
  constructor(private movieTheaterService: MovieTheatersService,
    private router: Router)
  {}
  saveChanges(movieTheater : movieTheaterCreationDto)
  {
    console.log(movieTheater);
    this.movieTheaterService.create(movieTheater).subscribe(
      ()=> this.router.navigate(['/movieTheaters'])
    );
  }

}
