import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleselectorModel } from 'src/app/utilities/multiple-selector/mutiple-selector.model';
import { movieCreationDTO, movieDTO } from '../movieCreationDTO';

@Component({
  selector: 'app-formmovie',
  templateUrl: './formmovie.component.html',
  styleUrls: ['./formmovie.component.css'],
})
export class FormmovieComponent implements OnInit {
  form!: FormGroup;
  @Input() model: movieDTO | undefined;
  @Output() onsaveChanges = new EventEmitter<movieCreationDTO>();
  NonselectedItems: multipleselectorModel[] = [
    { key: 1, value: 'Drama' },
    { key: 2, value: 'Acion' },
    { key: 3, value: 'Comedy' },
  ];
  selectedItems: multipleselectorModel[] = [];
  selectedItemsmovies: multipleselectorModel[] = [];
  NonselectedItemsmovies: multipleselectorModel[] = [
    { key: 1, value: 'Agora' },
    { key: 2, value: 'Sambol' },
    { key: 3, value: 'Megacentro' },
  ];
  constructor(private frombuilder: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.frombuilder.group({
      title: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      summary: '',
      inTheater: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genreId: '',
      movietheaterids: '',
    });
    if (this.model != undefined) {
      this.form.patchValue(this.model);
    }
  }
  onChangeImage(file: File) {
    this.form.get('poster')?.setValue(file);
  }
  changeMarkdown($event: string) {
    this.form.get('summary')?.setValue($event);
  }
  saveChanges() {
    const genreIds = this.selectedItems.map((value) => value.key);
    const moviesids = this.selectedItemsmovies.map((value) => value.key);
    console.log(this.selectedItems);
    this.form.get('genreId')?.setValue(genreIds);
    this.form.get('movietheaterids')?.setValue(moviesids);
    this.onsaveChanges.emit(this.form.value);
  }
}
