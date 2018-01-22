// Imports de Angular puro
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


// Imports de Material
import { MaterialModule } from './commons/material.module';
import { NgPrimeModule } from './commons/ngprime.module';

// Imports de rutas
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListadoPersonalComponent } from './listado-personal/listado-personal.component';
import { ListadoMaterialComponent } from './listado-material/listado-material.component';



const routes: Routes = [
  // Home
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // Se cargan las rutas
  { path: 'listado-personal', component: ListadoPersonalComponent },
  { path: 'listado-material', component: ListadoMaterialComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListadoPersonalComponent,
    ListadoMaterialComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    MaterialModule,
    NgPrimeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
