export interface Empleado {
    nombre: string; legajo: number; tipoContrato: any;
}

export interface DataDialog {
    tipoFalta: string; value: boolean;
}

export interface EmpleadosArray extends Array<Empleado> {}
