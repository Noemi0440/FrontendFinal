import { Component, OnInit } from '@angular/core';
import { UsuarioBasicoDTO } from 'src/app/dto/usuario-basico-dto';

@Component({
  selector: 'app-busqueda-tipo-user',
  templateUrl: './busqueda-tipo-user.component.html'
})
export class BusquedaTipoUserComponent implements OnInit{
  value: Number;
  ngOnInit(): void {
    if(history.state.id==1){
      this.title = 'para alumnos';
    }else{
      this.title = 'para profesores';
    }
    this.value = history.state.id;
  }
  title!: string;
  users : UsuarioBasicoDTO[];

  public search:String;


  listadoUsuarios(usuarioBasicoDTO : UsuarioBasicoDTO[]){

    this.users = usuarioBasicoDTO;
  }

}
