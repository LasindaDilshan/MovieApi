import { Component } from '@angular/core';

@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrls: ['./createmovie.component.css']
})
export class CreatemovieComponent {
  SaveChanges($event:any)
  {
  console.log($event);
  }
}
