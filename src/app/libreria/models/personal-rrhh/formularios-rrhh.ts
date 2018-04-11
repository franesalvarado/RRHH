export class FormART{
    nroSiniestro: number;
    fechaIngreso: Date;
    fechaEstimativa: Date;
    fechaControl: Date;
    detalles: string;
}

export class FormLicenciaAnual{
    fechaSalida: Date;
    fechaRegreso: Date;
    detalles: string;
}

export class FormLicenciaMedica{
    tipoLicencia: string;
    fechaIngreso: Date;
    fechaFinaliza: Date;
    diagnostico: string;
    detalles: string;
}

export class FormModificarFaltas{
    oldTipoFalta: string;
    newTipoFalta: string;
    fecha: Date;
    legajo: number;
}
