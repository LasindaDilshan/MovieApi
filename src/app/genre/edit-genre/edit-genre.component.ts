import { Component, EventEmitter, Input } from '@angular/core';
import { genreDTO } from '../genreDTO';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css'],
})
export class EditGenreComponent {
  model: genreDTO = { name: 'Drama' };
  constructor() {}

  saveChanges($event: genreDTO) {
    throw new Error('Method not implemented.');
  }
}
