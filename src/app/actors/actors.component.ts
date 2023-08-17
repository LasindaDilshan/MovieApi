import { Component, OnInit } from '@angular/core';
import { ActorsServiceService } from './actors-service.service';
import { actorCreationDTO, actorDTo } from './actorCreationDTO';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit{
constructor(private actorsService : ActorsServiceService){}
actors: actorDTo[]  = [] ;
colmnsToDisplay = ['name','actions'];
  totalamountOfRecords = 0;
  currentpage=1;
  pageSize = 5;
ngOnInit(): void {
  this.loadData();
}
loadData()
{
  this.actorsService.get(this.currentpage , this.pageSize).subscribe(
    (response :HttpResponse<actorDTo[]>) => 
    { 
      if(response.body){
      const intValue: number | null = parseNullableStringToInt(response.headers.get("totalamountOfRecords"));
      if (intValue !== null) {
          this.totalamountOfRecords = intValue; } 
          this.actors = response.body; 
          console.log(this.actors);
      }
    }
  );
}
delete(id : number ){

}
updatePagination($event : PageEvent)
{
  this.currentpage = $event.pageIndex + 1;
  this.pageSize = $event.pageSize;
  this.loadData();
}


}
function parseNullableStringToInt(input: string | null): number | null {
  if (input === null) {
      return null; // Return null if input is null
  }

  const parsedInt: number = parseInt(input, 10);
  if (isNaN(parsedInt)) {
      return null; // Return null if parsing fails
  }

  return parsedInt;
}

