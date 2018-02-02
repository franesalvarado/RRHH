// Imports de Angular puro
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Imports de Material
import { MaterialModule } from './commons/material.module';
import { NgPrimeModule } from './commons/ngprime.module';

// Imports de rutas
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListadoMaterialComponent } from './listado-material/listado-material.component';
import { DialogTableComponent } from './dialog-table-faltas/dialog-table.component';
import { InformacionHistoricaComponent } from './informacion-historica/informacion-historica.component';
import { DialogHistoricoComponent } from './dialog-historico/dialog-historico.component';
import { AlertasComponent } from './alertas/alertas.component';



const routes: Routes = [
  // Home
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // Se cargan las rutas
  { path: 'login', component: LoginComponent },
  { path: 'listado-material', component: ListadoMaterialComponent },
  { path: 'listado-material/:page', component: ListadoMaterialComponent },
  { path: 'informacion-historica', component: InformacionHistoricaComponent },
  { path: 'alertas', component: AlertasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListadoMaterialComponent,
    DialogTableComponent,
    InformacionHistoricaComponent,
    DialogHistoricoComponent,
    AlertasComponent,
    LoginComponent
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
    DialogHistoricoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
