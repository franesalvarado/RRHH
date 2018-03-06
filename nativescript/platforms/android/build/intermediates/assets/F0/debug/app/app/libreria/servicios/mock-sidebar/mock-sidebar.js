"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIDENAVDIRECTOR = {
    accordionNombre: "Listado del Personal",
    accordionOpciones: [{
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
    buttonsOpciones: [{
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
};
exports.SIDENAVADMINGLOBAL = {
    accordionNombre: "Opciones de usuarios",
    accordionOpciones: [{
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
    buttonsOpciones: [{
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
};
exports.SIDENAVADMIN = {
    accordionNombre: "Opciones de usuarios",
    accordionOpciones: [{
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
    buttonsOpciones: [{
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
};
exports.SIDENAVRRHHGLOBAL = {
    buttonsOpciones: [{
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1zaWRlYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9jay1zaWRlYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ2EsUUFBQSxlQUFlLEdBQW9CO0lBQzVDLGVBQWUsRUFBRSxzQkFBc0I7SUFDdkMsaUJBQWlCLEVBQ2IsQ0FBQztZQUNHLE1BQU0sRUFBRSxPQUFPO1lBQ2YsVUFBVSxFQUFFLGtCQUFrQjtTQUNqQztRQUNEO1lBQ0ksTUFBTSxFQUFFLFNBQVM7WUFDakIsVUFBVSxFQUFFLHlCQUF5QjtTQUN4QztRQUNEO1lBQ0ksTUFBTSxFQUFFLGFBQWE7WUFDckIsVUFBVSxFQUFFLDZCQUE2QjtTQUM1QztRQUNEO1lBQ0ksTUFBTSxFQUFFLG1CQUFtQjtZQUMzQixVQUFVLEVBQUUsb0NBQW9DO1NBQ25ELENBQUM7SUFDTixlQUFlLEVBQ1gsQ0FBQztZQUNHLE1BQU0sRUFBRSxvQkFBb0I7WUFDNUIsVUFBVSxFQUFFLHVCQUF1QjtZQUNuQyxJQUFJLEVBQUUsVUFBVTtTQUNuQjtRQUNEO1lBQ0ksTUFBTSxFQUFFLFVBQVU7WUFDbEIsVUFBVSxFQUFFLFNBQVM7WUFDckIsSUFBSSxFQUFFLGNBQWM7U0FDdkI7S0FDQTtDQUNSLENBQUE7QUFFWSxRQUFBLGtCQUFrQixHQUFvQjtJQUMvQyxlQUFlLEVBQUUsc0JBQXNCO0lBQ3ZDLGlCQUFpQixFQUNiLENBQUM7WUFDRyxNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLFVBQVUsRUFBRSxjQUFjO1NBQzdCO1FBQ0Q7WUFDSSxNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLFVBQVUsRUFBRSxpQkFBaUI7U0FDaEM7UUFDRDtZQUNJLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLFVBQVUsRUFBRSxZQUFZO1NBQzNCO1FBQ0Q7WUFDSSxNQUFNLEVBQUUsZUFBZTtZQUN2QixVQUFVLEVBQUUsZUFBZTtTQUM5QixDQUFDO0lBQ04sZUFBZSxFQUNYLENBQUM7WUFDRyxNQUFNLEVBQUUsaUNBQWlDO1lBQ3pDLFVBQVUsRUFBRSxFQUFFO1lBQ2QsSUFBSSxFQUFFLFVBQVU7U0FDbkI7UUFDRDtZQUNJLE1BQU0sRUFBRSwrQkFBK0I7WUFDdkMsVUFBVSxFQUFFLEVBQUU7WUFDZCxJQUFJLEVBQUUsY0FBYztTQUN2QjtLQUNBO0NBQ1IsQ0FBQTtBQUVZLFFBQUEsWUFBWSxHQUFvQjtJQUN6QyxlQUFlLEVBQUUsc0JBQXNCO0lBQ3ZDLGlCQUFpQixFQUNiLENBQUM7WUFDRyxNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLFVBQVUsRUFBRSxjQUFjO1NBQzdCO1FBQ0Q7WUFDSSxNQUFNLEVBQUUsWUFBWTtZQUNwQixVQUFVLEVBQUUsWUFBWTtTQUMzQjtRQUNEO1lBQ0ksTUFBTSxFQUFFLGVBQWU7WUFDdkIsVUFBVSxFQUFFLGVBQWU7U0FDOUIsQ0FBQztJQUNOLGVBQWUsRUFDWCxDQUFDO1lBQ0csTUFBTSxFQUFFLGlDQUFpQztZQUN6QyxVQUFVLEVBQUUsRUFBRTtZQUNkLElBQUksRUFBRSxVQUFVO1NBQ25CO1FBQ0Q7WUFDSSxNQUFNLEVBQUUsK0JBQStCO1lBQ3ZDLFVBQVUsRUFBRSxFQUFFO1lBQ2QsSUFBSSxFQUFFLGNBQWM7U0FDdkI7S0FDQTtDQUNSLENBQUE7QUFHWSxRQUFBLGlCQUFpQixHQUFnQjtJQUMxQyxlQUFlLEVBQ1gsQ0FBQztZQUNHLE1BQU0sRUFBRSx1QkFBdUI7WUFDL0IsVUFBVSxFQUFFLGNBQWM7WUFDMUIsSUFBSSxFQUFFLGdCQUFnQjtTQUN6QjtRQUNEO1lBQ0ksTUFBTSxFQUFFLHdCQUF3QjtZQUNoQyxVQUFVLEVBQUUsZUFBZTtZQUMzQixJQUFJLEVBQUUsZ0JBQWdCO1NBQ3pCO1FBQ0Q7WUFDSSxNQUFNLEVBQUUsWUFBWTtZQUNwQixVQUFVLEVBQUUsWUFBWTtZQUN4QixJQUFJLEVBQUUsV0FBVztTQUNwQjtRQUNEO1lBQ0ksTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixVQUFVLEVBQUUsa0JBQWtCO1lBQzlCLElBQUksRUFBRSxNQUFNO1NBQ2Y7S0FDQTtDQUNSLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaWRlbmF2RGlyZWN0b3IsIGFjY29yZGlvbk9wdGlvbiwgYnV0dG9uc09wdGlvbiwgU2lkZW5hdlJSSEggfSBmcm9tICcuLi8uLi9tb2RlbHMvc2lkZWJhcic7XHJcbmV4cG9ydCBjb25zdCBTSURFTkFWRElSRUNUT1I6IFNpZGVuYXZEaXJlY3RvciA9IHtcclxuICAgIGFjY29yZGlvbk5vbWJyZTogXCJMaXN0YWRvIGRlbCBQZXJzb25hbFwiLFxyXG4gICAgYWNjb3JkaW9uT3BjaW9uZXM6IFxyXG4gICAgICAgIFt7XHJcbiAgICAgICAgICAgIG5vbWJyZTogXCJUb2Rvc1wiLFxyXG4gICAgICAgICAgICByb3V0ZXJMaW5rOiBcImxpc3RhZG8tbWF0ZXJpYWxcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBub21icmU6IFwiQmVjYWRvc1wiLFxyXG4gICAgICAgICAgICByb3V0ZXJMaW5rOiBcImxpc3RhZG8tbWF0ZXJpYWwvQmVjYWRvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbm9tYnJlOiBcIkNvb3JkaW5hZG9zXCIsXHJcbiAgICAgICAgICAgIHJvdXRlckxpbms6IFwibGlzdGFkby1tYXRlcmlhbC9Db29yZGluYWRvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbm9tYnJlOiBcIlBsYW50YSBQZXJtYW5lbnRlXCIsXHJcbiAgICAgICAgICAgIHJvdXRlckxpbms6IFwibGlzdGFkby1tYXRlcmlhbC9QbGFudGEgUGVybWFuZW50ZVwiXHJcbiAgICAgICAgfV0sXHJcbiAgICBidXR0b25zT3BjaW9uZXM6XHJcbiAgICAgICAgW3tcclxuICAgICAgICAgICAgbm9tYnJlOiBcIlJlZ2lzdHJvIEhpc3Rvcmljb1wiLFxyXG4gICAgICAgICAgICByb3V0ZXJMaW5rOiBcImluZm9ybWFjaW9uLWhpc3RvcmljYVwiLFxyXG4gICAgICAgICAgICBpY29uOiBcInRpbWVsaW5lXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbm9tYnJlOiBcIkFsZXJ0YXMgXCIsXHJcbiAgICAgICAgICAgIHJvdXRlckxpbms6IFwiYWxlcnRhc1wiLFxyXG4gICAgICAgICAgICBpY29uOiBcIm5ld19yZWxlYXNlc1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNJREVOQVZBRE1JTkdMT0JBTDogU2lkZW5hdkRpcmVjdG9yID0ge1xyXG4gICAgYWNjb3JkaW9uTm9tYnJlOiBcIk9wY2lvbmVzIGRlIHVzdWFyaW9zXCIsXHJcbiAgICBhY2NvcmRpb25PcGNpb25lczpcclxuICAgICAgICBbe1xyXG4gICAgICAgICAgICBub21icmU6IFwiQWdyZWdhciBVc3VhcmlvXCIsXHJcbiAgICAgICAgICAgIHJvdXRlckxpbms6IFwibmV3LXVzdWFyaW9zXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbm9tYnJlOiBcIkFkbWluaXN0cmFkb3Jlc1wiLFxyXG4gICAgICAgICAgICByb3V0ZXJMaW5rOiBcImFkbWluaXN0cmFkb3Jlc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5vbWJyZTogXCJEaXJlY3RvcmVzXCIsXHJcbiAgICAgICAgICAgIHJvdXRlckxpbms6IFwiZGlyZWN0b3Jlc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5vbWJyZTogXCJQZXJzb25hbCBSUkhIXCIsXHJcbiAgICAgICAgICAgIHJvdXRlckxpbms6IFwicGVyc29uYWwtcnJoaFwiXHJcbiAgICAgICAgfV0sXHJcbiAgICBidXR0b25zT3BjaW9uZXM6XHJcbiAgICAgICAgW3tcclxuICAgICAgICAgICAgbm9tYnJlOiBcIkFnZW50ZXMgZXhjZWRpZG9zIGRlIGF1c2VudGlzbW9cIixcclxuICAgICAgICAgICAgcm91dGVyTGluazogXCJcIixcclxuICAgICAgICAgICAgaWNvbjogXCJ0aW1lbGluZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5vbWJyZTogXCJBZ2VudGVzIGV4Y2VkaWRvcyBkZSBsaWNlbmNpYVwiLFxyXG4gICAgICAgICAgICByb3V0ZXJMaW5rOiBcIlwiLFxyXG4gICAgICAgICAgICBpY29uOiBcIm5ld19yZWxlYXNlc1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNJREVOQVZBRE1JTjogU2lkZW5hdkRpcmVjdG9yID0ge1xyXG4gICAgYWNjb3JkaW9uTm9tYnJlOiBcIk9wY2lvbmVzIGRlIHVzdWFyaW9zXCIsXHJcbiAgICBhY2NvcmRpb25PcGNpb25lczpcclxuICAgICAgICBbe1xyXG4gICAgICAgICAgICBub21icmU6IFwiQWdyZWdhciBVc3VhcmlvXCIsXHJcbiAgICAgICAgICAgIHJvdXRlckxpbms6IFwibmV3LXVzdWFyaW9zXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbm9tYnJlOiBcIkRpcmVjdG9yZXNcIixcclxuICAgICAgICAgICAgcm91dGVyTGluazogXCJkaXJlY3RvcmVzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbm9tYnJlOiBcIlBlcnNvbmFsIFJSSEhcIixcclxuICAgICAgICAgICAgcm91dGVyTGluazogXCJwZXJzb25hbC1ycmhoXCJcclxuICAgICAgICB9XSxcclxuICAgIGJ1dHRvbnNPcGNpb25lczpcclxuICAgICAgICBbe1xyXG4gICAgICAgICAgICBub21icmU6IFwiQWdlbnRlcyBleGNlZGlkb3MgZGUgYXVzZW50aXNtb1wiLFxyXG4gICAgICAgICAgICByb3V0ZXJMaW5rOiBcIlwiLFxyXG4gICAgICAgICAgICBpY29uOiBcInRpbWVsaW5lXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbm9tYnJlOiBcIkFnZW50ZXMgZXhjZWRpZG9zIGRlIGxpY2VuY2lhXCIsXHJcbiAgICAgICAgICAgIHJvdXRlckxpbms6IFwiXCIsXHJcbiAgICAgICAgICAgIGljb246IFwibmV3X3JlbGVhc2VzXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgXVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNJREVOQVZSUkhIR0xPQkFMOiBTaWRlbmF2UlJISCA9IHtcclxuICAgIGJ1dHRvbnNPcGNpb25lczpcclxuICAgICAgICBbe1xyXG4gICAgICAgICAgICBub21icmU6IFwiQ2FyZ2FyIGxpY2VuY2lhIGFudWFsXCIsXHJcbiAgICAgICAgICAgIHJvdXRlckxpbms6IFwiY2FyZ2FyLWFudWFsXCIsXHJcbiAgICAgICAgICAgIGljb246IFwiZmxpZ2h0X3Rha2VvZmZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBub21icmU6IFwiQ2FyZ2FyIGxpY2VuY2lhIG1lZGljYVwiLFxyXG4gICAgICAgICAgICByb3V0ZXJMaW5rOiBcImNhcmdhci1tZWRpY2FcIixcclxuICAgICAgICAgICAgaWNvbjogXCJwcmVnbmFudF93b21hblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5vbWJyZTogXCJDYXJnYXIgQVJUXCIsXHJcbiAgICAgICAgICAgIHJvdXRlckxpbms6IFwiY2FyZ2FyLWFydFwiLFxyXG4gICAgICAgICAgICBpY29uOiBcImFkZF9hbGVydFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5vbWJyZTogXCJNb2RpZmljYXIgZmFsdGFzXCIsXHJcbiAgICAgICAgICAgIHJvdXRlckxpbms6IFwibW9kaWZpY2FyLWZhbHRhc1wiLFxyXG4gICAgICAgICAgICBpY29uOiBcImxvb3BcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBdXHJcbn0iXX0=