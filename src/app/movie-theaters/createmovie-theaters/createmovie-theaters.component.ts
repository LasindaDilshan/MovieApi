import { Component, Input, OnInit } from '@angular/core';
import { movieTheaterCreationDto } from '../movietheatermodel';
import { MovieTheatersService } from '../movie-theaters.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-createmovie-theaters',
  templateUrl: './createmovie-theaters.component.html',
  styleUrls: ['./createmovie-theaters.component.css']
})
export class CreatemovieTheatersComponent implements OnInit {

  ngOnInit(): void {

  }
  constructor(private movieTheaterService : MovieTheatersService,private router:Router )
  {}

  savechanges(movieTheater : movieTheaterCreationDto)
  {
    console.log(movieTheater);
    this.movieTheaterService.create(movieTheater).subscribe(
      ()=>{
        this.router.navigate(['/movietheaters']);
      }
    );
  }

}
