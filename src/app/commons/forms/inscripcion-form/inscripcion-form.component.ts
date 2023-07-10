import { Component, OnInit } from '@angular/core';
import { ValueLabel } from 'src/app/dto/value-label';
import { EstatusService } from 'src/app/services/catalog/estatus.service';
import { LicenciaturaService } from 'src/app/services/catalog/licenciatura.service';
import { SemesterService } from 'src/app/services/catalog/semester.service';
import { MateriasService } from 'src/app/services/catalog/materias.service';
import { InsertInscriService } from 'src/app/services/main/insert-inscri.service';
import { InscripcionDTO } from 'src/app/dto/insert-dto';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscripcion-form',
  templateUrl: './inscripcion-form.component.html'
})

export class InscripcionFormComponent implements OnInit {

  id: number;
  semestres: ValueLabel[];
  licenciaturas: ValueLabel[];
  estatus: ValueLabel[];
  materias: ValueLabel[];
  selectedOption: number;

  selected: number;

  idSemes: number;
  idStatus: number;
  idLic: number;

  inscripcionDTO: InscripcionDTO;

  constructor(private semesterService: SemesterService, private licenciaturaService: LicenciaturaService, private estatusService: EstatusService, private materiasService: MateriasService, private insertInscriService: InsertInscriService, private router: Router) {

  }
  ngOnInit(): void {
    this.selected = 1;

    this.id = history.state.id;

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

  createInscription() {

    Swal.fire({
      title: 'Deseas guardar los datos de la inscripcion',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.inscripcionDTO = new InscripcionDTO();
        this.inscripcionDTO.id = 0;
        this.inscripcionDTO.student = this.id;
        this.inscripcionDTO.licenciatura = this.idLic;
        this.inscripcionDTO.semester = this.idSemes;
        this.inscripcionDTO.status = this.idStatus;
        this.inscripcionDTO.period = 1;
        this.insertInscriService.getPersonaDataStudent(this.inscripcionDTO).subscribe(response=>{
          console.log(response);
        });
        debugger;
        this.router.navigate(['/final']);

      } else if (result.isDenied) {
        Swal.fire('Los cambios no serán guardados', '', 'info')
      }
    })

  }



  onchane(dav: any) {
    this.idSemes = dav.target.value
  }

  onchane1(dav: any) {
    this.idStatus = dav.target.value
  }

  onchane2(dav: any) {
    this.idLic = dav.target.value
  }
}
