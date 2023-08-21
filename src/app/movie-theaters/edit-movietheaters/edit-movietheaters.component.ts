import { Component, OnInit } from '@angular/core';
import { movieTheaterCreationDto } from '../movietheatermodel';
import { ActivatedRoute } from '@angular/router';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-edit-movietheaters',
  templateUrl: './edit-movietheaters.component.html',
  styleUrls: ['./edit-movietheaters.component.css']
})
export class EditMovietheatersComponent implements OnInit{
  emodel!: movieTheaterCreationDto; 
  constructor(private activatedRoute : ActivatedRoute , private movieTheaterservoce : MovieTheatersService)
  {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.movieTheaterservoce.getById(params["id"]).subscribe((movieTheater) => {
        this.emodel = movieTheater;
      });
    });
  }

  savechanges(event:any)
  {
      console.log(event);
  }
}
