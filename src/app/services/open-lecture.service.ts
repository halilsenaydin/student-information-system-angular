import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from 'app/constants/api';
import { ListResponseModel } from 'app/models/responseModels/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'app/models/responseModels/singleResponseModel';
import { ResponseModel } from 'app/models/responseModels/responseModel';
import { OpenLectureDetailDto } from 'app/models/dtoS/openLectureDetailDto';
import { OpenLectureView } from 'app/models/views/openLectureView';
import { OpenLecture } from 'app/models/entities/openLecture';

@Injectable({
  providedIn: 'root'
})
export class OpenLectureService {
  apiUrl = `${Api.url}/openLectures`;

  constructor(private httpClient: HttpClient) { }

  // Get
  getAllDto(): Observable<ListResponseModel<OpenLectureDetailDto>> {
    return this.httpClient.get<ListResponseModel<OpenLectureDetailDto>>(`${this.apiUrl}/getalldto`);
  }

  getDto(id:number): Observable<SingleResponseModel<OpenLectureDetailDto>> {
    return this.httpClient.get<SingleResponseModel<OpenLectureDetailDto>>(`${this.apiUrl}/getdto?id=${id}`);
  }

  getAllViewByTeacherIdAndSemesterId(teacherId:number, semesterId:number): Observable<ListResponseModel<OpenLectureView>> {
    return this.httpClient.get<ListResponseModel<OpenLectureView>>(`${this.apiUrl}/getallviewbyteacheridandsemesterid?teacherId=${teacherId}&semesterId=${semesterId}`);
  }

  getViewByTeacherIdAndSemesterId(teacherId:number, semesterId:number): Observable<SingleResponseModel<OpenLectureView>> {
    return this.httpClient.get<SingleResponseModel<OpenLectureView>>(`${this.apiUrl}/getviewbyteacheridandsemesterid?teacherId=${teacherId}&semesterId=${semesterId}`);
  }

  // Post
  add(entity:OpenLecture): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`, entity);
  }
}
