import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { UsuarioBasicoDTO } from 'src/app/dto/usuario-basico-dto';
import { SearchDTO } from 'src/app/dto/search-dto';

@Injectable({providedIn:'root'})
export class ListTeacherBySearchService {

  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/catalog/maestros';

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

    return this.http.post(this.urlEndPoint, JSON.stringify(this.searchDTO), {headers: this.headers,})
    .pipe(
      tap(()=>{
        this._refresh$.next();
      }
      )
    );

  //   return this.http.post(this.urlEndPoint, JSON.stringify(this.searchDTO), {headers: this.headers,})
  //     .pipe(
  //       tap((response: any) => {
  //         (response.content as UsuarioBasicoDTO[]).forEach(
  //           (usuarioBasicoDTO) => {
  //           }
  //         );
  //       }),
  //       map((response: any) => {
  //         (response.content as UsuarioBasicoDTO[]).map((usuarioBasicoDTO) => {
  //           return usuarioBasicoDTO;
  //         });
  //         return response;
  //       }));

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
