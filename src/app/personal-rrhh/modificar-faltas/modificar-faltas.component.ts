import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { Empleado } from '../../libreria/models/empleados';
import { DataSource } from '@angular/cdk/collections';
import { EmpleadoService } from '../../libreria/servicios/empleado.service';
import { DialogModificarFaltasComponent } from './dialog-modificar-faltas/dialog-modificar-faltas.component';

@Component({
  selector: 'app-modificar-faltas',
  templateUrl: './modificar-faltas.component.html',
  styleUrls: ['./modificar-faltas.component.css']
})
export class ModificarFaltasComponent implements OnInit {
  dialogResult;
  displayedColumns = ['position', 'name', 'legajo', 'tipoContrato'];
  dataSource;
  empleados;

  constructor(
    public dialog: MatDialog,
    private _empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.empleados = this._empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource(this.empleados);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  // Cuando cliqueas una fila...
  selectRow(value) {
    this.openDialog(value);
  }

  openDialog(value) {
    const dialogRef = this.dialog.open(DialogModificarFaltasComponent, {
      width: '800px',
      data: value
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ` + result);
      this.dialogResult = result;
    });
  }


}
