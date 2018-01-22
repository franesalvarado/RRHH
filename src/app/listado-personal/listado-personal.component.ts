import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Empleado, EmpleadosArray } from '../models/empleados';
import { EmpleadoService } from '../servicios/empleado.service';

@Component({
  selector: 'app-listado-personal',
  templateUrl: './listado-personal.component.html',
  styleUrls: ['./listado-personal.component.css'],

})
export class ListadoPersonalComponent implements OnInit {

  loading: boolean;
  empleado: Empleado[];
  columna: any[];
  value;

  constructor(
    private _empleadoService: EmpleadoService
  ) {}

  ngOnInit() {
    this.empleado = this._empleadoService.getEmpleados().data;
    console.log(this.empleado);
    // Tabla
    this.columna = [
        {field: 'nombre', header: 'Nombre'},
        {field: 'legajo', header: 'Legajo'},
        {field: 'tipoContrato', header: 'Categoria'}
    ];
  }

}
