import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { PersonalDataDTO } from 'src/app/dto/personal-data-dto';

@Injectable({
  providedIn: 'root'
})
export class InsertStudentServiceService {

  private personalDataDTO : PersonalDataDTO;

  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/catalog/estudiantes';

  private headers = new HttpHeaders().set(
    'Content-Type',
    'application/json; charset=utf-8'
  );

  constructor(private http: HttpClient) {

  }

  getInsertStudent(personalDataDTO : PersonalDataDTO): Observable<any> {
    this.personalDataDTO = personalDataDTO;
    return this.http.post(this.urlEndPoint, JSON.stringify(this.personalDataDTO), {headers: this.headers});
  }


}
