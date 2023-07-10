import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/catalog/estudentAll'

  constructor( private http: HttpClient) { }

  getEstudiantes(): Observable<any>{
    return this.http.get<any>(this.urlEndPoint);
  }
}
