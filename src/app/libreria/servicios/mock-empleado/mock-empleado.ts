import { Empleado, EmpleadoFaltas, Presente, Ausente, LicenciaAnual, LicenciaART, LicenciaMedica } from '../../models/empleados';
export const EMPLEADOS: Empleado[] = [
  {nombre: 'Pablo', apellido: 'Schmitt', legajo: 51628, tipoPlanta: 'Coordinado', 
    tipoCategoria: 'Director', numCategoria: 21},
  {nombre: 'Luis', apellido: 'Perez', legajo: 51629, tipoPlanta: 'Coordinado', 
    tipoCategoria: 'Jefe de departamento', numCategoria: 17},
  {nombre: 'Oscar', apellido: 'Fernandez', legajo: 51635, tipoPlanta: 'Coordinado', 
    tipoCategoria: 'Jefe de departamento', numCategoria: 17},
  {nombre: 'Francisco', apellido: 'Alvarado', legajo: 81621, tipoPlanta: 'Becado', 
    tipoCategoria: 'Beca', numCategoria: 999999},
  {nombre: 'Estela', apellido: 'Lopez', legajo: 50012, tipoPlanta: 'Planta Permanente', 
    tipoCategoria: 'Jefe de departamente', numCategoria: 17},
  {nombre: 'Braian', apellido: 'Vidla', legajo: 80014, tipoPlanta: 'Becado', 
    tipoCategoria: 'Administrativo', numCategoria: 12},
  {nombre: 'Alejandro', apellido: 'Hock', legajo: 52613, tipoPlanta: 'Coordinado', 
    tipoCategoria: 'Administrativo', numCategoria: 12},
  {nombre: 'Gisela', apellido: 'Vazquez',legajo: 59125, tipoPlanta: 'Becado', 
    tipoCategoria: 'Beca', numCategoria: 999999},
  {nombre: 'Daniela', apellido: 'Bernal', legajo: 84268, tipoPlanta: 'Coordinado', 
    tipoCategoria: 'Administrativo', numCategoria: 15},
  {nombre: 'Carolina', apellido: 'Tevez', legajo: 62147, tipoPlanta: 'Becado', 
    tipoCategoria: 'Administrativo', numCategoria: 999999}];

export const EMPLEADOSFALTAS: EmpleadoFaltas[] = [
  {
    legajo: 51628,
    presente:
      [
        {
          falta: "Presente",
          fecha: new Date("2018-1-30")
        },
        {
          falta: "Presente con llegada tarde",
          fecha:new Date("2018-1-31")
        },
        {
          falta: "Presente",
          fecha: new Date("2018-2-5")
        },
        {
          falta: "Presente",
          fecha: new Date("2018-2-6")
        },
        {
          falta: "Presente",
          fecha: new Date("2018-2-7")
        }
      ],
    ausente:
      [
        {
          falta: "Ausente con aviso",
          fecha: new Date("2018-1-29"),
          detalles: "Falta por hijo descompuesto"
        },
        
        {
          falta: "Ausente con aviso",
          fecha: new Date("2018-4-25"),
          detalles: "Falta por hijo descompuesto"
        },
        {
          falta: "Ausente",
          fecha: new Date("2018-1-26"),
          detalles: "Falta por hijo descompuesto"
        }  

      ],
    licenciaMedica:
      [
        {
          falta: "Licencia Medica",
          tipoLicencia: "Enfermedad Familiar",
          diagnostico: "Ofmatologica",
          fecha: 
          [
              new Date("2018-2-1"),
              new Date("2018-2-2"),
              new Date("2018-2-3"),
          ],
          detalles: "Tres dia de reposo"
        },
        {
          falta: "Licencia Medica",
          tipoLicencia: "Enfermedad",
          diagnostico: "Digestiva",
          fecha: 
          [
            new Date("2018-2-4")
          ],
          detalles: "Un dia de reposo"
        }
      ],
    licenciaART:
      [
        {
          falta: "Licencia por ART",
          nroSiniestro: 123456,
          fechaControl: new Date("2018-2-6"),
          fecha:
          [
            new Date("2018-2-5"),
            new Date("2018-2-6"),
            new Date("2018-2-7"),
            new Date("2018-2-8"),
          ],
          detalles: "Accidente Laboral",
        }
      ],
    licenciaAnual:
      [
        {
          falta: "Licencia Anual Extraordinaria",
          fecha: 
          [
            new Date("2018-4-16"),
            new Date("2018-4-17"),
            new Date("2018-4-18"),
            new Date("2018-4-19"),
            new Date("2018-4-20"),
            new Date("2018-4-21"),
            new Date("2018-4-22")
          ],
          detalles: "Restan 14 dias de vacaciones"
        }
      ]
  }
]