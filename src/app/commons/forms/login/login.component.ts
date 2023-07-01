import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

  title : String;

  constructor(){

  }

  ngOnInit(): void {
    if(history.state.id==1){
      this.title = 'alumnos';
    }else{
      this.title = 'profesores';
    }
  }

}
