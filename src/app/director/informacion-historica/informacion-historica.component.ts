import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { Empleado } from '../models/empleados';
import { DataSource } from '@angular/cdk/collections';
import { DialogHistoricoComponent } from './dialog-historico/dialog-historico.component';
import { EmpleadoService } from '../servicios/empleado.service';

@Component({
  selector: 'app-informacion-historica',
  templateUrl: './informacion-historica.component.html',
  styleUrls: ['./informacion-historica.component.css'],
  providers: [ EmpleadoService ]
})
export class InformacionHistoricaComponent implements OnInit {
  dialogResult;
  displayedColumns = ['position', 'name', 'legajo', 'tipoContrato'];
  dataSource;
  empleados;

  constructor(
    public dialog: MatDialog,
    private _empleadoService: EmpleadoService
  ) { }

  ngOnInit() {
    this.empleados = this._empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource(this.empleados);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  selectRow(value) {
    this.openDialog(value);
    console.log(value);
  }

  openDialog(value) {
    const dialogRef = this.dialog.open(DialogHistoricoComponent, {
      width: '600px',
      data: value
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ` + result);
      this.dialogResult = result;
    });
  }
}