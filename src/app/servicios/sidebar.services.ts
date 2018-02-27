import { Injectable } from '@angular/core';
import { SIDENAVDIRECTOR, SIDENAVADMINGLOBAL, SIDENAVADMIN } from './mock-sidebar/mock-sidebar';

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
}