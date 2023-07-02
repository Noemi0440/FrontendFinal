import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValueLong } from 'src/app/dto/value-long';

@Injectable({
  providedIn: 'root'
})
export class ListPersonalDataService {

  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/catalog/personalDataBasic';

  private headers = new HttpHeaders().set(
    'Content-Type',
    'application/json; charset=utf-8'
  );

  _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  getPersonalData(valueLong : ValueLong): Observable<any> {
    return this.http.post(this.urlEndPoint, JSON.stringify(valueLong), {headers: this.headers});

  }


}
