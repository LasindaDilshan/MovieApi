import { Component } from '@angular/core';
import { movieTheaterCreationDto } from '../movietheatermodel';

@Component({
  selector: 'app-edit-movietheaters',
  templateUrl: './edit-movietheaters.component.html',
  styleUrls: ['./edit-movietheaters.component.css']
})
export class EditMovietheatersComponent {
  emodel: movieTheaterCreationDto = {
    name: 'Edit movie Theater',
    latitude: 48.10743118848039,
    longitude: -121.20117187500001
  };

  savechanges(event:any)
  {
      console.log(event);
  }
}
