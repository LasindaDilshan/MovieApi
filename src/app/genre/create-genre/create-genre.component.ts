import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLtterUpperCase } from 'src/app/Validators/firstLetterUpperCase';
import { genreDTO } from '../genreDTO';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit{
constructor(private router: Router)
{

}
  ngOnInit(): void {

  }
  saveChanges(data : genreDTO)
  {
     console.log(data);
    this.router.navigate(['genres']);
  }


}
