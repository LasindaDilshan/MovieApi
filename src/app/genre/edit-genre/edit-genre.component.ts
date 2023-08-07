import { Component, EventEmitter, Input, OnInit } from "@angular/core";
import { genreCreationDTO, genreDTO } from "../genreDTO";
import { ActivatedRoute, Router } from "@angular/router";
import { GenreService } from "../genre.service";

@Component({
  selector: "app-edit-genre",
  templateUrl: "./edit-genre.component.html",
  styleUrls: ["./edit-genre.component.css"],
})
export class EditGenreComponent implements OnInit {
  model!: genreDTO;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private genreService: GenreService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.genreService.getById(params["id"]).subscribe((genre) => {
        this.model = genre;
      });
    });
  }

  saveChanges(_genreCreationDTO: genreCreationDTO) {
    this.genreService.edit(this.model.id, _genreCreationDTO).subscribe(() => {
      this.router.navigate(["/genres"]);
    });
  }
}
