import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'app/constants/api';
import { AcademicUnit } from 'app/models/entities/academicUnit';
import { ListResponseModel } from 'app/models/responseModels/listResponseModel';
import { ResponseModel } from 'app/models/responseModels/responseModel';
import { SingleResponseModel } from 'app/models/responseModels/singleResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcademicUnitService {
  apiUrl = `${Api.url}/academicUnits`;

  constructor(private httpClient: HttpClient) { }

  // Get
  getAll(): Observable<ListResponseModel<AcademicUnit>> {
    return this.httpClient.get<ListResponseModel<AcademicUnit>>(`${this.apiUrl}/getall`);
  }

  get(id:number): Observable<SingleResponseModel<AcademicUnit>> {
    return this.httpClient.get<SingleResponseModel<AcademicUnit>>(`${this.apiUrl}/get?id=${id}`);
  }

  // Post
  add(entity:AcademicUnit): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`, entity);
  }
}
