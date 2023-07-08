import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeriodDTO } from 'src/app/dto/period-dto';

@Injectable({
  providedIn: 'root'
})
export class CreateOrUpdatePeriodService {

  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/main/createPeriodo';

  private headers = new HttpHeaders().set(
    'Content-Type',
    'application/json; charset=utf-8'
  );

  constructor(private http: HttpClient) { }

  getPeriodService(periodDTO:PeriodDTO): Observable<any> {
    return this.http.post(this.urlEndPoint, JSON.stringify(periodDTO), {headers: this.headers});
  }
}
