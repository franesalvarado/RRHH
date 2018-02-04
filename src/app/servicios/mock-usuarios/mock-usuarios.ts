import { UsuarioRRHH, UsuarioAdmin, UsuarioDirector } from '../../models/usuario';
export const USUARIOSADMINGLOBAL: UsuarioAdmin[] = [
    {
        nombre: "admin",
        usuario: "admin",
        legajo: 81621,
        tipoPermiso: "GlobalAdmin"
    }
];

export const USUARIOSADMIN: UsuarioAdmin[] = [
    {
        nombre: "Francisco Alvarado",
        usuario: "falvarado",
        legajo: 81621,
        tipoPermiso: "Admin"
    },
    {
        nombre: "Pablo Smith",
        usuario: "pablito",
        legajo: 51230,
        tipoPermiso: "Admin"
    },
    {
        nombre: "Patricio Husson",
        usuario: "phusson",
        legajo: 81633,
        tipoPermiso: "Admin"
    }
];

export const PERSONALRRHH: UsuarioRRHH[] = [
    {
        nombre: "Pedro Aznar",
        usuario: "paznar",
        legajo: 81621,
        tipoPermiso: "RRHH",
        funcion: "total"
    },
    {
        nombre: "David Lebon",
        usuario: "dlebon",
        legajo: 51230,
        tipoPermiso: "RRHH",
        funcion: "Vacaciones"
    },
    {
        nombre: "Oscar Moro",
        usuario: "omoro",
        legajo: 81633,
        tipoPermiso: "RRHH",
        funcion: "Enfermedad"
    }
];

export const DIRECTORES: UsuarioDirector[] = [
    {
        nombre: "Jose Luis Benitez",
        usuario: "jlbenitez",
        legajo: 81621,
        area: "Direccion de Bromatologia",
        codDireccion: 1
    },
    {
        nombre: "Jorge Cancio",
        usuario: "jcancio",
        legajo: 51230,
        area: "Subsecretaria de Seguridad",
        codDireccion: 1
    },
    {
        nombre: "Jorge Sparvoli",
        usuario: "jsparvoli",
        legajo: 81633,
        area: "Direccion de Administracion",
        codDireccion: 1
    }
];
