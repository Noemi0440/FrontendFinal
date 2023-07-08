import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValueLong } from 'src/app/dto/value-long';

@Injectable({
  providedIn: 'root'
})
export class FindByCPService {
  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/catalog/address';

  private headers = new HttpHeaders().set(
    'Content-Type',
    'application/json; charset=utf-8'
  );

  private valueLong: ValueLong;

  _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { 

  }

  getInfoByCP(cp : number): Observable<any> {
    this.valueLong = new ValueLong();
    this.valueLong.value = cp;
    return this.http.post(this.urlEndPoint, JSON.stringify(this.valueLong), {headers: this.headers});
  }
}
