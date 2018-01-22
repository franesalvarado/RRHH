import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../servicios/empleado.service';
import { Empleado } from '../models/empleados';
import {MatTableDataSource} from '@angular/material';




@Component({
  selector: 'app-listado-material',
  templateUrl: './listado-material.component.html',
  styleUrls: ['./listado-material.component.css'],
  providers: [ EmpleadoService ]
})
export class ListadoMaterialComponent implements OnInit {
  displayedColumns = ['position', 'name', 'legajo', 'tipoContrato'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  empleado: Empleado[];
  direccion = 'Direccion de Gestion Informatizada';

  constructor(
    private _empleadoService: EmpleadoService
  ) { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  selectRow(value) {
    console.log(value);
  }
 

}








/////////////////////////////////////////////////////////


export interface Element {
  name: string;
  position: number;
  legajo: number;
  tipoContrato: string;
}


const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Pablo', legajo: 51628, tipoContrato: 'Coordinado'},
  {position: 2, name: 'Luis', legajo: 51629, tipoContrato: 'Coordinado'},
  {position: 3, name: 'Oscar', legajo: 51635, tipoContrato: 'Coordinado'},
  {position: 4, name: 'Francisco', legajo: 81621, tipoContrato: 'Becado'},
  {position: 5, name: 'Juan', legajo: 50215, tipoContrato: 'Coordinado'},
  {position: 6, name: 'Estela', legajo: 50012, tipoContrato: 'Planta Permanete'},
  {position: 7, name: 'Braian', legajo: 80014, tipoContrato: 'Becado'},
  {position: 8, name: 'Alejandro', legajo: 52613, tipoContrato: 'Coordinado'},
  {position: 9, name: 'Damian', legajo: 54125, tipoContrato: 'Becado'},
  {position: 10, name: 'Gisela', legajo: 59125, tipoContrato: 'Planta Permanente'},
  {position: 11, name: 'Daniela', legajo: 84268, tipoContrato: 'Planta Permanete'},
  {position: 12, name: 'Carolina', legajo: 62147, tipoContrato: 'Becado'}
];

/**
 * @title Table with filtering
 */
