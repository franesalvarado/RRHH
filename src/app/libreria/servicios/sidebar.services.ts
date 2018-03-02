import { Injectable } from '@angular/core';
import { SIDENAVDIRECTOR, SIDENAVADMINGLOBAL, SIDENAVADMIN, SIDENAVRRHHGLOBAL } from './mock-sidebar/mock-sidebar';

@Injectable()
export class SidenavService {
    getSidenavDirector() {
        return SIDENAVDIRECTOR;
    }

    getSidenavAdminGlobal(){
        return SIDENAVADMINGLOBAL;
    }

    getSidenavAdmin(){
        return SIDENAVADMIN;
    }

    getSidenavRRHHGLOBAL(){
        return SIDENAVRRHHGLOBAL;
    }
}