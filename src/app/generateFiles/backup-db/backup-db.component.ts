import { Component } from '@angular/core';
import { BackupDBService } from 'src/app/services/recovery/backup-db.service';
import { ValueBoolean } from 'src/app/dto/value-boolean';


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
    alert(this.mensaje);
  }

}
