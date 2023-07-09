import { Component, OnInit } from '@angular/core';
import { ListTopicsService } from 'src/app/services/catalog/list-topics.service';
import { PdfService } from 'src/app/services/impresion/pdf.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit{
  title:String;
  response: any[];
  constructor(private pdfService: PdfService, private listTopicsService:ListTopicsService){
    
  }
  ngOnInit(): void {
    
  }

  reportes(){
    const dataFirst: Array<any>=[];
    let data: Array<any>;
    const hola =["id","Nombre", "Horas"];
    this.listTopicsService.getCategories().subscribe(response=>{
      this.response= response;
      console.log(this.response);
      console.log(this.response.length);
      for(let i=0; i<this.response.length; i++){
        data = new Array;
        data.push(this.response[i].id);
        data.push(this.response[i].name);
        data.push(this.response[i].hours);
        dataFirst.push(data);
      }
      console.log(dataFirst);
      // for(let i=0; i<=this.response.length; i++){

      // }
      this.pdfService.imprimir(hola,dataFirst,"Listado de asignaturas",true);

    });
    
    

      //this.pdfService.imprimir(hola,response.data,"Listado de asignaturas",true);

    

  }

}
