import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'app/constants/api';
import { Department } from 'app/models/entities/department';
import { ListResponseModel } from 'app/models/responseModels/listResponseModel';
import { ResponseModel } from 'app/models/responseModels/responseModel';
import { SingleResponseModel } from 'app/models/responseModels/singleResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  apiUrl = `${Api.url}/departments`;

  constructor(private httpClient: HttpClient) { }

  // Get
  getAll(): Observable<ListResponseModel<Department>> {
    return this.httpClient.get<ListResponseModel<Department>>(`${this.apiUrl}/getall`);
  }

  getDto(id:number): Observable<SingleResponseModel<Department>> {
    return this.httpClient.get<SingleResponseModel<Department>>(`${this.apiUrl}/get?id=${id}`);
  }

  // Post
  add(entity:Department): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`, entity);
  }
}
