import { Injectable } from '@angular/core';
import { actorCreationDTO } from './actorCreationDTO';
import { formatDateFormData } from '../utilities/input-img/util';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActorsServiceService {
  private APIURl = 'https://localhost:7030/api';
  private SPECIFICURl = '/Actors';
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
}
