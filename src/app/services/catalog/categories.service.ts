import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValueLabel } from '../../dto/value-label';

@Injectable()
export class CategoriesService {
  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/catalog/categorias'

  constructor( private http: HttpClient) { }

  getCategories(): Observable<ValueLabel[]>{
    return this.http.get<ValueLabel[]>(this.urlEndPoint);
  }

}
