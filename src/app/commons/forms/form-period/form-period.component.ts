import { Component, OnInit } from '@angular/core';
import { PeriodDTO } from 'src/app/dto/period-dto';
import { ValueLong } from 'src/app/dto/value-long';
import { CreateOrUpdatePeriodService } from 'src/app/services/main/create-or-update-period.service';

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
  constructor(private createOrUpdatePeriodService:CreateOrUpdatePeriodService){

  }
  ngOnInit(): void {
    this.title = 'Alta formulario';
    var date = new Date();
    this.minDate = date.toISOString().substring(0, 10);
  }
  createPeriod(){
    this.periodDTO= new PeriodDTO();
    if(history.state.flag==true){
      this.periodDTO.id = 0;
    }else{
      this.periodDTO.id = history.state.id;
      this.valueLong = new ValueLong();
      this.valueLong.value = history.state.id;
    }
    this.createOrUpdatePeriodService.getPeriodService(this.periodDTO).subscribe();

  }

}
