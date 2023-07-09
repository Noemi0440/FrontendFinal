import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ValueLabel } from 'src/app/dto/value-label';

@Injectable({
  providedIn: 'root'
})
export class LicenciaturaService {

  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/catalog/licenciaturas'

  constructor( private http: HttpClient) { }

  getLicenciaturas(): Observable<ValueLabel[]>{
    return this.http.get<ValueLabel[]>(this.urlEndPoint);
  }
}
