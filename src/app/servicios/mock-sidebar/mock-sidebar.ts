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

