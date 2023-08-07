import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-errors',
  templateUrl: './display-errors.component.html',
  styleUrls: ['./display-errors.component.css']
})
export class DisplayErrorsComponent implements OnInit,OnChanges{
  @Input() errors : string[] = [];
constructor(private cdRef: ChangeDetectorRef){}
ngOnInit(): void {
  console.log('this.errors' , this.errors)
}
ngOnChanges(changes: SimpleChanges) {
  this.cdRef.detectChanges();
  // on loading you can access childdata
  console.log('abc ' , changes['errors'].currentValue);
}

}
