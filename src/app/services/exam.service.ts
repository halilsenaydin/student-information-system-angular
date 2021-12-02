import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from 'app/constants/api';
import { ListResponseModel } from 'app/models/responseModels/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'app/models/responseModels/singleResponseModel';
import { ResponseModel } from 'app/models/responseModels/responseModel';
import { ExamDetailDto } from 'app/models/dtoS/examDetailDto';
import { Exam } from 'app/models/entities/exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  apiUrl = `${Api.url}/exams`;

  constructor(private httpClient: HttpClient) { }

  // Get
  getAllDto(): Observable<ListResponseModel<ExamDetailDto>> {
    return this.httpClient.get<ListResponseModel<ExamDetailDto>>(`${this.apiUrl}/getalldto`);
  }

  getDto(id:number): Observable<SingleResponseModel<ExamDetailDto>> {
    return this.httpClient.get<SingleResponseModel<ExamDetailDto>>(`${this.apiUrl}/getdto?id=${id}`);
  }

  getAllDtoByStudentId(studentId:number): Observable<ListResponseModel<ExamDetailDto>> {
    return this.httpClient.get<ListResponseModel<ExamDetailDto>>(`${this.apiUrl}/getalldtobystudentid?id=${studentId}`);
  }

  getDtoByStudentId(studentId:number): Observable<SingleResponseModel<ExamDetailDto>> {
    return this.httpClient.get<SingleResponseModel<ExamDetailDto>>(`${this.apiUrl}/getdtobystudentid?id=${studentId}`);
  }

  // Post
  add(entity:Exam): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`, entity);
  }
}
