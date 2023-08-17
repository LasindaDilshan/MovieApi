import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { actorCreationDTO, actorDTo } from '../actorCreationDTO';
import { ActorsServiceService } from '../actors-service.service';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css'],
})
export class EditActorComponent implements OnInit {
  model!: actorDTo; 
  // {
  //   id: 1,
  //   name: 'Lasi Holloand',
  //   dateOfBirth: new Date(),
  //   picture:
  //     'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
  //   biography: 'Defalut Value',
  // };
  constructor(private activateroute: ActivatedRoute , 
    private actorService: ActorsServiceService,
    private router : Router) {}
  ngOnInit() {
    this.activateroute.params.subscribe((params) => {
      this.actorService.getByID(params['id'].subscribe((actor: actorDTo) => this.model=actor))
    });
  }
  SaveChangesa(actorCreation: actorCreationDTO) {
    console.log(actorCreation);
    this.actorService.edit(this.model.id,actorCreation).subscribe(
      ()=>{this.router.navigate(['/actors']);}
    )
  }
}
