import { Component, Input } from '@angular/core';
import { multipleselectorModel } from './mutiple-selector.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent {

  @Input() selectedItems :multipleselectorModel[]=[];
  @Input() NonselectedItems :multipleselectorModel[]=[];

  selectAll()
  { console.log(this.selectedItems);
    this.selectedItems.push(...this.NonselectedItems);
     console.log(this.selectedItems);

    this.NonselectedItems = [];
  }
  deselectAll()
  {
    this.NonselectedItems.push(...this.selectedItems);

    this.selectedItems.splice(0,this.selectedItems.length);
    console.log(this.selectedItems);

  }
  select(item:multipleselectorModel,index:number){

this.selectedItems.push(item);
this.NonselectedItems.splice(index,1);
  }

  deselect(item:multipleselectorModel,index:number){
    this.NonselectedItems.push(item);
    this.selectedItems.splice(index,1);
  }
}
