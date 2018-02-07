import { Empleado, EmpleadoFaltas } from '../../models/empleados';
export const EMPLEADOS: Empleado[] = [
  {position: 1, name: 'Pablo', legajo: 51628, tipoContrato: 'Coordinado',
  cantFaltasMensual: 2, cantFaltasTotal: 2, cantRestVacaciones: 7},
  {position: 2, name: 'Luis', legajo: 51629, tipoContrato: 'Coordinado',
  cantFaltasMensual: 1, cantFaltasTotal: 8, cantRestVacaciones: 0},
  {position: 3, name: 'Oscar', legajo: 51635, tipoContrato: 'Coordinado',
  cantFaltasMensual: 0, cantFaltasTotal: 6, cantRestVacaciones: 14},
  {position: 4, name: 'Francisco', legajo: 81621, tipoContrato: 'Becado',
  cantFaltasMensual: 3, cantFaltasTotal: 10, cantRestVacaciones: 14},
  {position: 5, name: 'Juan', legajo: 50215, tipoContrato: 'Coordinado',
  cantFaltasMensual: 7, cantFaltasTotal: 7, cantRestVacaciones: 21},
  {position: 6, name: 'Estela', legajo: 50012, tipoContrato: 'Planta Permanente',
  cantFaltasMensual: 4, cantFaltasTotal: 4, cantRestVacaciones: 7},
  {position: 7, name: 'Braian', legajo: 80014, tipoContrato: 'Becado',
  cantFaltasMensual: 0, cantFaltasTotal: 0, cantRestVacaciones: 0},
  {position: 8, name: 'Alejandro', legajo: 52613, tipoContrato: 'Coordinado',
  cantFaltasMensual: 1, cantFaltasTotal: 10, cantRestVacaciones: 14},
  {position: 9, name: 'Damian', legajo: 54125, tipoContrato: 'Becado',
  cantFaltasMensual: 9, cantFaltasTotal: 20, cantRestVacaciones: 0},
  {position: 10, name: 'Gisela', legajo: 59125, tipoContrato: 'Planta Permanente',
  cantFaltasMensual: 8, cantFaltasTotal: 17, cantRestVacaciones: 21},
  {position: 11, name: 'Daniela', legajo: 84268, tipoContrato: 'Planta Permanente',
  cantFaltasMensual: 4, cantFaltasTotal: 9, cantRestVacaciones: 21},
  {position: 12, name: 'Carolina', legajo: 62147, tipoContrato: 'Becado',
  cantFaltasMensual: 0, cantFaltasTotal: 3, cantRestVacaciones: 28}];

export const EMPLEADOSFALTAS: EmpleadoFaltas[]= [
  {
    legajo: 51268,
    tipoFalta:
    [
      {
        tipoFalta: "Ausencia con aviso",
        fecha: "06/02/2018"
      },
      {
        tipoFalta: "Ausencia sin aviso",
        fecha: "07/02/2018"
      },
    ],
    tipoLicencia:
    [
      {
        tipoLicencia: "Licencia anual extraordinaria - Inicio",
        fecha: "12/02/2018"
      },
      {
        tipoLicencia: "Licencia anual extraordinaria - Final",
        fecha: "18/02/2018"
      }
    ],
    tipoPresente:
    [
      {
        tipoPresente: "Presente",
        fecha: "02/02/2017"
      },
      {
        tipoPresente: "Presente",
        fecha: "05/02/2017"
      },
      {
        tipoPresente: "Presente con llegada tarde",
        fecha: "08/02/2017"
      },
      {
        tipoPresente: "Presente",
        fecha: "01/02/2017"
      },
      {
        tipoPresente: "Presente con llegada tarde",
        fecha: "09/02/2017"
      }
    ]
  }
]