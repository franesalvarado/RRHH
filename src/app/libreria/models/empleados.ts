export class Empleado{
    position: number;
    name: string;
    legajo: number;
    tipoContrato: string;
    confirmado: boolean;
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