export class accordionOption{
    nombre:string;
    routerLink:string;
}

export class buttonsOption{
    nombre:string;
    routerLink:string;
    icon:string;
}

export class SidenavDirector{
    accordionNombre: string;
    accordionOpciones: accordionOption[];
    buttonsOpciones: buttonsOption[];
}
  