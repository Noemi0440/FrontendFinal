import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListTopicsService } from 'src/app/services/catalog/list-topics.service';
import { PdfService } from 'src/app/services/impresion/pdf.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit{
  title:String;
  response: any[];
  constructor(private pdfService: PdfService, private listTopicsService:ListTopicsService, private router: Router){
    
  }
  ngOnInit(): void {
    
  }

  reportes(){
    Swal.fire({
      title: 'Deseas generar el reporte',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Guardado!', '', 'success')
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
        this.router.navigate(['/headerControl']);
      } else if (result.isDenied) {
        Swal.fire('Los cambios no serán guardados', '', 'info')
      }
    })
    
    
    

      //this.pdfService.imprimir(hola,response.data,"Listado de asignaturas",true);

    

  }

}
