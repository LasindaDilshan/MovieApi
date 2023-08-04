import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreationDTO, actorDTo } from '../../actorCreationDTO';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit{
  form!: FormGroup;
@Input()
  model: actorDTo | undefined;

  @Output()
   onSaveChangesa = new EventEmitter<actorCreationDTO>();
  constructor(private formBuilder : FormBuilder){}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['' , {validators:[Validators.required]}],
        dateOfBirth:'',
        picture:'',
        biography:''
      }
    )
    if(this.model !== undefined)
    {
      this.form.patchValue(this.model);
    }
  }
  saveChanges()
  {
     this.onSaveChangesa.emit(this.form.value);
  }
  Chnageimage($event: any)
  {
     console.log($event);
     this.form.get('picture')?.setValue($event);
  }
  onChnageBio($event: any)
  {
     this.form.get('biography')?.setValue($event);
  }

}
