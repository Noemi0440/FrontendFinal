import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeriodDTO } from 'src/app/dto/period-dto';
import { ValueLabel } from 'src/app/dto/value-label';

@Injectable({
  providedIn: 'root'
})
export class FindPeriodsService {

  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/catalog/periodos'

  constructor( private http: HttpClient) { }

  getPeriods(): Observable<PeriodDTO[]>{
    return this.http.get<PeriodDTO[]>(this.urlEndPoint);
  }

}
