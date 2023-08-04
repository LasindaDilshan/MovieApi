import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinatesMap } from 'src/app/utilities/map/coordinateMap';
import { movieTheaterCreationDto, movieTheaterDto } from '../movietheatermodel';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit{
  form! : FormGroup;
  @Output()
  onSaveChanges = new EventEmitter<movieTheaterCreationDto>();

  @Input()
  model! : movieTheaterDto;
  intialCoordinate : coordinatesMap[]=[];

  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name:['',{
          validators:[Validators.required]
        }],
        longitude:['',{
          validators:[Validators.required]
        }],
        latitude:['',{
          validators:[Validators.required]
        }]

      }
    )
    if(this.model !== undefined)
    {
      this.form.patchValue(this.model);
      this.intialCoordinate.push({latitude: this.model.latitude , longitude: this.model.longitude});
    }
  }
  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }
  onSelectedLocation($event: coordinatesMap)
  {
     this.form.patchValue($event);
  }

}
