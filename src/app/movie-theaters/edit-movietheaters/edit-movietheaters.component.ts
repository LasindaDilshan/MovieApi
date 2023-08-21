import { Component, OnInit } from '@angular/core';
import { movieTheaterCreationDto, movieTheaterDto } from '../movietheatermodel';
import { ActivatedRoute } from '@angular/router';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-edit-movietheaters',
  templateUrl: './edit-movietheaters.component.html',
  styleUrls: ['./edit-movietheaters.component.css']
})
export class EditMovietheatersComponent implements OnInit{
  emodel!: movieTheaterDto; 
  constructor(private activatedRoute : ActivatedRoute , private movieTheaterservoce : MovieTheatersService)
  {
    this.loaddata();
  }
  ngOnInit(): void {
   
  }
  loaddata(){
    this.activatedRoute.params.subscribe((params) => {
      this.movieTheaterservoce.getById(params["id"]).subscribe((movieTheater) => {
        this.emodel = movieTheater;
        console.log( this.emodel)
      });
    });
  }

  savechanges(event:any)
  {
      console.log(event);
  }
}
