import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './servicios/empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ EmpleadoService ]
})
export class AppComponent implements OnInit{
  public estadoBoolean:boolean;
  public cssEstado:string;
  public direccion:string;
  public empleados;
  cantAlertas:number;
  dialogResult = '';
  constructor(
    private _empleadoService: EmpleadoService
  ) { 
    this.estadoBoolean=false;
    this.cssEstado="busquedaVisible";
    this.direccion="Direccion de Gestion Informatizada"
  }

  ngOnInit(){
    this.empleados = this._empleadoService.getEmpleados();
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
