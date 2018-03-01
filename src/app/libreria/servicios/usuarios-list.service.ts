import { Injectable } from '@angular/core';
import { DIRECTORES, USUARIOSADMIN, USUARIOSADMINGLOBAL, PERSONALRRHH } from './mock-usuarios/mock-usuarios';
@Injectable()
export class UsuarioListService {
    getDirectores() {
        return DIRECTORES;
    }
    getUsuariosAdmin() {
        return USUARIOSADMIN;
    }
    getUsuariosAdminGlobal() {
        return USUARIOSADMINGLOBAL;
    }
    getPersonalRRHH() {
        return PERSONALRRHH;
    }
}
