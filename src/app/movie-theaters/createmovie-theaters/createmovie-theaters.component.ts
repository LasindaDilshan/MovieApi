import { Component, Input, OnInit } from '@angular/core';
import { movieTheaterCreationDto } from '../movietheatermodel';

@Component({
  selector: 'app-createmovie-theaters',
  templateUrl: './createmovie-theaters.component.html',
  styleUrls: ['./createmovie-theaters.component.css']
})
export class CreatemovieTheatersComponent implements OnInit {

  ngOnInit(): void {

  }

  savechanges($event : any)
  {
    console.log($event);
  }

}
