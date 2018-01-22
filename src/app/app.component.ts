import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public estadoBoolean:boolean;
  public cssEstado:string;
  dialogResult = '';
  constructor() { 
    this.estadoBoolean=false;
    this.cssEstado="busquedaVisible";
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
