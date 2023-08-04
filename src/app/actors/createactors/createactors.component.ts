import { Component } from '@angular/core';
import { actorCreationDTO } from '../actorCreationDTO';

@Component({
  selector: 'app-createactors',
  templateUrl: './createactors.component.html',
  styleUrls: ['./createactors.component.css']
})
export class CreateactorsComponent {

  SaveChangesa(actorCreationDTO:actorCreationDTO){
    console.log(actorCreationDTO)
  }
}
