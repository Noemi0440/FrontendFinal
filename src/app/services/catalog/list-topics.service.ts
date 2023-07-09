import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListTopicsService {

  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/catalog/materias'

  constructor( private http: HttpClient) { }

  getCategories(): Observable<any>{
    return this.http.get<any>(this.urlEndPoint);
  }
}
