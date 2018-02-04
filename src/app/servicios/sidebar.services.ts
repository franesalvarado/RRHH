import { Injectable } from '@angular/core';
import { SIDENAVDIRECTOR, SIDENAVADMINGLOBAL } from './mock-sidebar/mock-sidebar';

@Injectable()
export class SidenavService {
    getSidenavDirector() {
        return SIDENAVDIRECTOR;
    }

    getSidenavAdminGlobal(){
        return SIDENAVADMINGLOBAL;
    }
}