import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './commons/footer/footer.component';
import { HeaderComponent } from './commons/header/header.component';
import { SectionComponent } from './commons/section/section.component';
import { CategoriesService } from './services/catalog/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BackupDBComponent } from './generateFiles/backup-db/backup-db.component';
import { BackupDBService } from './services/recovery/backup-db.service';
import { EstudianteComponent } from './commons/forms/create-user/estudiante/estudiante.component';
import { PadresComponent } from './commons/forms/create-user/padres/padres.component';
import { ProfesorComponent } from './commons/forms/create-user/profesor/profesor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusquedaTipoUserComponent } from './commons/forms/create-user/busqueda-tipo-user/busqueda-tipo-user.component';
import { RolesService } from './services/catalog/roles.service';
import { SearchData } from './commons/forms/create-user/busqueda-tipo-user/search-data/search-data.component';
import { ListTeacherBySearchService } from './services/catalog/list-teacher-by-search.service';
import { LoginComponent } from './commons/forms/login/login.component';
import { HomeComponent } from './commons/home/home.component';
import { HeaderControlComponent } from './commons/control/header-control/header-control.component';
import { ListStudentBySearchService } from './services/catalog/list-student-by-search.service';
import { ListPersonalDataService } from './services/catalog/list-personal-data.service';
import { InsertUserService } from './services/main/insert-user.service';
import { ExtraInfoStudentComponent } from './commons/forms/create-user/extra-info-student/extra-info-student.component';
import { FindByCPService } from './services/catalog/find-by-cp.service';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { AddressComponent } from './commons/forms/create-user/address/address.component';
import { FindAddresByIdService } from './services/catalog/find-addres-by-id.service';
import { CreatePeriodComponent } from './commons/forms/create-period/create-period.component';
import { FormPeriodComponent } from './commons/forms/form-period/form-period.component';
import { FindPeriodsService } from './services/catalog/find-periods.service';
import { CreateOrUpdatePeriodService } from './services/main/create-or-update-period.service';


const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'headerControl', component: HeaderControlComponent},
  { path: 'busquedaUser', component: BusquedaTipoUserComponent},
  { path: 'estudiante', component:EstudianteComponent},
  { path: 'profesor', component:ProfesorComponent},
  { path: 'padres', component: PadresComponent},
  { path: 'respaldoBD', component: BackupDBComponent},
  { path: 'extraInfoEsdutiante', component: ExtraInfoStudentComponent},
  { path: 'direccion', component: AddressComponent},
  { path: 'periodo', component: CreatePeriodComponent},
  { path: 'periodoForm', component: FormPeriodComponent}



];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SectionComponent,
    BackupDBComponent,
    EstudianteComponent,
    PadresComponent,
    ProfesorComponent,
    BusquedaTipoUserComponent,
    SearchData,
    LoginComponent,
    HomeComponent,
    HeaderControlComponent,
    ExtraInfoStudentComponent,
    AddressComponent,
    CreatePeriodComponent,
    FormPeriodComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
    MatStepperModule,
    MatInputModule
  ],
  providers: [
    CategoriesService,
    BackupDBService,
    RolesService,
    ListTeacherBySearchService,
    ListStudentBySearchService,
    ListPersonalDataService,
    InsertUserService,
    FindByCPService,
    FindAddresByIdService,
    FindPeriodsService,
    CreateOrUpdatePeriodService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
