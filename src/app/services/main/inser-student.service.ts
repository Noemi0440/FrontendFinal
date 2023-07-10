import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ValueLong } from 'src/app/dto/value-long';

@Injectable({
  providedIn: 'root'
})
export class InserStudentService {

  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/control/createStudent';

  private headers = new HttpHeaders().set(
    'Content-Type',
    'application/json; charset=utf-8'
  );

  constructor(private http: HttpClient) { }

  getPersonaDataStudent(valueLong: ValueLong): Observable<any> {
    return this.http.post(this.urlEndPoint, JSON.stringify(valueLong), {headers: this.headers});
  }
}
