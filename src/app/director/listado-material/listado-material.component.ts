import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmpleadoService } from '../../libreria/servicios/empleado.service';
import { Empleado } from '../../libreria/models/empleados';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';

import { DialogTableComponent } from './dialog-table-faltas/dialog-table.component';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-listado-material',
  templateUrl: './listado-material.component.html',
  styleUrls: ['./listado-material.component.css'],
  providers: [ EmpleadoService ]
})
export class ListadoMaterialComponent implements OnInit {
  // Parametro para filtrar por tipoPlanta
  public parametro = null;
  // Columnas del table
  displayedColumns = ['position', 'name', 'legajo', 'tipoContrato', 'confirmado'];
  dataSource;
  // Se asigna el nombre de la direccion del personal
  direccion = 'Direccion de Gestion Informatizada';
  // Data seleccionada para la table
  ELEMENT_DATA_SELECT = [];
  // Recibe del servicio a los empleados
  empleados;
  // Muestra el resultado del dialogo
  dialogResult;

  constructor(
    public dialog: MatDialog,
    private _route: ActivatedRoute,
    private _router: Router,
    private _empleadoService: EmpleadoService
  ) { }

  ngOnInit() {
    // Recibe los empleados del servicio
    this.empleados = this._empleadoService.getEmpleados();
    // Filtra segun el parametro recibido (planta permanente, becado, coordinado)
    this._route.params.forEach((params: Params) => {
        this.parametro = params['page'];
        // si el parametro es null no va entrar al If y va a mostrar TODO
        if (this.parametro != null) {
          this.ELEMENT_DATA_SELECT = [];
          // En caso de entrar, filtra por el tipo de planta que es
          for (let i in this.empleados) {
            if (this.empleados[i].tipoPlanta == this.parametro) {
              // console.log(ELEMENT_DATA[i]);
              this.ELEMENT_DATA_SELECT.push(this.empleados[i]);
            }
          }
          // Se carga a la tabla.
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA_SELECT);
        }
    });
  }


  // Filtro de busqueda del table
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Quita los espacio en blanco
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // Cuando cliqueas una fila...
  selectRow(value) {
    // Abre un dialogo con los valores de la fila
    this.openDialog(value);
  }

  openDialog(value) {
    const dialogRef = this.dialog.open(DialogTableComponent, {
      width: '600px',
      data: value
    });
// Despues de cerrar el dialogo, muestra el resultado
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ` + result);
      this.dialogResult = result;
    });
  }

}