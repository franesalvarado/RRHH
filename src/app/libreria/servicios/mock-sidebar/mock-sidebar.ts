import { SidenavDirector, accordionOption, buttonsOption, SidenavRRHH } from '../../models/sidebar';
export const SIDENAVDIRECTOR: SidenavDirector = {
    accordionNombre: "Listado del Personal",
    accordionOpciones: 
        [{
            nombre: "Todos",
            routerLink: "listado-material"
        },
        {
            nombre: "Becados",
            routerLink: "listado-material/Becado"
        },
        {
            nombre: "Coordinados",
            routerLink: "listado-material/Coordinado"
        },
        {
            nombre: "Planta Permanente",
            routerLink: "listado-material/Planta Permanente"
        }],
    buttonsOpciones:
        [{
            nombre: "Registro Historico",
            routerLink: "informacion-historica",
            icon: "timeline"
        },
        {
            nombre: "Alertas ",
            routerLink: "alertas",
            icon: "new_releases"
        }
        ]
}

export const SIDENAVADMINGLOBAL: SidenavDirector = {
    accordionNombre: "Opciones de usuarios",
    accordionOpciones:
        [{
            nombre: "Agregar Usuario",
            routerLink: "new-usuarios"
        },
        {
            nombre: "Administradores",
            routerLink: "administradores"
        },
        {
            nombre: "Directores",
            routerLink: "directores"
        },
        {
            nombre: "Personal RRHH",
            routerLink: "personal-rrhh"
        }],
    buttonsOpciones:
        [{
            nombre: "Agentes excedidos de ausentismo",
            routerLink: "",
            icon: "timeline"
        },
        {
            nombre: "Agentes excedidos de licencia",
            routerLink: "",
            icon: "new_releases"
        }
        ]
}

export const SIDENAVADMIN: SidenavDirector = {
    accordionNombre: "Opciones de usuarios",
    accordionOpciones:
        [{
            nombre: "Agregar Usuario",
            routerLink: "new-usuarios"
        },
        {
            nombre: "Directores",
            routerLink: "directores"
        },
        {
            nombre: "Personal RRHH",
            routerLink: "personal-rrhh"
        }],
    buttonsOpciones:
        [{
            nombre: "Agentes excedidos de ausentismo",
            routerLink: "",
            icon: "timeline"
        },
        {
            nombre: "Agentes excedidos de licencia",
            routerLink: "",
            icon: "new_releases"
        }
        ]
}


export const SIDENAVRRHHGLOBAL: SidenavRRHH = {
    buttonsOpciones:
        [{
            nombre: "Cargar licencia anual",
            routerLink: "cargar-anual",
            icon: "flight_takeoff"
        },
        {
            nombre: "Cargar licencia medica",
            routerLink: "cargar-medica",
            icon: "pregnant_woman"
        },
        {
            nombre: "Cargar ART",
            routerLink: "cargar-art",
            icon: "add_alert"
        },
        {
            nombre: "Modificar faltas",
            routerLink: "modificar-faltas",
            icon: "loop"
        }
        ]
}