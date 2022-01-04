import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'app/constants/api';
import { Denotation } from 'app/models/entities/denotation';
import { ListResponseModel } from 'app/models/responseModels/listResponseModel';
import { ResponseModel } from 'app/models/responseModels/responseModel';
import { SingleResponseModel } from 'app/models/responseModels/singleResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DenotationService {
  apiUrl = `${Api.url}/denotations`;

  constructor(private httpClient: HttpClient) { }

  // Get
  getAll(): Observable<ListResponseModel<Denotation>> {
    return this.httpClient.get<ListResponseModel<Denotation>>(`${this.apiUrl}/getall`);
  }

  get(id:number): Observable<SingleResponseModel<Denotation>> {
    return this.httpClient.get<SingleResponseModel<Denotation>>(`${this.apiUrl}/get?id=${id}`);
  }

  // Post
  add(entity:Denotation): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`, entity);
  }
}
