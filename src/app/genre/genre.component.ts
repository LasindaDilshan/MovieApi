import { Component, OnInit } from '@angular/core';
import { GenreService } from './genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
})
export class GenreComponent implements OnInit{
  constructor(private genreService : GenreService)
  {}

  ngOnInit(): void {
    this.genreService.getAll().subscribe(
      genres => {
        console.log(genres)
      }
    );
  }

}
