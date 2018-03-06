import { Injectable } from '@angular/core';
import { Empleado, EmpleadoFaltas } from '../models/empleados';
import { EMPLEADOS, EMPLEADOSFALTAS } from './mock-empleado/mock-empleado'

@Injectable()
export class EmpleadoService {
    getEmpleados(): Empleado[] {
        return EMPLEADOS;
    }

    getEmpleadosFaltas(): EmpleadoFaltas[] {
        return EMPLEADOSFALTAS;
    }
}