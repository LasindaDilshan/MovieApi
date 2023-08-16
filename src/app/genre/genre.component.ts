import { Component, OnInit } from '@angular/core';
import { GenreService } from './genre.service';
import { genreDTO } from './genreDTO';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
})
export class GenreComponent implements OnInit{
  genres: genreDTO[]=[];
  colmnsToDisplay = ['name','actions']
  constructor(private genreService : GenreService)
  {}

  ngOnInit(): void {
   this.loaddata();
  }
  loaddata(){
    this.genreService.getAll().subscribe(
      genres => {
        console.log(genres);
        this.genres= genres;
      }
    );
  }
  delete(id: number)
  {
    this.genreService.delete(id).subscribe(()=>{this.loaddata()});
  }

}
