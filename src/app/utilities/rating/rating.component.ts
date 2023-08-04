import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
@Input() maxRating = 5;
maxRatingArr : any= [];
@Input() selectedRate = 0;
previousRate = 0;
@Output() onrating: EventEmitter<number> = new EventEmitter<number>();
ngOnInit()
{
  this.maxRatingArr = Array(this.maxRating).fill(0);
}
handleMouseEnter(index:number)
{
  this.selectedRate = index+1;
  console.log(this.selectedRate)
  console.log("handleMouseEnter 1")
}
handleMouseLeave()
{
  if(this.previousRate!==0)
  {
  this.selectedRate = this.previousRate;
  console.log("handleMouseLeave 1")

  }
  else
  {
    this.selectedRate = 0;
    console.log("handleMouseLeave 2")

  }
}
rate(index:number)
{
  this.selectedRate = index+1;
  this.previousRate = this.selectedRate;
  this.onrating.emit(this.selectedRate);
}
}
