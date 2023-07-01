import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValueBoolean } from '../../dto/value-boolean';

@Injectable()
export class BackupDBService {

  private urlEndPoint: string = 'http://localhost:5002/reinscripcion/catalog/recovery';

  private data : Observable<ValueBoolean>;

  constructor( private http: HttpClient) { }

  getBackupDB(): Observable<ValueBoolean>{
     this.data = this.http.get<ValueBoolean>(this.urlEndPoint);
    return this.data;
  }

}
