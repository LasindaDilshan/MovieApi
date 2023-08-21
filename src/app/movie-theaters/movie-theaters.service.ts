import { Injectable } from '@angular/core';
import { movieTheaterCreationDto, movieTheaterDto } from './movietheatermodel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService {

  private APIURl = 'https://localhost:7030/api';
  private SPECIFICURl = '/MovieTheater'; 

  constructor(private http: HttpClient) { }

  public create(MovieTheaterCreationDto : movieTheaterCreationDto){
       return this.http.post(this.APIURl+this.SPECIFICURl, MovieTheaterCreationDto);
  }
  public edit(id:number,MovieTheaterCreationDto : movieTheaterCreationDto)
  {
    return this.http.put(`${this.APIURl}/${id}`, MovieTheaterCreationDto);
  }
  public get():Observable<movieTheaterCreationDto[]>{
    return this.http.get<movieTheaterCreationDto[]>(this.APIURl+this.SPECIFICURl);
  }
  public getById(id : number):Observable<movieTheaterDto>{
    return this.http.get<movieTheaterDto>(`${this.APIURl+this.SPECIFICURl}/${id}`);
  }

}
