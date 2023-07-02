import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { PersonalDataDTO } from 'src/app/dto/personal-data-dto';

@Injectable({
  providedIn: 'root'
})
export class InsertUserService {

  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/control/createUser';

  private headers = new HttpHeaders().set(
    'Content-Type',
    'application/json; charset=utf-8'
  );

  constructor(private http: HttpClient) { }

  getPersonaData(personalDataDTO: PersonalDataDTO): Observable<any> {
    console.log(personalDataDTO);
    return this.http.post(this.urlEndPoint, JSON.stringify(personalDataDTO), {headers: this.headers});
  }


}
