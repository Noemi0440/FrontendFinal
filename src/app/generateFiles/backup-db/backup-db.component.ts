import { Component } from '@angular/core';
import { BackupDBService } from 'src/app/services/recovery/backup-db.service';
import { ValueBoolean } from 'src/app/dto/value-boolean';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-backup-db',
  templateUrl: './backup-db.component.html'
})
export class BackupDBComponent {

  valueBoolean! : ValueBoolean;

  mensaje! :string;

  constructor(private backupDBService: BackupDBService) {
  }

  ngOnInit() {
    this.backupDBService.getBackupDB().subscribe((valueBoolean)=>{
      if(valueBoolean.response){
        this.mensaje = 'La informacion se cargo correctamente';
      }else{
        this.mensaje = 'Error';
      }
    });
  }

  clickItem(){
    Swal.fire({
      title: 'Estás seguro',
      text: "No podrás revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si generar esto'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          this.mensaje,
          'El respaldo se generado correctamente',
          'success'
        )
      }
    })
  }

}
