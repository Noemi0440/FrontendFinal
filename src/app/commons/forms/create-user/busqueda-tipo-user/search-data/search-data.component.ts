import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioBasicoDTO } from 'src/app/dto/usuario-basico-dto';
import { ListStudentBySearchService } from 'src/app/services/catalog/list-student-by-search.service';
import { ListTeacherBySearchService } from 'src/app/services/catalog/list-teacher-by-search.service';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
})
export class SearchData implements OnChanges, OnInit {
  @Output() listadoUsuarios = new EventEmitter<UsuarioBasicoDTO[]>();

  @Input() search: String;

  @Input() value: Number;

  data: String;

  usuariosBasicoDTO: UsuarioBasicoDTO[];

  suscription: Subscription;

  constructor(private listTeacherBySearchService: ListTeacherBySearchService, private listStudentBySearchService: ListStudentBySearchService) {}
  ngOnInit(): void {
    if (this.value == 1) {
      this.listStudentBySearchService.setSearch('');
      this.listStudentBySearchService.setNoPag(0);

      this.listStudentBySearchService.getTeacher().subscribe((response) => {
        this.usuariosBasicoDTO = response.content as UsuarioBasicoDTO[];
        this.listadoUsuarios.emit(this.usuariosBasicoDTO);
      });
    } else {
      this.listTeacherBySearchService.setSearch('');
      this.listTeacherBySearchService.setNoPag(0);

      this.listTeacherBySearchService.getTeacher().subscribe((response) => {
        this.usuariosBasicoDTO = response.content as UsuarioBasicoDTO[];
        this.listadoUsuarios.emit(this.usuariosBasicoDTO);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("El valor con cambio es: "+this.value);
    if (this.value == 1) {
      this.getUsersStudent(changes);
    } else {
      console.log("Entre en teacher");
      this.getUsersTeacher(changes);
    }
    //this.getUsersTeacher(changes);
  }

  getUsersStudent(changes: SimpleChanges): void {
    if (changes['search'].currentValue != undefined) {
      this.data = changes['search'].currentValue;
      this.listStudentBySearchService.setSearch(this.data);
      this.listStudentBySearchService.setNoPag(0);
      this.listStudentBySearchService.getTeacher().subscribe((response) => {
        this.usuariosBasicoDTO = response.content as UsuarioBasicoDTO[];
        this.listadoUsuarios.emit(this.usuariosBasicoDTO);
      });
    }
  }

  getUsersTeacher(changes: SimpleChanges): void {
    if (changes['search'].currentValue != undefined) {
      this.data = changes['search'].currentValue;
      this.listTeacherBySearchService.setSearch(this.data);
      this.listTeacherBySearchService.setNoPag(0);
      this.listTeacherBySearchService.getTeacher().subscribe((response) => {
        this.usuariosBasicoDTO = response.content as UsuarioBasicoDTO[];
        this.listadoUsuarios.emit(this.usuariosBasicoDTO);
      });
    }
  }


}
