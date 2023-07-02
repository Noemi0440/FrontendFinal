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

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'headerControl', component: HeaderControlComponent},
  { path: 'busquedaUser', component: BusquedaTipoUserComponent},
  { path: 'estudiante', component:EstudianteComponent},
  { path: 'profesor', component:ProfesorComponent},
  { path: 'padres', component: PadresComponent},
  { path: 'respaldoBD', component: BackupDBComponent}

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    CategoriesService,
    BackupDBService,
    RolesService,
    ListTeacherBySearchService,
    ListStudentBySearchService,
    ListPersonalDataService,
    InsertUserService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
