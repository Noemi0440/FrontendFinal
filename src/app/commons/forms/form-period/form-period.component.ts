import { Component, OnInit } from '@angular/core';
import { PeriodDTO } from 'src/app/dto/period-dto';
import { ValueLong } from 'src/app/dto/value-long';
import { CreateOrUpdatePeriodService } from 'src/app/services/main/create-or-update-period.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FindPeriodsByIdService } from 'src/app/services/catalog/find-periods-by-id.service';

@Component({
  selector: 'app-form-period',
  templateUrl: './form-period.component.html',
})
export class FormPeriodComponent implements OnInit{
  title: String;
  flag = true;
  init: Date;
  ends: Date;
  minDate:String;
  periodDTO:PeriodDTO;
  valueLong: ValueLong;
  constructor(private createOrUpdatePeriodService:CreateOrUpdatePeriodService,private router: Router, private findPeriodsByIdService:FindPeriodsByIdService){

  }
  ngOnInit(): void {
    this.title = 'Alta formulario';
    var date = new Date();
    this.minDate = date.toISOString().substring(0, 10);
    this.periodDTO = new PeriodDTO();
    if(history.state.flag==true){
      this.periodDTO.id = 0;
    }else{
      this.periodDTO.id = history.state.id;
      this.valueLong = new ValueLong();
      this.valueLong.value = history.state.id;
      this.findPeriodsByIdService.getPeriodById(this.valueLong).subscribe(respose=>{
        this.periodDTO.init = respose.init;
        this.periodDTO.ends = respose.ends;
        this.periodDTO.type = respose.flag;
      });

    }
  }
  createPeriod(){
    this.periodDTO.init = this.init;
    this.periodDTO.ends = this.ends;
    this.periodDTO.type = this.flag;
    Swal.fire({
      title: 'Deseas guardar los datos del periodo',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Guardado!', '', 'success')
        console.log(this.periodDTO);
        this.createOrUpdatePeriodService.getPeriodService(this.periodDTO).subscribe(response=>{
          console.log(response);
        });
        this.router.navigate(['/periodo']);
      } else if (result.isDenied) {
        Swal.fire('Los cambios no serán guardados', '', 'info')
      }
    })
    
    

  }

}
