import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmpleadoService } from '../servicios/empleado.service';
import { Empleado } from '../models/empleados';
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
  public parametro = null;
  displayedColumns = ['position', 'name', 'legajo', 'tipoContrato', 'confirmado'];
  dataSource;
  direccion = 'Direccion de Gestion Informatizada';
  ELEMENT_DATA_SELECT = [];
  empleados;
  dialogResult;

  constructor(
    public dialog: MatDialog,
    private _route: ActivatedRoute,
    private _router: Router,
    private _empleadoService: EmpleadoService
  ) { }

  ngOnInit() {
    this.empleados = this._empleadoService.getEmpleados();
    console.log(this.empleados);
    this._route.params.forEach((params: Params) => {
        this.parametro = params['page'];
        // console.log(this.parametro);
        if (this.parametro != null) {
          this.ELEMENT_DATA_SELECT = [];
          for (let i in this.empleados) {
            if (this.empleados[i].tipoContrato == this.parametro) {
              // console.log(ELEMENT_DATA[i]);
              this.ELEMENT_DATA_SELECT.push(this.empleados[i]);
            }
          }
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA_SELECT);
        }else{
          for (let i in this.empleados){
            this.ELEMENT_DATA_SELECT.push(this.empleados[i]);
            if (this.empleados[i].cantFaltasMensual > 2){
              if (this.empleados[i].cantFaltasMensual > 4){
                this.ELEMENT_DATA_SELECT[i].color = "red";
              }
              else{
                this.ELEMENT_DATA_SELECT[i].color = "yellow";
              }
            }
          }
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA_SELECT);
        }
    });
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
    const dialogRef = this.dialog.open(DialogTableComponent, {
      width: '600px',
      data: value
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ` + result);
      this.dialogResult = result;
    });
  }

}