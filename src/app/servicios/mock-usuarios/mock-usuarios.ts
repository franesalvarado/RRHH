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
        nombre: "paznar",
        legajo: 81621,
        tipoPermiso: "RRHH",
        funcion: "total"
    },
    {
        nombre: "dlebon",
        legajo: 51230,
        tipoPermiso: "RRHH",
        funcion: "Vacaciones"
    },
    {
        nombre: "omoro",
        legajo: 81633,
        tipoPermiso: "RRHH",
        funcion: "Enfermedad"
    }
];

export const DIRECTORES: UsuarioDirector[] = [
    {
        nombre: "jlbenitez",
        legajo: 81621,
        direccion: "DirDeBromatologia"
    },
    {
        nombre: "jcancio",
        legajo: 51230,
        direccion: "SubsecretariaDeSeguridad"
    },
    {
        nombre: "jsparvoli",
        legajo: 81633,
        direccion: "DirDeAdministracion"
    }
];
