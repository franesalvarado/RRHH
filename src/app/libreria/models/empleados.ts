export class Empleado{
    position: number;
    name: string;
    legajo: number;
    tipoContrato: string;
    confirmado: boolean;
    cantFaltasMensual: number;
    cantFaltasTotal: number;
    cantRestVacaciones: number;
}

export class EmpleadoFaltas{
    legajo: number;
    tipoFalta: TipoFalta[];
}

    export class TipoFalta{
        tipoFalta: string;
        fecha: Date;
    }
    

    
export class EmpleadoFaltasNoMock{
        legajo: number;
        tipoFaltaNoMock: TipoFalta[];
    }

    export class tipoFaltaNoMock{
        tipoFalta: string;
        fecha: Date;
    }