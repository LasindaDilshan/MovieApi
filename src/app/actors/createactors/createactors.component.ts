import { Component } from '@angular/core';
import { actorCreationDTO } from '../actorCreationDTO';
import { ActorsServiceService } from '../actors-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createactors',
  templateUrl: './createactors.component.html',
  styleUrls: ['./createactors.component.css']
})
export class CreateactorsComponent {
  constructor(private actorsService: ActorsServiceService , private router: Router){}

  SaveChangesa(actorCreationDTO:actorCreationDTO){
    console.log(actorCreationDTO);
    this.actorsService.create(actorCreationDTO).subscribe(
      () => { this.router.navigate(['/actors']);}
    );
  }
}
