import { Empleado, EmpleadoFaltas } from '../../models/empleados';
export const EMPLEADOS: Empleado[] = [
  {position: 1, name: 'Pablo', legajo: 51628, tipoContrato: 'Coordinado', confirmado: true},
  {position: 2, name: 'Luis', legajo: 51629, tipoContrato: 'Coordinado', confirmado: false},
  {position: 3, name: 'Oscar', legajo: 51635, tipoContrato: 'Coordinado', confirmado: false},
  {position: 4, name: 'Francisco', legajo: 81621, tipoContrato: 'Becado', confirmado: false},
  {position: 5, name: 'Juan', legajo: 50215, tipoContrato: 'Coordinado', confirmado: false},
  {position: 6, name: 'Estela', legajo: 50012, tipoContrato: 'Planta Permanente', confirmado: true},
  {position: 7, name: 'Braian', legajo: 80014, tipoContrato: 'Becado', confirmado: false},
  {position: 8, name: 'Alejandro', legajo: 52613, tipoContrato: 'Coordinado', confirmado: false},
  {position: 9, name: 'Damian', legajo: 54125, tipoContrato: 'Becado', confirmado: false},
  {position: 10, name: 'Gisela', legajo: 59125, tipoContrato: 'Planta Permanente', confirmado: false},
  {position: 11, name: 'Daniela', legajo: 84268, tipoContrato: 'Planta Permanente', confirmado: false},
  {position: 12, name: 'Carolina', legajo: 62147, tipoContrato: 'Becado', confirmado: false}];

export const EMPLEADOSFALTAS: EmpleadoFaltas[] = [
  {
    legajo: 51628,
    tipoFalta:
    [
      {
        tipoFalta: "Ausencia con aviso",
        fecha: new Date("2018-1-29")
      },
      {
        tipoFalta: "Presente",
        fecha: new Date("2018-1-30")
      },
      {
        tipoFalta: "Presente con llegada tarde",
        fecha:new Date("2018-1-31")
      },
      {
        tipoFalta: "Licencia por enfermedad",
        fecha: new Date("2018-2-1")
      },
      {
        tipoFalta: "Licencia por enfermedad",
        fecha: new Date("2018-2-2")
      },
      {
        tipoFalta: "Licencia por enfermedad",
        fecha: new Date("2018-2-3")
      },
      {
        tipoFalta: "Licencia por enfermedad",
        fecha: new Date("2018-2-4")
      },
      {
        tipoFalta: "Presente",
        fecha: new Date("2018-2-5")
      },
      {
        tipoFalta: "Presente",
        fecha: new Date("2018-2-6")
      },
      {
        tipoFalta: "Presente",
        fecha: new Date("2018-2-7")
      }
    ]
  },
  {
    legajo: 81621,
    tipoFalta:
    [
      {
        tipoFalta: "Presente",
        fecha: new Date("2018-1-29")
      },
      {
        tipoFalta: "Ausencia sin aviso",
        fecha: new Date("2018-1-29")
      },
      {
        tipoFalta: "Presente con llegada tarde",
        fecha: new Date("2018-1-29")
      },
      {
        tipoFalta: "Presente",
        fecha: new Date("2018-1-29")
      },
      {
        tipoFalta: "Presente",
        fecha: new Date("2018-1-29")
      },
      {
        tipoFalta: "Licencia por enfermedad",
        fecha: new Date("2018-1-29")
      },
      {
        tipoFalta: "Licencia por enfermedad",
        fecha: new Date("2018-1-29")
      },
      {
        tipoFalta: "Presente",
        fecha: new Date("2018-1-29")
      },
      {
        tipoFalta: "Presente",
        fecha: new Date("2018-1-29")
      },
      {
        tipoFalta: "Presente",
        fecha: new Date("2018-1-29")
      }
    ]
  },
]