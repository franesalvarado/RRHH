import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Empleado } from '../models/empleados';

// MockService Implementation
@Injectable()
export class EmpleadoService{

    getEmpleados() {
        return ({
            "data":[
                {"nombre":"Pablo Schmitd","legajo":51082,"tipoContrato":"Coordinado"},
                 {"nombre":"Francisco Alvarado","legajo":81623,"tipoContrato":"Beca"},
                {"nombre":"Juan Funes","legajo":51083,"tipoContrato":"Coordinado"},
               {"nombre":"Damian Gambarruta","legajo":51085,"tipoContrato":"Planta Permanente"}
            ]
        });
    }
}
