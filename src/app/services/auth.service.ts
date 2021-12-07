import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from 'app/constants/api';
import { ListResponseModel } from 'app/models/responseModels/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'app/models/responseModels/singleResponseModel';
import { ResponseModel } from 'app/models/responseModels/responseModel';
import { LoginDto } from 'app/models/dtoS/loginDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = `${Api.url}/auth`;

  constructor(private httpClient: HttpClient) { }

  // Post
  login(entity: LoginDto): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/login`, entity);
  }

}
