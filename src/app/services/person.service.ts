import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from 'app/constants/api';
import { ListResponseModel } from 'app/models/responseModels/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'app/models/responseModels/singleResponseModel';

import { ResponseModel } from 'app/models/responseModels/responseModel';
import { PersonDetailDto } from 'app/models/dtoS/personDetailDto';
import { Person } from 'app/models/entities/person';
import { PersonOperationClaimDto } from 'app/models/dtoS/personOperationClaimDto';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  apiUrl = `${Api.url}/persons`;

  constructor(private httpClient: HttpClient) { }

    // Get
    getClaimsByUserName(userName:string): Observable<SingleResponseModel<PersonOperationClaimDto>> {
      return this.httpClient.get<SingleResponseModel<PersonOperationClaimDto>>(`${this.apiUrl}/getclaimsbyusername?userName=${userName}`);
    }
}
