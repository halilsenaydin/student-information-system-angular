import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from 'app/constants/api';
import { ListResponseModel } from 'app/models/responseModels/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'app/models/responseModels/singleResponseModel';
import { ResponseModel } from 'app/models/responseModels/responseModel';
import { LoginDto } from 'app/models/dtoS/loginDto';
import { TokenModel } from 'app/models/entities/tokenModel';
import { RegisterTeacherDto } from 'app/models/dtoS/registerTeacherDto';
import { RegisterStudentDto } from 'app/models/dtoS/registerStudentDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = `${Api.url}/auth`;

  constructor(private httpClient: HttpClient) { }

  // Post
  login(entity: LoginDto) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(`${this.apiUrl}/login`, entity);
  }

  registerForTeacher(entity: RegisterTeacherDto) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(`${this.apiUrl}/registerforteacher`, entity);
  }

  registerForStudent(entity: RegisterStudentDto) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(`${this.apiUrl}/registerforstudent`, entity);
  }

  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    }
    else {
      return false;
    }
  }
}
