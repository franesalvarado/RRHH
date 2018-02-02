import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './servicios/empleado.service';
import { SidenavService } from './servicios/sidebar.services';
import { accordionOption, buttonsOption } from './models/sidebar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ EmpleadoService, SidenavService ]
})
export class AppComponent implements OnInit{
  public estadoBoolean:boolean;
  public cssEstado:string;
  public direccion:string;
  public empleados;
  public menuSidenavNombre:string;
  public accordionOpciones: accordionOption[];
  public buttonsOpciones: buttonsOption[];
  cantAlertas:number;
  dialogResult = '';
  constructor(
    private _empleadoService: EmpleadoService,
    private _sidenavService: SidenavService
  ) { 
    this.estadoBoolean=false;
    this.cssEstado="busquedaVisible";
    this.direccion="Direccion de Gestion Informatizada"
  }

  ngOnInit(){
    this.empleados = this._empleadoService.getEmpleados();
    this.menuSidenavNombre = this._sidenavService.getSidenavDirector().accordionNombre;
    this.accordionOpciones = this._sidenavService.getSidenavDirector().accordionOpciones;
    this.buttonsOpciones = this._sidenavService.getSidenavDirector().buttonsOpciones;
    console.log(this.menuSidenavNombre);
    console.log(this.accordionOpciones);
    console.log(this.buttonsOpciones);
    this.cantAlertas = 0;
    for (let i in this.empleados) {
      if (this.empleados[i].cantFaltasMensual > 2){
        this.cantAlertas = this.cantAlertas + 1;
      }
    }
  }

  estadoBotonBusqueda(){
    if (this.estadoBoolean=true){
      this.cssEstado="busquedaVisible";
      this.estadoBoolean=false;
    }
    else{
      this.cssEstado="busquedaOculta";
      this.estadoBoolean=true;
    }
  }
}
