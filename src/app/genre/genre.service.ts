import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { genreCreationDTO, genreDTO } from './genreDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private APIURl = 'https://localhost:7030/api';
  private SPECIFICURl = '/genres';
  constructor(private http: HttpClient) { }

  getAll():Observable<genreDTO[]>{
    return this.http.get<genreDTO[]>(this.APIURl + this.SPECIFICURl);
  }
  create( genre :genreCreationDTO )
  {
    return this.http.post(this.APIURl+this.SPECIFICURl ,genre );
  }
  getById(id:number):Observable<genreDTO>
  {
    return this.http.get<genreDTO>(`${this.APIURl}/${id}`);
  }
  edit(id:number , genre: genreCreationDTO){
    return this.http.put(`${this.APIURl}/${id}`,genre);
  }
}
