import { Component, OnInit } from '@angular/core';
import { PersonalDataDTO } from 'src/app/dto/personal-data-dto';
import { RolesService } from 'src/app/services/catalog/roles.service';
import * as intlTelInput from 'intl-tel-input';
import { ListPersonalDataService } from 'src/app/services/catalog/list-personal-data.service';
import { ValueLong } from 'src/app/dto/value-long';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
})
export class EstudianteComponent implements OnInit{
  private title: string;
  name: string;
  minDate: String;
  roleId: number;
  private personalDataDTO: PersonalDataDTO;
  curp:String;
  birthday: String;
  currentDateSelect: Date;
  motherLastName: String;
  lastName: String;
  phone: string;
  email: String;
  phoneHome: String;
  valueLong:ValueLong;


  constructor(private rolesService: RolesService, private listPersonalDataService : ListPersonalDataService) {
  }


  createUser(){

    var bi = this.birthday.split('-');

    var date = new Date(parseInt(bi[0]),parseInt(bi[1]),parseInt(bi[2]));

    this.personalDataDTO.birthday = date;

    this.personalDataDTO.name = this.name;

    this.personalDataDTO.lastName = this.lastName;

    this.personalDataDTO.mothersLastName = this.motherLastName;

    this.personalDataDTO.cellphone = this.phone;

    this.personalDataDTO.phone = this.phoneHome;

    this.personalDataDTO.curp = this.curp;

    this.personalDataDTO.roleId = this.roleId;

    console.log(this.personalDataDTO);
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        console.log('si voy a guardar el usuario');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  ngOnInit(): void {
    this.personalDataDTO = new PersonalDataDTO();
    if(history.state.flag==true){
      this.personalDataDTO.id = 0;

    }else{
      this.personalDataDTO.id = history.state.id;
      this.valueLong = new ValueLong();
      this.valueLong.value = history.state.id;


      this.listPersonalDataService.getPersonalData(this.valueLong).subscribe((response) => {
        this.name = response.name;
        this.birthday = response.birthday;
        this.lastName = response.lastName;
        this.motherLastName = response.mothersLastName;
        this.phone = response.cellphone;
        this.phoneHome = response.phone;
        this.email = response.email;
        this.curp = response.curp;
      });
    }

    this.rolesService.getRoles().subscribe((response) => {
      response.forEach((element) => {
        if (element.value == 2) {
          this.roleId = element.value;
        }
      });
    });

    this.setTitle('Bienvenido porfavor ingresa los datos del alumno');
    const inputElement = document.getElementById('phone');
    const inputElement2 = document.getElementById('phoneHome');
    if(inputElement){
      intlTelInput(inputElement,{
        initialCountry: 'mx',
        separateDialCode: true,
        //utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js'
      });
    }
    if(inputElement2){
      intlTelInput(inputElement2,{
        initialCountry: 'mx',
        separateDialCode: true,
        //utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js'
      });
    }
    var date = new Date();
    this.minDate = date.toISOString().substring(0, 10);
    this.birthday = this.minDate;

  }

  public getTitle() {
    return this.title;
  }

  public setTitle(title: string) {
    this.title = title;
  }
}
