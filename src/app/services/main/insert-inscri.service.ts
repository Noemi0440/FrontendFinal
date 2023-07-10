import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InscripcionDTO } from 'src/app/dto/insert-dto';

@Injectable({
  providedIn: 'root'
})
export class InsertInscriService {

  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/control/createInscripcion';

  private headers = new HttpHeaders().set(
    'Content-Type',
    'application/json; charset=utf-8'
  );

  constructor(private http: HttpClient) { }

  getPersonaDataStudent(inscripcionDTO: InscripcionDTO): Observable<any> {
    return this.http.post(this.urlEndPoint, JSON.stringify(inscripcionDTO), {headers: this.headers});
  }
}
