import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { SearchDTO } from 'src/app/dto/search-dto';

@Injectable({providedIn:'root'})
export class ListStudentBySearchService {

  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/catalog/estudiantes';

  private headers = new HttpHeaders().set(
    'Content-Type',
    'application/json; charset=utf-8'
  );

  _refresh$ = new Subject<void>();

  private search: String;

  private noPag: number;

  private searchDTO: SearchDTO;

  constructor(private http: HttpClient) {}

  getTeacher(): Observable<any> {
    this.searchDTO = new SearchDTO();
    this.searchDTO.setSearch(this.getSearch());
    this.searchDTO.setNoPag(this.getNoPag());

    return this.http.post(this.urlEndPoint, JSON.stringify(this.searchDTO), {headers: this.headers})
    .pipe(
      tap(()=>{
        this._refresh$.next();
      }
      )
    );

  }

  public getSearch() {
    return this.search;
  }

  public setSearch(search: String) {
    this.search = search;
  }

  public getNoPag() {
    return this.noPag;
  }

  public setNoPag(noPag: number): number {
    return (this.noPag = noPag);
  }
}
