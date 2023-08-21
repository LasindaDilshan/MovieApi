import { Injectable } from '@angular/core';
import { movieTheaterCreationDto } from './movietheatermodel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService {

  private APIURl = 'https://localhost:7030/api';
  private SPECIFICURl = '/genres'; 

  constructor(private http: HttpClient) { }

  public create(MovieTheaterCreationDto : movieTheaterCreationDto){
       return this.http.post(this.APIURl+this.SPECIFICURl, MovieTheaterCreationDto);
  }
  public edit(id:number,MovieTheaterCreationDto : movieTheaterCreationDto)
  {
    return this.http.put(`${this.APIURl}/${id}`, MovieTheaterCreationDto);
  }
  public get():Observable<movieTheaterCreationDto[]>{
    return this.http.get<movieTheaterCreationDto[]>(this.APIURl);
  }
  public getById(id : number):Observable<movieTheaterCreationDto>{
    return this.http.get<movieTheaterCreationDto>(`${this.APIURl}/${id}`);
  }

}
