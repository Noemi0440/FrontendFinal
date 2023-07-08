import { Component, OnInit } from '@angular/core';
import { PeriodDTO } from 'src/app/dto/period-dto';
import { FindPeriodsService } from 'src/app/services/catalog/find-periods.service';

@Component({
  selector: 'app-create-period',
  templateUrl: './create-period.component.html'
})
export class CreatePeriodComponent implements OnInit {
  title:string;
  periodsDTO:PeriodDTO[]=[];

  constructor(private findPeriodsService:FindPeriodsService) { }
  ngOnInit(): void {
    this.title = 'Periodos'
    this.findPeriodsService.getPeriods().subscribe(respose=>{
      this.periodsDTO=respose;
    });
  }

}
