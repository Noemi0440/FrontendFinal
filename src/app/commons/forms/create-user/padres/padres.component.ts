import { Component, OnInit } from '@angular/core';
import { PersonalDataDTO } from 'src/app/dto/personal-data-dto';
import { RolesService } from 'src/app/services/catalog/roles.service';
import * as intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-padres',
  templateUrl: './padres.component.html'
})
export class PadresComponent implements OnInit{

  private title!: string;
  name: string;
  minDate!: String;
  private roleId: number;
  private personalDataDTO: PersonalDataDTO;
  curp:String;
  birthday: String;
  currentDateSelect!: Date;
  motherLastName!: String;

  lastName!: String;

  phone!: String;

  email!: String;

  phoneHome!: String;

  constructor(private rolesService: RolesService) {
  }


  createUser(curp:HTMLInputElement){
    console.log(this.name);
    this.personalDataDTO = new PersonalDataDTO();
    this.personalDataDTO.id = 0;
    this.personalDataDTO.roleId = this.roleId;
    this.personalDataDTO.curp = curp.value;

    var bi = this.birthday.split('-');

    var date = new Date(parseInt(bi[0]),parseInt(bi[1]),parseInt(bi[2]));

    this.personalDataDTO.birthday = date;

    console.log(this.personalDataDTO);
  }

  ngOnInit(): void {
    this.setTitle('Bienvenido porfavor ingresa los datos del padre o tutor');
    const inputElement = document.getElementById('phone');
    const inputElement2 = document.getElementById('phoneHome');
    if(inputElement){
      intlTelInput(inputElement,{
        initialCountry: 'mx',
        separateDialCode: true,
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js'
      });
    }
    if(inputElement2){
      intlTelInput(inputElement2,{
        initialCountry: 'mx',
        separateDialCode: true,
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js'
      });
    }
    var date = new Date();
    this.minDate = date.toISOString().substring(0, 10);
    this.birthday = this.minDate;
    this.rolesService.getRoles().subscribe((response) => {
      response.forEach((element) => {
        if (element.value == 2) {
          this.roleId = element.value;
        }
      });
    });
  }

  public getTitle() {
    return this.title;
  }

  public setTitle(title: string) {
    this.title = title;
  }
}
