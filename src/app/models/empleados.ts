export interface Empleado{
    nombre: string; legajo: number; tipoContrato: any
}
export interface EmpleadosArray extends Array<Empleado>{}
