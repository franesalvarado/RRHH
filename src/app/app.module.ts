// Imports de Angular puro
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Imports de Material - Ng
import { MaterialModule } from './commons/material.module';
import { NgPrimeModule } from './commons/ngprime.module';

// Pipes

  // Import de Dialog
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
  import { DialogCambiarClaveComponent } from './dialogs-app.component/dialog-cambiar-clave/dialog-cambiar-clave.component';
import { LoginComponent } from './login/login.component';
import { ListadoMaterialComponent } from './listado-material/listado-material.component';
  import { DialogTableComponent } from './listado-material/dialog-table-faltas/dialog-table.component';
import { InformacionHistoricaComponent } from './informacion-historica/informacion-historica.component';
  import { DialogHistoricoComponent } from './informacion-historica/dialog-historico/dialog-historico.component';
import { AlertasComponent } from './alertas/alertas.component';
  import { DialogAlertasComponent } from './alertas/dialog-alertas/dialog-alertas.component';
import { ListAdministradoresComponent } from './list-administradores/list-administradores.component';
  import { DialogAdministradoresComponent } from './list-administradores/dialog-administradores/dialog-administradores.component';
import { ListDirectoresComponent } from './list-directores/list-directores.component';
  import { DialogListDirectoresComponent } from './list-directores/dialog-list-directores/dialog-list-directores.component';
import { ListPersonalRrhhComponent } from './list-personal-rrhh/list-personal-rrhh.component';
  import { DialogListPersonalRrhhComponent } from './list-personal-rrhh/dialog-list-personal-rrhh/dialog-list-personal-rrhh.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';



const routes: Routes = [
  // Home
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // Se cargan las rutas
  { path: 'login', component: LoginComponent },
  { path: 'listado-material', component: ListadoMaterialComponent },
  { path: 'listado-material/:page', component: ListadoMaterialComponent },
  { path: 'informacion-historica', component: InformacionHistoricaComponent },
  { path: 'alertas', component: AlertasComponent },
  { path: 'new-usuarios', component: AgregarUsuarioComponent },
  { path: 'administradores', component: ListAdministradoresComponent },
  { path: 'directores', component: ListDirectoresComponent },
  { path: 'personal-rrhh', component: ListPersonalRrhhComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListadoMaterialComponent,
    DialogTableComponent,
    InformacionHistoricaComponent,
    DialogHistoricoComponent,
    AlertasComponent,
    LoginComponent,
    ListAdministradoresComponent,
    ListDirectoresComponent,
    ListPersonalRrhhComponent,
    AgregarUsuarioComponent,
    DialogAdministradoresComponent,
    DialogAlertasComponent,
    DialogListDirectoresComponent,
    DialogListPersonalRrhhComponent,
    DialogCambiarClaveComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    MaterialModule,
    NgPrimeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
    DialogTableComponent,
    DialogHistoricoComponent,
    DialogAdministradoresComponent,
    DialogAlertasComponent,
    DialogListDirectoresComponent,
    DialogListPersonalRrhhComponent,
    DialogCambiarClaveComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
