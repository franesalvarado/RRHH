import { Injectable } from '@angular/core';
import { SIDENAVDIRECTOR } from './mock-sidebar/mock-sidebar';

@Injectable()
export class SidenavService {
    getSidenavDirector() {
        return SIDENAVDIRECTOR;
    }
}