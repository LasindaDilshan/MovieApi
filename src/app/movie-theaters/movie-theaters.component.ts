import { Component, OnInit } from '@angular/core';
import { MovieTheatersService } from './movie-theaters.service';
import { Router } from '@angular/router';
import { movieCreationDTO } from '../movie-list/movieCreationDTO';
import { movieTheaterCreationDto } from './movietheatermodel';

@Component({
  selector: 'app-movie-theaters',
  templateUrl: './movie-theaters.component.html',
  styleUrls: ['./movie-theaters.component.css']
})
export class MovieTheatersComponent implements OnInit {
  movieTheaters: movieTheaterCreationDto [] = [];
  colmnsToDisplay = ['name','actions']

  constructor(private movieTheaterService: MovieTheatersService,
    private router: Router)
  {}
  ngOnInit(): void {
   this.loaddata();
  }
  loaddata(){
    this.movieTheaterService.get().subscribe(
      movieTheater=> {this.movieTheaters=movieTheater;
      console.log( this.movieTheaters);}
    )
  }
  saveChanges(movieTheater : movieTheaterCreationDto)
  {
    console.log(movieTheater);
    this.movieTheaterService.create(movieTheater).subscribe(
      ()=> this.router.navigate(['/movietheaters'])
    );
  }
  delete(id:number)
  {

  }

}
