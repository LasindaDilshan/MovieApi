export interface movieCreationDTO {
  title: string;
  summery: string;
  poster: File;
  inTheater: Boolean;
  releaseDate: Date;
  trailer: string;
  genreId: number[];
  movietheaterids: number[];
}

export interface movieDTO {
  title: string;
  summery: string;
  poster: string;
  inTheater: Boolean;
  releaseDate: Date;
  trailer: string;
}
