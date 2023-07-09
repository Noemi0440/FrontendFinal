import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FindByCPService } from 'src/app/services/catalog/find-by-cp.service';
import { ValueLong } from 'src/app/dto/value-long';
import { AdressDTO } from 'src/app/dto/adress-dto';
import { RolesService } from 'src/app/services/catalog/roles.service';
import { PersonalDataDTO } from 'src/app/dto/personal-data-dto';
import { InsertUserService } from 'src/app/services/main/insert-user.service';


@Component({
  selector: 'app-extra-info-student',
  templateUrl: './extra-info-student.component.html',
})
export class ExtraInfoStudentComponent implements OnInit{

  name: String;
  lastName: String;
  motherLastName: String;
  phone: String;
  phoneHome: String;
  estado: string;
  municipio: String;
  colonia: String;
  cp: number;
  id: number;
  direcciones: AdressDTO[]=[];
  ids:number[];
  roleId:number;
  personalDataDTO:PersonalDataDTO;
  flag: boolean = true;

  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    motherLastName: ['',Validators.required],
    phone: [''],
    phoneHome: ['']

  });
  secondFormGroup = this._formBuilder.group({
    cp: ['', Validators.required],
    estado:[{ value: '', disabled: true }],
    municipio:[{ value: '', disabled: true }],
    colonia:[]
  });

  thirdFormGroup = this._formBuilder.group({

  });
  isLinear = true;
  
  

  constructor(private _formBuilder: FormBuilder, private findByCPService: FindByCPService, private rolesService: RolesService, private insertUserService:InsertUserService) {
    

   }
  ngOnInit(): void {
    this.id=history.state.id; 
    this.flag=history.state.flag; 
      this.municipio = '';
      this.estado = '';

      this.rolesService.getRoles().subscribe((response) => {
        response.forEach((element) => {
          if (element.value == 4) {
            this.roleId = element.value;
          }
        });
      });
      // this.ids = new Array();

  }

  nameChange(name:String){
    this.name = name.toUpperCase();
  }
  lastNameChange(lastName:String){
    this.lastName = lastName.toUpperCase();
  }

  motherLastNameChange(motherLastName:String){
    this.motherLastName = motherLastName.toUpperCase();
  }

  phoneHomeChange(phoneHome:String){
    this.phoneHome = phoneHome;
  }

  phoneChange(phone:String){
    this.phone = phone;
  }

  cpChange(newValue:number) {
      
      this.cp = newValue;
      this.municipio = '';
      this.estado = '';
      this.findByCPService.getInfoByCP(this.cp).subscribe((response:AdressDTO[]) => {
        this.direcciones = response;
        
        response.forEach((element) => {
          this.id = element.id;
          this.municipio=element.municipio;
          this.estado=element.estado;
        });
      });
  }


  

  clickPrimerStep() {
    this.personalDataDTO = new PersonalDataDTO();
    if(this.flag){
      this.personalDataDTO.id = 0;
      this.flag = false;
    }
    
    this.personalDataDTO.name = this.name;
    this.personalDataDTO.lastName = this.lastName;
    this.personalDataDTO.mothersLastName = this.motherLastName;
    this.personalDataDTO.cellphone = this.phone;
    this.personalDataDTO.phone = this.phoneHome;
    this.personalDataDTO.roleId = this.roleId;
    this.insertUserService.getPersonaData(this.personalDataDTO).subscribe((response)=>{
      console.log(response);
      this.personalDataDTO.id = response.id;
    });

    
  }

}
