import { Injectable } from '@angular/core';
import { actorCreationDTO, actorDTo } from './actorCreationDTO';
import { formatDateFormData } from '../utilities/input-img/util';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorsServiceService {
  private APIURl = 'https://localhost:7030/api';
  private SPECIFICURl = '/Actors';


  get(page:number , recordPerPage:number):Observable<any>
  {
    let params = new HttpParams();
    params = params.append('Page', page.toString());
    params = params.append('recordPerPage',recordPerPage.toString());
    return this.http.get<actorCreationDTO[]>(this.APIURl+ this.SPECIFICURl , {observe:'response' ,params});
  }
  getByID(id : number) : Observable<actorDTo>
  {
    return this.http.get<actorDTo>(`${this.APIURl+ this.SPECIFICURl}/${id}`);
  }
  edit(id:number , actor: actorCreationDTO)
  {
    const formData = this.buildFormData(actor);
    return this.http.put(`${this.APIURl+ this.SPECIFICURl}/${id}`, formData);
  }
  constructor(private http: HttpClient) { }

  create(actor : actorCreationDTO)
  {
    const formData = this.buildFormData(actor);
    return this.http.post(this.APIURl + this.SPECIFICURl , formData)
  }
  private buildFormData(actor : actorCreationDTO) : FormData
  {
    const formData = new FormData();

    formData.append('name' , actor.name);

    if(actor.biography)
    {
      formData.append('biography', actor.biography)
    }
    if(actor.dateOfBirth)
    {
      formData.append('dateOfBirth', formatDateFormData(actor.dateOfBirth))
    }
    if(actor.picture)
    {
      formData.append('picture',actor.picture);
    }

    return formData;
  }
  delete(id : number){
    return this.http.delete(`${this.APIURl+ this.SPECIFICURl}/${id}`);
  }
}
export interface PaginationSTO
{
    Page:number;
    recordPerPage :number;
}