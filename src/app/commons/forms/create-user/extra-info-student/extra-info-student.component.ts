import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FindByCPService } from 'src/app/services/catalog/find-by-cp.service';
import { ValueLong } from 'src/app/dto/value-long';
import { ValueLabel } from 'src/app/dto/value-label';
import { AdressDTO } from 'src/app/dto/adress-dto';


@Component({
  selector: 'app-extra-info-student',
  templateUrl: './extra-info-student.component.html',
  styleUrls: ['./extra-info-student.component.css'],
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



  valueCP: ValueLong;

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
  isLinear = true;
  
  

  constructor(private _formBuilder: FormBuilder, private findByCPService: FindByCPService) {
    

   }
  ngOnInit(): void {
      this.municipio = '';
      this.estado = '';
      // this.ids = new Array();

  }

  nameChange(name:String){
    this.name = name;
  }
  lastNameChange(lastName:String){
    this.lastName = lastName;
  }

  motherLastNameChange(motherLastName:String){
    this.motherLastName = motherLastName;
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
    
  }

}
