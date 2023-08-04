import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLtterUpperCase } from 'src/app/Validators/firstLetterUpperCase';
import { genreDTO } from '../genreDTO';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form.genre.component.html',
  styleUrls: ['./form.genre.component.css'],
})
export class FormGenreComponent {
  form!: FormGroup;
  @Output() onSaveChanges: EventEmitter<genreDTO> =
    new EventEmitter<genreDTO>();
  @Input() model!: genreDTO;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', { validators: [Validators.required, firstLtterUpperCase()] }],
    });
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }
  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
    this.router.navigate(['genres']);
  }
  getErrorMessageFieldName() {
    const field = this.form.get('name');
    if (field?.hasError('required')) {
      return 'The name field is required';
    }
    if (field?.hasError('firstLtterUpperCase')) {
      return field.getError('firstLtterUpperCase').messaage;
    }
    return '';
  }
}
