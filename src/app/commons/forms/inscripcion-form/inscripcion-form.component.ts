import { Component, OnInit } from '@angular/core';
import { ValueLabel } from 'src/app/dto/value-label';
import { EstatusService } from 'src/app/services/catalog/estatus.service';
import { LicenciaturaService } from 'src/app/services/catalog/licenciatura.service';
import { SemesterService } from 'src/app/services/catalog/semester.service';
import { MateriasService } from 'src/app/services/catalog/materias.service';

@Component({
  selector: 'app-inscripcion-form',
  templateUrl: './inscripcion-form.component.html'
})

export class InscripcionFormComponent implements OnInit {

  semestres: ValueLabel[];
  licenciaturas: ValueLabel[];
  estatus: ValueLabel[];
  materias: ValueLabel[];

  constructor(private semesterService: SemesterService, private licenciaturaService: LicenciaturaService, private estatusService: EstatusService, private materiasService: MateriasService) {

  }
  ngOnInit(): void {
    this.semesterService.getPeriods().subscribe(response => {
      this.semestres = response;
    });
    this.licenciaturaService.getLicenciaturas().subscribe(response => {
      this.licenciaturas = response;
    });
    this.estatusService.getEstatus().subscribe(response => {
      this.estatus = response;
    });
    this.materiasService.getMaterias().subscribe(response => {
      this.materias = response;
    });
  }

  createInscription(){
    
  }
}
