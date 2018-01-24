import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public estadoBoolean:boolean;
  public cssEstado:string;
  public direccion:string;
  ELEMENT_DATA_SELECT = [];
  cantAlertas:number;
  dialogResult = '';
  constructor() { 
    this.estadoBoolean=false;
    this.cssEstado="busquedaVisible";
    this.direccion="Direccion de Gestion Informatizada"
  }

  ngOnInit(){
    this.cantAlertas = 0;
    for (let i in ELEMENT_DATA) {
      this.ELEMENT_DATA_SELECT.push(ELEMENT_DATA[i]);
      if (ELEMENT_DATA[i].cantFaltasMensual > 2){
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





/////////////////////////////////////////////////////////


export interface Element {
  name: string;
  position: number;
  legajo: number;
  tipoContrato: string;
  cantFaltasMensual: number;
  cantFaltasTotal: number;
  cantRestVacaciones: number;
  color: string;
}


const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Pablo', legajo: 51628, tipoContrato: 'Coordinado',
  cantFaltasMensual: 0, cantFaltasTotal: 8, cantRestVacaciones: 5, color:null},
  {position: 2, name: 'Luis', legajo: 51629, tipoContrato: 'Coordinado',
  cantFaltasMensual: 1, cantFaltasTotal: 8, cantRestVacaciones: 5, color:null},
  {position: 3, name: 'Oscar', legajo: 51635, tipoContrato: 'Coordinado',
  cantFaltasMensual: 2, cantFaltasTotal: 8, cantRestVacaciones: 5, color:null},
  {position: 4, name: 'Francisco', legajo: 81621, tipoContrato: 'Becado',
  cantFaltasMensual: 1, cantFaltasTotal: 8, cantRestVacaciones: 5, color:null},
  {position: 5, name: 'Juan', legajo: 50215, tipoContrato: 'Coordinado',
  cantFaltasMensual: 6, cantFaltasTotal: 8, cantRestVacaciones: 5, color:null},
  {position: 6, name: 'Estela', legajo: 50012, tipoContrato: 'Planta Permanente',
  cantFaltasMensual: 8, cantFaltasTotal: 8, cantRestVacaciones: 5, color:null},
  {position: 7, name: 'Braian', legajo: 80014, tipoContrato: 'Becado',
  cantFaltasMensual: 3, cantFaltasTotal: 8, cantRestVacaciones: 5, color:null},
  {position: 8, name: 'Alejandro', legajo: 52613, tipoContrato: 'Coordinado',
  cantFaltasMensual: 1, cantFaltasTotal: 8, cantRestVacaciones: 5, color:null},
  {position: 9, name: 'Damian', legajo: 54125, tipoContrato: 'Becado',
  cantFaltasMensual: 5, cantFaltasTotal: 8, cantRestVacaciones: 5, color:null},
  {position: 10, name: 'Gisela', legajo: 59125, tipoContrato: 'Planta Permanente',
  cantFaltasMensual: 2, cantFaltasTotal: 8, cantRestVacaciones: 5, color:null},
  {position: 11, name: 'Daniela', legajo: 84268, tipoContrato: 'Planta Permanente',
  cantFaltasMensual: 4, cantFaltasTotal: 8, cantRestVacaciones: 5, color:null},
  {position: 12, name: 'Carolina', legajo: 62147, tipoContrato: 'Becado',
  cantFaltasMensual: 0, cantFaltasTotal: 8, cantRestVacaciones: 5, color:null}
];
