import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { Empleado } from '../../libreria/models/empleados';
import { DataSource } from '@angular/cdk/collections';
import { EmpleadoService } from '../../libreria/servicios/empleado.service';
import { DialogCargarArtComponent } from './dialog-cargar-art/dialog-cargar-art.component';

@Component({
  selector: 'app-cargar-art',
  templateUrl: './cargar-art.component.html',
  styleUrls: ['./cargar-art.component.css']
})
export class CargarArtComponent implements OnInit {
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
        console.log(value);
      }
    
      openDialog(value) {
        const dialogRef = this.dialog.open(DialogCargarArtComponent, {
          width: '600px',
          data: value
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog closed: ` + result);
          this.dialogResult = result;
        });
      }

}
