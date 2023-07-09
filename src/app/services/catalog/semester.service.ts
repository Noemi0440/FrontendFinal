import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ValueLabel } from 'src/app/dto/value-label';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/catalog/semestres'

  constructor( private http: HttpClient) { }

  getPeriods(): Observable<ValueLabel[]>{
    return this.http.get<ValueLabel[]>(this.urlEndPoint);
  }
}
