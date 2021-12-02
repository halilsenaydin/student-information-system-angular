import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from 'app/constants/api';
import { ListResponseModel } from 'app/models/responseModels/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'app/models/responseModels/singleResponseModel';
import { ResponseModel } from 'app/models/responseModels/responseModel';
import { TakingLectureDetailDto } from 'app/models/dtoS/takingLectureDetailDto';
import { TakingLecture } from 'app/models/entities/takingLecture';

@Injectable({
  providedIn: 'root'
})
export class TakingLectureService {
  apiUrl = `${Api.url}/takingLectures`;

  constructor(private httpClient: HttpClient) { }

  // Get
  getAllDto(): Observable<ListResponseModel<TakingLectureDetailDto>> {
    return this.httpClient.get<ListResponseModel<TakingLectureDetailDto>>(`${this.apiUrl}/getalldto`);
  }

  getDto(id:number): Observable<SingleResponseModel<TakingLectureDetailDto>> {
    return this.httpClient.get<SingleResponseModel<TakingLectureDetailDto>>(`${this.apiUrl}/getdto?id=${id}`);
  }

  getAllDtoByStudentId(studentId:number): Observable<ListResponseModel<TakingLectureDetailDto>> {
    return this.httpClient.get<ListResponseModel<TakingLectureDetailDto>>(`${this.apiUrl}/getalldtobystudentid?id=${studentId}`);
  }

  getDtoByStudentId(studentId:number): Observable<SingleResponseModel<TakingLectureDetailDto>> {
    return this.httpClient.get<SingleResponseModel<TakingLectureDetailDto>>(`${this.apiUrl}/getdtobystudentid?id=${studentId}`);
  }

  // Post
  add(entity:TakingLecture): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`, entity);
  }
}
