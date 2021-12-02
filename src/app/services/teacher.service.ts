import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from 'app/constants/api';
import { ListResponseModel } from 'app/models/responseModels/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'app/models/responseModels/singleResponseModel';
import { ResponseModel } from 'app/models/responseModels/responseModel';
import { TeacherDetailDto } from 'app/models/dtoS/teacherDetailDto';
import { Teacher } from 'app/models/entities/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  apiUrl = `${Api.url}/teachers`;

  constructor(private httpClient: HttpClient) { }

  // Get
  getAllDto(): Observable<ListResponseModel<TeacherDetailDto>> {
    return this.httpClient.get<ListResponseModel<TeacherDetailDto>>(`${this.apiUrl}/getalldto`);
  }

  getDto(id:number): Observable<SingleResponseModel<TeacherDetailDto>> {
    return this.httpClient.get<SingleResponseModel<TeacherDetailDto>>(`${this.apiUrl}/getdto?id=${id}`);
  }

  // Post
  add(entity:Teacher): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`, entity);
  }
}
