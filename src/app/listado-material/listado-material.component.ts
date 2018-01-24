import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Empleado, DataDialog } from '../models/empleados';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';

import { DialogTableComponent } from '../dialog-table-faltas/dialog-table.component';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-listado-material',
  templateUrl: './listado-material.component.html',
  styleUrls: ['./listado-material.component.css']
})
export class ListadoMaterialComponent implements OnInit {
  public parametro = null;
  dialogResult: DataDialog;
  displayedColumns = ['position', 'name', 'legajo', 'tipoContrato'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  direccion = 'Direccion de Gestion Informatizada';
  ELEMENT_DATA_SELECT = [];

  constructor(
    public dialog: MatDialog,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
        this.parametro = params['page'];
        // console.log(this.parametro);
        if (this.parametro != null) {
          this.ELEMENT_DATA_SELECT = [];
          for (let i in ELEMENT_DATA) {
            if (ELEMENT_DATA[i].tipoContrato == this.parametro) {
              // console.log(ELEMENT_DATA[i]);
              this.ELEMENT_DATA_SELECT.push(ELEMENT_DATA[i]);
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








/////////////////////////////////////////////////////////


export interface Element {
  name: string;
  position: number;
  legajo: number;
  tipoContrato: string;
  cantFaltasMensual: number;
  cantFaltasTotal: number;
  cantRestVacaciones: number;
}


const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Pablo', legajo: 51628, tipoContrato: 'Coordinado',
  cantFaltasMensual: 2, cantFaltasTotal: 8, cantRestVacaciones: 5},
  {position: 2, name: 'Luis', legajo: 51629, tipoContrato: 'Coordinado',
  cantFaltasMensual: 2, cantFaltasTotal: 8, cantRestVacaciones: 5},
  {position: 3, name: 'Oscar', legajo: 51635, tipoContrato: 'Coordinado',
  cantFaltasMensual: 2, cantFaltasTotal: 8, cantRestVacaciones: 5},
  {position: 4, name: 'Francisco', legajo: 81621, tipoContrato: 'Becado',
  cantFaltasMensual: 2, cantFaltasTotal: 8, cantRestVacaciones: 5},
  {position: 5, name: 'Juan', legajo: 50215, tipoContrato: 'Coordinado',
  cantFaltasMensual: 2, cantFaltasTotal: 8, cantRestVacaciones: 5},
  {position: 6, name: 'Estela', legajo: 50012, tipoContrato: 'Planta Permanente',
  cantFaltasMensual: 2, cantFaltasTotal: 8, cantRestVacaciones: 5},
  {position: 7, name: 'Braian', legajo: 80014, tipoContrato: 'Becado',
  cantFaltasMensual: 2, cantFaltasTotal: 8, cantRestVacaciones: 5},
  {position: 8, name: 'Alejandro', legajo: 52613, tipoContrato: 'Coordinado',
  cantFaltasMensual: 2, cantFaltasTotal: 8, cantRestVacaciones: 5},
  {position: 9, name: 'Damian', legajo: 54125, tipoContrato: 'Becado',
  cantFaltasMensual: 2, cantFaltasTotal: 8, cantRestVacaciones: 5},
  {position: 10, name: 'Gisela', legajo: 59125, tipoContrato: 'Planta Permanente',
  cantFaltasMensual: 2, cantFaltasTotal: 8, cantRestVacaciones: 5},
  {position: 11, name: 'Daniela', legajo: 84268, tipoContrato: 'Planta Permanente',
  cantFaltasMensual: 2, cantFaltasTotal: 8, cantRestVacaciones: 5},
  {position: 12, name: 'Carolina', legajo: 62147, tipoContrato: 'Becado',
  cantFaltasMensual: 2, cantFaltasTotal: 8, cantRestVacaciones: 5}
];

/**
 * @title Table with filtering
 */
