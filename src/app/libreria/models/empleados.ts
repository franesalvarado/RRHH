// TABLA DE EMPLEADO
export class Empleado{
    nombre: string;
    apellido: string;
    legajo: number;
    tipoPlanta: string; //TipoPlanta
    tipoCategoria: string; // Nombre de la categoria
    numCategoria: number; // Numero de categoria
    //Faltas (Se vincula con otra tabla)
} 

// TABLA DE FALTAS
export class EmpleadoFaltas{
    legajo: number; // Legajo por agente
    presente: Presente[];
    ausente: Ausente[];
    licenciaMedica: LicenciaMedica[];
    licenciaART: LicenciaART[];
    licenciaAnual: LicenciaAnual[];
}
        export class Presente{
            falta: string;
            fecha: Date;
        }
        export class Ausente{
            falta: string;
            fecha: Date;
            detalles: string;
        }
        export class LicenciaMedica{
            falta: string;
            tipoLicencia: string;
            diagnostico: string;
            fecha: Date[];
            detalles: string;
        }
        export class LicenciaART{
            falta: string;
            nroSiniestro: number;
            fechaControl: Date;
            fecha: Date[];
            detalles: string;
        }
        export class LicenciaAnual{
            falta: string;
            fecha: Date[];
            detalles: string;
        }