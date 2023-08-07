import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { firstLtterUpperCase } from "src/app/Validators/firstLetterUpperCase";
import { genreCreationDTO, genreDTO } from "../genreDTO";
import { GenreService } from "../genre.service";
import { parseWebapiErrors } from "src/app/utilities/input-img/util";

@Component({
  selector: "app-create-genre",
  templateUrl: "./create-genre.component.html",
  styleUrls: ["./create-genre.component.css"],
})
export class CreateGenreComponent implements OnInit {
  errors: string[] = [];
  constructor(
    private router: Router,
    private genreService: GenreService,
    private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {}
  saveChanges(data: genreCreationDTO) {
    console.log(data);
    this.genreService.create(data).subscribe(
      {
        next: (v) =>{
          
          console.log("this.errors V : ", this.errors);
        } ,
        error: (e) => { this.errors = parseWebapiErrors(e); console.info('this.errors ',this.errors ); },
        complete: () => {this.router.navigate(["genres"]);console.info('complete'); console.info('this.errors ',this.errors ) }
    }
     
    );
    
  }
}

