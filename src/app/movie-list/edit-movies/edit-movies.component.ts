import { Component } from '@angular/core';
import { movieDTO } from '../movieCreationDTO';

@Component({
  selector: 'app-edit-movies',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.css']
})
export class EditMoviesComponent {
model: movieDTO = {title:"Avengers", inTheater:true , summery:"End Game",releaseDate: new Date, trailer:'will be released on 11',poster:'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'};
saveChanges($event: any) {
throw new Error('Method not implemented.');
}

}
