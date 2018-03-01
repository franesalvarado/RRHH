import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './servicios/empleado.service';
import { SidenavService } from './servicios/sidebar.services';
import { accordionOption, buttonsOption } from './models/sidebar';

import { MatDialog } from '@angular/material';
import { DialogCambiarClaveComponent } from './dialogs-app.component/dialog-cambiar-clave/dialog-cambiar-clave.component';

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

  // Variable para inyectar el menu
  public tipoUsuario:string;
  public menuSidenavNombre:string;
  public accordionOpciones: accordionOption[];
  public buttonsOpciones: buttonsOption[];
  cantAlertas:number;
  dialogResult = '';
  constructor(
    public dialog: MatDialog,
    private _empleadoService: EmpleadoService,
    private _sidenavService: SidenavService
  ) { 
    this.estadoBoolean=false;
    this.cssEstado="busquedaVisible";
    this.tipoUsuario="Director";
  }

  ngOnInit(){
    this.empleados = this._empleadoService.getEmpleados();
    if (this.tipoUsuario == "Director"){
      this.menuSidenavNombre = this._sidenavService.getSidenavDirector().accordionNombre;
      this.accordionOpciones = this._sidenavService.getSidenavDirector().accordionOpciones;
      this.buttonsOpciones = this._sidenavService.getSidenavDirector().buttonsOpciones;
      this.direccion="Direccion de Gestion Informatizada";
    }else 
      if(this.tipoUsuario == "AdminGlobal"){
      this.menuSidenavNombre = this._sidenavService.getSidenavAdminGlobal().accordionNombre;
      this.accordionOpciones = this._sidenavService.getSidenavAdminGlobal().accordionOpciones;
      this.buttonsOpciones = this._sidenavService.getSidenavAdminGlobal().buttonsOpciones;
      this.direccion="Administracion General del Sistema";
    }else{
      if(this.tipoUsuario == "Admin"){
        this.menuSidenavNombre = this._sidenavService.getSidenavAdmin().accordionNombre;
        this.accordionOpciones = this._sidenavService.getSidenavAdmin().accordionOpciones;
        this.buttonsOpciones = this._sidenavService.getSidenavAdmin().buttonsOpciones;
        this.direccion="Administracion del Sistema";
    }
  }
    this.cantAlertas = 0;
    for (let i in this.empleados) {
      if (this.empleados[i].cantFaltasMensual > 2){
        this.cantAlertas = this.cantAlertas + 1;
      }
    }
  }

  onCambiarClave() {
    const dialogRef = this.dialog.open(DialogCambiarClaveComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ` + result);
      this.dialogResult = result;
    });
  }
  }

