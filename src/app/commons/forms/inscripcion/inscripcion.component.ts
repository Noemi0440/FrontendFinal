import { Component, OnInit } from '@angular/core';
import { ValueLabel } from 'src/app/dto/value-label';
import { ValueLong } from 'src/app/dto/value-long';
import { StudentService } from 'src/app/services/catalog/student.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html'
})
export class InscripcionComponent implements OnInit{

  estudiantes:ValueLabel[];

  estudiante:ValueLabel;

  response:any[];

  constructor(private studentService : StudentService){

  }
  ngOnInit(): void {

    this.estudiantes = new Array();
    this.studentService.getEstudiantes().subscribe(response=>{
      this.response = response;
      console.log(this.response.length);
      for(let i=0; i<this.response.length; i++){
        this.estudiante = new ValueLabel();
        this.estudiante.label = this.response[i].name;
        this.estudiante.value = this.response[i].id;
        this.estudiantes.push(this.estudiante);
      }
      // this.valueLongs.push(this.valueLong);
    
      
    });
    
  }

}
