import { Injectable } from '@angular/core';
import { StudentDetailDto } from 'app/models/dtoS/studentDetailDto';
import { HttpClient } from '@angular/common/http';
import { Api } from 'app/constants/api';
import { ListResponseModel } from 'app/models/responseModels/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'app/models/responseModels/singleResponseModel';
import { Student } from 'app/models/entities/student';
import { ResponseModel } from 'app/models/responseModels/responseModel';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  apiUrl = `${Api.url}/students`;

  constructor(private httpClient: HttpClient) { }

  // Get
  getAllDto(): Observable<ListResponseModel<StudentDetailDto>> {
    return this.httpClient.get<ListResponseModel<StudentDetailDto>>(`${this.apiUrl}/getalldto`);
  }

  getDto(id:number): Observable<SingleResponseModel<StudentDetailDto>> {
    return this.httpClient.get<SingleResponseModel<StudentDetailDto>>(`${this.apiUrl}/getdto?id=${id}`);
  }

  getDtoByUserName(userName:string): Observable<SingleResponseModel<StudentDetailDto>> {
    return this.httpClient.get<SingleResponseModel<StudentDetailDto>>(`${this.apiUrl}/getdtobyusername?userName=${userName}`);
  }

  getAllCount(): Observable<SingleResponseModel<number>> {
    return this.httpClient.get<SingleResponseModel<number>>(`${this.apiUrl}/getallcount`);
  }

  // Post
  add(entity:Student): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`, entity);
  }
}
