import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValueLabel } from 'src/app/dto/value-label';

@Injectable()
export class RolesService {

  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/catalog/roles'

  constructor( private http: HttpClient) { }

  getRoles(): Observable<ValueLabel[]>{
    return this.http.get<ValueLabel[]>(this.urlEndPoint);
  }
}
