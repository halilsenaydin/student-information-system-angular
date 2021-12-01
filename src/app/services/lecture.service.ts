import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from 'app/constants/api';
import { ListResponseModel } from 'app/models/responseModels/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'app/models/responseModels/singleResponseModel';
import { ResponseModel } from 'app/models/responseModels/responseModel';
import { LectureDetailDto } from 'app/models/dtoS/lectureDetailDto';
import { Lecture } from 'app/models/entities/lecture';

@Injectable({
  providedIn: 'root'
})
export class LectureService {
  apiUrl = `${Api.url}/students`;

  constructor(private httpClient: HttpClient) { }

  // Get
  getAllDto(): Observable<ListResponseModel<LectureDetailDto>> {
    return this.httpClient.get<ListResponseModel<LectureDetailDto>>(`${this.apiUrl}/getalldto`);
  }

  getDto(id:number): Observable<SingleResponseModel<LectureDetailDto>> {
    return this.httpClient.get<SingleResponseModel<LectureDetailDto>>(`${this.apiUrl}/getdto?id=${id}`);
  }

  // Post
  add(entity:Lecture): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`, entity);
  }
}
