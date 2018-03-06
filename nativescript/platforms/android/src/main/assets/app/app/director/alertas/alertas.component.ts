import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../libreria/servicios/empleado.service';
import { Empleado } from '../../libreria/models/empleados';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material';
import { DialogAlertasComponent } from './dialog-alertas/dialog-alertas.component';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css'],
  providers: [ EmpleadoService ]
})
export class AlertasComponent implements OnInit {
  displayedColumns = ['position', 'name', 'legajo', 'tipoContrato'];
  dataSource;
  direccion = 'Direccion de Gestion Informatizada';
  ELEMENT_DATA_SELECT = [];
  empleados;
  dialogResult;

  constructor(
    public dialog: MatDialog,
    private _empleadoService: EmpleadoService
  ) { }

  ngOnInit() {
    this.empleados = this._empleadoService.getEmpleados();
    console.log(this.empleados);
    for (let i in this.empleados){
      if (this.empleados[i].cantFaltasMensual > 2){
        this.ELEMENT_DATA_SELECT.push(this.empleados[i]);
      }
    }
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA_SELECT);
  }

    // Cuando cliqueas una fila...
    selectRow(value) {
      this.openDialog(value);
      console.log(value);
    }
  
    openDialog(value) {
      const dialogRef = this.dialog.open(DialogAlertasComponent, {
        width: '600px',
        data: value
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ` + result);
        this.dialogResult = result;
      });
    }
}
