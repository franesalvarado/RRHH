export class Empleado{
    position: number;
    name: string;
    legajo: number;
    tipoContrato: string;
    cantFaltasMensual: number;
    cantFaltasTotal: number;
    cantRestVacaciones: number;
}

export class EmpleadoFaltas{
    legajo: number;
    tipoFalta: TipoFalta[];
    tipoLicencia: TipoLicencia[];
    tipoPresente: TipoPresente[];
}
            export class TipoFalta{
            tipoFalta: string;
            fecha: string;
            }
            export class TipoPresente{
                tipoPresente: string;
                fecha: string;
            }
            export class TipoLicencia{
                tipoLicencia: string;
                fecha: string;
            }

