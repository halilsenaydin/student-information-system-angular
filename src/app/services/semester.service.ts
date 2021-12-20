import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'app/constants/api';
import { Semester } from 'app/models/entities/semester';
import { ListResponseModel } from 'app/models/responseModels/listResponseModel';
import { SingleResponseModel } from 'app/models/responseModels/singleResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {
  apiUrl = `${Api.url}/semesters`;

  constructor(private httpClient: HttpClient) { }

    // Get
    get(id:number): Observable<SingleResponseModel<Semester>> {
      return this.httpClient.get<SingleResponseModel<Semester>>(`${this.apiUrl}/get?id=${id}`);
    }

    getAll(): Observable<ListResponseModel<Semester>> {
      return this.httpClient.get<ListResponseModel<Semester>>(`${this.apiUrl}/getall`);
    }
}
