import { SidenavDirector, accordionOption, buttonsOption } from '../../models/sidebar';
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
    accordionNombre: "Listado de usuarios",
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
    accordionNombre: "Listado de usuarios",
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