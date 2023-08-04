import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css'],
})
export class ActorsAutocompleteComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<any>;
  control: FormControl = new FormControl();
  colomnsToDisplay = ['picture', 'name', 'charactor', 'actions'];
  selecteAcotors : actor[] = [];
  actors = [
    {
      name: 'Tom Holland',
      picture:
        'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_QL75_UY414_CR3,0,280,414_.jpg',
    },
    {
      name: 'Tom Hank',
      picture:
        'https://m.media-amazon.com/images/M/MV5BMjA0NjkyMDIzMF5BMl5BanBnXkFtZTcwNjc2NTUyMQ@@._V1_QL75_UY414_CR15,0,280,414_.jpg',
    },
    {
      name: 'Samual',
      picture:
        'https://m.media-amazon.com/images/M/MV5BMTY0NTk1NzY1M15BMl5BanBnXkFtZTcwNjk4NDMwNA@@._V1_QL75_UX280_CR0,0,280,414_.jpg',
    },
  ];
  originalActors = this.actors;
  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter(
        (actors) => actors.name.indexOf(value) !== -1,
      );
      console.log(this.actors);
    });
  }
  optionSelected($event: any) {
    console.log($event.option.value);
    this.selecteAcotors.push($event.option.value);
    this.control.patchValue('');
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }
  remove(element: any) {
    const index = this.selecteAcotors.findIndex(a => a.name === element.name);
    this.selecteAcotors.splice(index,1);
    this.table.renderRows();
  }
  dropped($event: CdkDragDrop<actor[],any,any>) {
    const preIndex = this.selecteAcotors.findIndex(actor=> actor===$event.item.data);
    moveItemInArray(this.selecteAcotors,preIndex,$event.currentIndex);
    this.table.renderRows();
   }
}
export interface actor
{
 name: string;
 picture: string;
}
