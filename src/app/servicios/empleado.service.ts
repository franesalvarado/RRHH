import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleados';
import { EMPLEADOS } from './mock-empleado/mock-empleado'

@Injectable()
export class EmpleadoService {
    getEmpleados(): Empleado[] {
        return EMPLEADOS;
    }
}