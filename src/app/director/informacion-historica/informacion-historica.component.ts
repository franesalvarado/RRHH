import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { Empleado } from '../../libreria/models/empleados';
import { DataSource } from '@angular/cdk/collections';
import { DialogHistoricoComponent } from './dialog-historico/dialog-historico.component';
import { EmpleadoService } from '../../libreria/servicios/empleado.service';

@Component({
  selector: 'app-informacion-historica',
  templateUrl: './informacion-historica.component.html',
  styleUrls: ['./informacion-historica.component.css'],
  providers: [ EmpleadoService ]
})

export class InformacionHistoricaComponent implements OnInit {
  dialogResult;
  // Nombre de las columnas de la tabla
  displayedColumns = ['position', 'nombre', 'legajo', 'tipoPlanta'];
  dataSource;
  empleados;

  constructor(
    public dialog: MatDialog,
    private _empleadoService: EmpleadoService
  ) { }

  ngOnInit() {
    // Se trae todos los agente de la direccion
    this.empleados = this._empleadoService.getEmpleados();
    // Se cargan todos los agentes en la tabla
    this.dataSource = new MatTableDataSource(this.empleados);
  }

  // Filtro de busqueda entre todos los agente de la tabla. Se puede buscar por cualquier valor de la tabla
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  // Click sobre una fila de la tabla
  selectRow(value) {
    this.openDialog(value);
    // console.log(value);
  }
  // Abre dialogo, le pasa los datos de la fila seleccionada.
  openDialog(value) {
    const dialogRef = this.dialog.open(DialogHistoricoComponent, {
      width: '800px',
      data: value
    });
    // Una vez cerrado el dialogo, muestra el resultado del dialogo y lo guarda en dialogResult
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ` + result);
      this.dialogResult = result;
    });
  }
}