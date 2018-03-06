"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var material_module_1 = require("./libreria/commons/material.module");
var ngprime_module_1 = require("./libreria/commons/ngprime.module");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var dialog_cambiar_clave_component_1 = require("./dialogs-app.component/dialog-cambiar-clave/dialog-cambiar-clave.component");
var login_component_1 = require("./libreria/login/login.component");
var listado_material_component_1 = require("./director/listado-material/listado-material.component");
var dialog_table_component_1 = require("./director/listado-material/dialog-table-faltas/dialog-table.component");
var informacion_historica_component_1 = require("./director/informacion-historica/informacion-historica.component");
var dialog_historico_component_1 = require("./director/informacion-historica/dialog-historico/dialog-historico.component");
var alertas_component_1 = require("./director/alertas/alertas.component");
var dialog_alertas_component_1 = require("./director/alertas/dialog-alertas/dialog-alertas.component");
var list_administradores_component_1 = require("./adminglobal-admin/list-administradores/list-administradores.component");
var dialog_administradores_component_1 = require("./adminglobal-admin/list-administradores/dialog-administradores/dialog-administradores.component");
var list_directores_component_1 = require("./adminglobal-admin/list-directores/list-directores.component");
var dialog_list_directores_component_1 = require("./adminglobal-admin/list-directores/dialog-list-directores/dialog-list-directores.component");
var list_personal_rrhh_component_1 = require("./adminglobal-admin/list-personal-rrhh/list-personal-rrhh.component");
var dialog_list_personal_rrhh_component_1 = require("./adminglobal-admin/list-personal-rrhh/dialog-list-personal-rrhh/dialog-list-personal-rrhh.component");
var agregar_usuario_component_1 = require("./adminglobal-admin/agregar-usuario/agregar-usuario.component");
var cargar_licencia_anual_component_1 = require("./personal-rrhh/cargar-licencia-anual/cargar-licencia-anual.component");
var dialog_cargar_licencia_anual_component_1 = require("./personal-rrhh/cargar-licencia-anual/dialog-cargar-licencia-anual/dialog-cargar-licencia-anual.component");
var cargar_licencia_medica_component_1 = require("./personal-rrhh/cargar-licencia-medica/cargar-licencia-medica.component");
var dialog_cargar_licencia_medica_component_1 = require("./personal-rrhh/cargar-licencia-medica/dialog-cargar-licencia-medica/dialog-cargar-licencia-medica.component");
var cargar_art_component_1 = require("./personal-rrhh/cargar-art/cargar-art.component");
var dialog_cargar_art_component_1 = require("./personal-rrhh/cargar-art/dialog-cargar-art/dialog-cargar-art.component");
var modificar_faltas_component_1 = require("./personal-rrhh/modificar-faltas/modificar-faltas.component");
var dialog_modificar_faltas_component_1 = require("./personal-rrhh/modificar-faltas/dialog-modificar-faltas/dialog-modificar-faltas.component");
var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'listado-material', component: listado_material_component_1.ListadoMaterialComponent },
    { path: 'listado-material/:page', component: listado_material_component_1.ListadoMaterialComponent },
    { path: 'informacion-historica', component: informacion_historica_component_1.InformacionHistoricaComponent },
    { path: 'alertas', component: alertas_component_1.AlertasComponent },
    { path: 'new-usuarios', component: agregar_usuario_component_1.AgregarUsuarioComponent },
    { path: 'administradores', component: list_administradores_component_1.ListAdministradoresComponent },
    { path: 'directores', component: list_directores_component_1.ListDirectoresComponent },
    { path: 'personal-rrhh', component: list_personal_rrhh_component_1.ListPersonalRrhhComponent },
    { path: 'cargar-anual', component: cargar_licencia_anual_component_1.CargarLicenciaAnualComponent },
    { path: 'cargar-medica', component: cargar_licencia_medica_component_1.CargarLicenciaMedicaComponent },
    { path: 'cargar-art', component: cargar_art_component_1.CargarArtComponent },
    { path: 'modificar-faltas', component: modificar_faltas_component_1.ModificarFaltasComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                listado_material_component_1.ListadoMaterialComponent,
                dialog_table_component_1.DialogTableComponent,
                informacion_historica_component_1.InformacionHistoricaComponent,
                dialog_historico_component_1.DialogHistoricoComponent,
                alertas_component_1.AlertasComponent,
                login_component_1.LoginComponent,
                list_administradores_component_1.ListAdministradoresComponent,
                list_directores_component_1.ListDirectoresComponent,
                list_personal_rrhh_component_1.ListPersonalRrhhComponent,
                agregar_usuario_component_1.AgregarUsuarioComponent,
                dialog_administradores_component_1.DialogAdministradoresComponent,
                dialog_alertas_component_1.DialogAlertasComponent,
                dialog_list_directores_component_1.DialogListDirectoresComponent,
                dialog_list_personal_rrhh_component_1.DialogListPersonalRrhhComponent,
                dialog_cambiar_clave_component_1.DialogCambiarClaveComponent,
                cargar_licencia_anual_component_1.CargarLicenciaAnualComponent,
                cargar_licencia_medica_component_1.CargarLicenciaMedicaComponent,
                cargar_art_component_1.CargarArtComponent,
                modificar_faltas_component_1.ModificarFaltasComponent,
                dialog_cargar_art_component_1.DialogCargarArtComponent,
                dialog_cargar_licencia_anual_component_1.DialogCargarLicenciaAnualComponent,
                dialog_cargar_licencia_medica_component_1.DialogCargarLicenciaMedicaComponent,
                dialog_modificar_faltas_component_1.DialogModificarFaltasComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                material_module_1.MaterialModule,
                ngprime_module_1.NgPrimeModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(routes)
            ],
            entryComponents: [
                dialog_table_component_1.DialogTableComponent,
                dialog_historico_component_1.DialogHistoricoComponent,
                dialog_administradores_component_1.DialogAdministradoresComponent,
                dialog_alertas_component_1.DialogAlertasComponent,
                dialog_list_directores_component_1.DialogListDirectoresComponent,
                dialog_list_personal_rrhh_component_1.DialogListPersonalRrhhComponent,
                dialog_cambiar_clave_component_1.DialogCambiarClaveComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSw4REFBMEQ7QUFDMUQsc0NBQXlDO0FBQ3pDLHNDQUEyQztBQUMzQyw2Q0FBd0Q7QUFDeEQsd0NBQWtFO0FBR2xFLHNFQUFvRTtBQUNwRSxvRUFBa0U7QUFHbEUsMENBQXVEO0FBR3ZELGlEQUErQztBQUM3Qyw4SEFBMEg7QUFDNUgsb0VBQWtFO0FBR2xFLHFHQUFrRztBQUNoRyxpSEFBOEc7QUFDaEgsb0hBQWlIO0FBQy9HLDJIQUF3SDtBQUMxSCwwRUFBd0U7QUFDdEUsdUdBQW9HO0FBR3RHLDBIQUF1SDtBQUNySCxxSkFBa0o7QUFDcEosMkdBQXdHO0FBQ3RHLGdKQUE0STtBQUM5SSxvSEFBZ0g7QUFDOUcsNEpBQXVKO0FBQ3pKLDJHQUF3RztBQUd4Ryx5SEFBcUg7QUFDbkgsb0tBQStKO0FBQ2pLLDRIQUF3SDtBQUN0SCx3S0FBbUs7QUFDckssd0ZBQXFGO0FBQ25GLHdIQUFvSDtBQUN0SCwwR0FBdUc7QUFDckcsZ0pBQTRJO0FBSTlJLElBQU0sTUFBTSxHQUFXO0lBRXJCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFFaEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBRTVDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxxREFBd0IsRUFBRTtJQUNqRSxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxTQUFTLEVBQUUscURBQXdCLEVBQUU7SUFDdkUsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLCtEQUE2QixFQUFFO0lBQzNFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7SUFFaEQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxtREFBdUIsRUFBRTtJQUM1RCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsNkRBQTRCLEVBQUU7SUFDcEUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxtREFBdUIsRUFBRTtJQUMxRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHdEQUF5QixFQUFFO0lBRS9ELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsOERBQTRCLEVBQUU7SUFDakUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxnRUFBNkIsRUFBRTtJQUNuRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxxREFBd0IsRUFBRTtDQUNsRSxDQUFDO0FBbURGO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFqRHJCLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWixxREFBd0I7Z0JBQ3hCLDZDQUFvQjtnQkFDcEIsK0RBQTZCO2dCQUM3QixxREFBd0I7Z0JBQ3hCLG9DQUFnQjtnQkFDaEIsZ0NBQWM7Z0JBQ2QsNkRBQTRCO2dCQUM1QixtREFBdUI7Z0JBQ3ZCLHdEQUF5QjtnQkFDekIsbURBQXVCO2dCQUN2QixpRUFBOEI7Z0JBQzlCLGlEQUFzQjtnQkFDdEIsZ0VBQTZCO2dCQUM3QixxRUFBK0I7Z0JBQy9CLDREQUEyQjtnQkFDM0IsOERBQTRCO2dCQUM1QixnRUFBNkI7Z0JBQzdCLHlDQUFrQjtnQkFDbEIscURBQXdCO2dCQUN4QixzREFBd0I7Z0JBQ3hCLDJFQUFrQztnQkFDbEMsNkVBQW1DO2dCQUNuQyxrRUFBOEI7YUFDL0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsZ0NBQWE7Z0JBQ2IsaUJBQVU7Z0JBQ1YsdUJBQWdCO2dCQUNoQixnQ0FBYztnQkFDZCw4QkFBYTtnQkFDYixtQkFBVztnQkFDWCwyQkFBbUI7Z0JBQ25CLHFCQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUM3QjtZQUNELGVBQWUsRUFBRTtnQkFDZiw2Q0FBb0I7Z0JBQ3BCLHFEQUF3QjtnQkFDeEIsaUVBQThCO2dCQUM5QixpREFBc0I7Z0JBQ3RCLGdFQUE2QjtnQkFDN0IscUVBQStCO2dCQUMvQiw0REFBMkI7YUFDNUI7WUFDRCxTQUFTLEVBQUUsRUFBRTtZQUNiLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDMUIsQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHMgZGUgQW5ndWxhciBwdXJvXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBJbXBvcnRzIGRlIE1hdGVyaWFsIC0gTmdcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9saWJyZXJpYS9jb21tb25zL21hdGVyaWFsLm1vZHVsZSc7XG5pbXBvcnQgeyBOZ1ByaW1lTW9kdWxlIH0gZnJvbSAnLi9saWJyZXJpYS9jb21tb25zL25ncHJpbWUubW9kdWxlJztcblxuLy8gUm91dGVyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIEFwcENvbXBvbmVudFxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbiAgaW1wb3J0IHsgRGlhbG9nQ2FtYmlhckNsYXZlQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2dzLWFwcC5jb21wb25lbnQvZGlhbG9nLWNhbWJpYXItY2xhdmUvZGlhbG9nLWNhbWJpYXItY2xhdmUuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9saWJyZXJpYS9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuXG4vLyBEaXJlY3RvclxuaW1wb3J0IHsgTGlzdGFkb01hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi9kaXJlY3Rvci9saXN0YWRvLW1hdGVyaWFsL2xpc3RhZG8tbWF0ZXJpYWwuY29tcG9uZW50JztcbiAgaW1wb3J0IHsgRGlhbG9nVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RpcmVjdG9yL2xpc3RhZG8tbWF0ZXJpYWwvZGlhbG9nLXRhYmxlLWZhbHRhcy9kaWFsb2ctdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IEluZm9ybWFjaW9uSGlzdG9yaWNhQ29tcG9uZW50IH0gZnJvbSAnLi9kaXJlY3Rvci9pbmZvcm1hY2lvbi1oaXN0b3JpY2EvaW5mb3JtYWNpb24taGlzdG9yaWNhLmNvbXBvbmVudCc7XG4gIGltcG9ydCB7IERpYWxvZ0hpc3Rvcmljb0NvbXBvbmVudCB9IGZyb20gJy4vZGlyZWN0b3IvaW5mb3JtYWNpb24taGlzdG9yaWNhL2RpYWxvZy1oaXN0b3JpY28vZGlhbG9nLWhpc3Rvcmljby5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWxlcnRhc0NvbXBvbmVudCB9IGZyb20gJy4vZGlyZWN0b3IvYWxlcnRhcy9hbGVydGFzLmNvbXBvbmVudCc7XG4gIGltcG9ydCB7IERpYWxvZ0FsZXJ0YXNDb21wb25lbnQgfSBmcm9tICcuL2RpcmVjdG9yL2FsZXJ0YXMvZGlhbG9nLWFsZXJ0YXMvZGlhbG9nLWFsZXJ0YXMuY29tcG9uZW50JztcblxuLy8gQWRtaW5pc3RyYWRvciAtIEFkbWluR2xvYmFsXG5pbXBvcnQgeyBMaXN0QWRtaW5pc3RyYWRvcmVzQ29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbmdsb2JhbC1hZG1pbi9saXN0LWFkbWluaXN0cmFkb3Jlcy9saXN0LWFkbWluaXN0cmFkb3Jlcy5jb21wb25lbnQnO1xuICBpbXBvcnQgeyBEaWFsb2dBZG1pbmlzdHJhZG9yZXNDb21wb25lbnQgfSBmcm9tICcuL2FkbWluZ2xvYmFsLWFkbWluL2xpc3QtYWRtaW5pc3RyYWRvcmVzL2RpYWxvZy1hZG1pbmlzdHJhZG9yZXMvZGlhbG9nLWFkbWluaXN0cmFkb3Jlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdERpcmVjdG9yZXNDb21wb25lbnQgfSBmcm9tICcuL2FkbWluZ2xvYmFsLWFkbWluL2xpc3QtZGlyZWN0b3Jlcy9saXN0LWRpcmVjdG9yZXMuY29tcG9uZW50JztcbiAgaW1wb3J0IHsgRGlhbG9nTGlzdERpcmVjdG9yZXNDb21wb25lbnQgfSBmcm9tICcuL2FkbWluZ2xvYmFsLWFkbWluL2xpc3QtZGlyZWN0b3Jlcy9kaWFsb2ctbGlzdC1kaXJlY3RvcmVzL2RpYWxvZy1saXN0LWRpcmVjdG9yZXMuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RQZXJzb25hbFJyaGhDb21wb25lbnQgfSBmcm9tICcuL2FkbWluZ2xvYmFsLWFkbWluL2xpc3QtcGVyc29uYWwtcnJoaC9saXN0LXBlcnNvbmFsLXJyaGguY29tcG9uZW50JztcbiAgaW1wb3J0IHsgRGlhbG9nTGlzdFBlcnNvbmFsUnJoaENvbXBvbmVudCB9IGZyb20gJy4vYWRtaW5nbG9iYWwtYWRtaW4vbGlzdC1wZXJzb25hbC1ycmhoL2RpYWxvZy1saXN0LXBlcnNvbmFsLXJyaGgvZGlhbG9nLWxpc3QtcGVyc29uYWwtcnJoaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWdyZWdhclVzdWFyaW9Db21wb25lbnQgfSBmcm9tICcuL2FkbWluZ2xvYmFsLWFkbWluL2FncmVnYXItdXN1YXJpby9hZ3JlZ2FyLXVzdWFyaW8uY29tcG9uZW50JztcblxuLy8gUGVyc29uYWwgZGUgUmVjdXJzb3MgSHVtYW5vc1xuaW1wb3J0IHsgQ2FyZ2FyTGljZW5jaWFBbnVhbENvbXBvbmVudCB9IGZyb20gJy4vcGVyc29uYWwtcnJoaC9jYXJnYXItbGljZW5jaWEtYW51YWwvY2FyZ2FyLWxpY2VuY2lhLWFudWFsLmNvbXBvbmVudCc7XG4gIGltcG9ydCB7IERpYWxvZ0NhcmdhckxpY2VuY2lhQW51YWxDb21wb25lbnQgfSBmcm9tICcuL3BlcnNvbmFsLXJyaGgvY2FyZ2FyLWxpY2VuY2lhLWFudWFsL2RpYWxvZy1jYXJnYXItbGljZW5jaWEtYW51YWwvZGlhbG9nLWNhcmdhci1saWNlbmNpYS1hbnVhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZ2FyTGljZW5jaWFNZWRpY2FDb21wb25lbnQgfSBmcm9tICcuL3BlcnNvbmFsLXJyaGgvY2FyZ2FyLWxpY2VuY2lhLW1lZGljYS9jYXJnYXItbGljZW5jaWEtbWVkaWNhLmNvbXBvbmVudCc7XG4gIGltcG9ydCB7IERpYWxvZ0NhcmdhckxpY2VuY2lhTWVkaWNhQ29tcG9uZW50IH0gZnJvbSAnLi9wZXJzb25hbC1ycmhoL2Nhcmdhci1saWNlbmNpYS1tZWRpY2EvZGlhbG9nLWNhcmdhci1saWNlbmNpYS1tZWRpY2EvZGlhbG9nLWNhcmdhci1saWNlbmNpYS1tZWRpY2EuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmdhckFydENvbXBvbmVudCB9IGZyb20gJy4vcGVyc29uYWwtcnJoaC9jYXJnYXItYXJ0L2Nhcmdhci1hcnQuY29tcG9uZW50JztcbiAgaW1wb3J0IHsgRGlhbG9nQ2FyZ2FyQXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9wZXJzb25hbC1ycmhoL2Nhcmdhci1hcnQvZGlhbG9nLWNhcmdhci1hcnQvZGlhbG9nLWNhcmdhci1hcnQuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGlmaWNhckZhbHRhc0NvbXBvbmVudCB9IGZyb20gJy4vcGVyc29uYWwtcnJoaC9tb2RpZmljYXItZmFsdGFzL21vZGlmaWNhci1mYWx0YXMuY29tcG9uZW50JztcbiAgaW1wb3J0IHsgRGlhbG9nTW9kaWZpY2FyRmFsdGFzQ29tcG9uZW50IH0gZnJvbSAnLi9wZXJzb25hbC1ycmhoL21vZGlmaWNhci1mYWx0YXMvZGlhbG9nLW1vZGlmaWNhci1mYWx0YXMvZGlhbG9nLW1vZGlmaWNhci1mYWx0YXMuY29tcG9uZW50JztcblxuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAvLyBIb21lXG4gIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgLy8gU2UgY2FyZ2FuIGxhcyBydXRhc1xuICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgLy8gRGlyZWN0b3Jlc1xuICB7IHBhdGg6ICdsaXN0YWRvLW1hdGVyaWFsJywgY29tcG9uZW50OiBMaXN0YWRvTWF0ZXJpYWxDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnbGlzdGFkby1tYXRlcmlhbC86cGFnZScsIGNvbXBvbmVudDogTGlzdGFkb01hdGVyaWFsQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2luZm9ybWFjaW9uLWhpc3RvcmljYScsIGNvbXBvbmVudDogSW5mb3JtYWNpb25IaXN0b3JpY2FDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnYWxlcnRhcycsIGNvbXBvbmVudDogQWxlcnRhc0NvbXBvbmVudCB9LFxuICAvLyBBZG1pbiBHbG9iYWwgLSBBZG1pblxuICB7IHBhdGg6ICduZXctdXN1YXJpb3MnLCBjb21wb25lbnQ6IEFncmVnYXJVc3VhcmlvQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2FkbWluaXN0cmFkb3JlcycsIGNvbXBvbmVudDogTGlzdEFkbWluaXN0cmFkb3Jlc0NvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdkaXJlY3RvcmVzJywgY29tcG9uZW50OiBMaXN0RGlyZWN0b3Jlc0NvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdwZXJzb25hbC1ycmhoJywgY29tcG9uZW50OiBMaXN0UGVyc29uYWxScmhoQ29tcG9uZW50IH0sXG4gIC8vIFBlcnNvbmFsIGRlIFJlY3Vyc29zIEh1bWFub3NcbiAgeyBwYXRoOiAnY2FyZ2FyLWFudWFsJywgY29tcG9uZW50OiBDYXJnYXJMaWNlbmNpYUFudWFsQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2Nhcmdhci1tZWRpY2EnLCBjb21wb25lbnQ6IENhcmdhckxpY2VuY2lhTWVkaWNhQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2Nhcmdhci1hcnQnLCBjb21wb25lbnQ6IENhcmdhckFydENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdtb2RpZmljYXItZmFsdGFzJywgY29tcG9uZW50OiBNb2RpZmljYXJGYWx0YXNDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIExpc3RhZG9NYXRlcmlhbENvbXBvbmVudCxcbiAgICBEaWFsb2dUYWJsZUNvbXBvbmVudCxcbiAgICBJbmZvcm1hY2lvbkhpc3RvcmljYUNvbXBvbmVudCxcbiAgICBEaWFsb2dIaXN0b3JpY29Db21wb25lbnQsXG4gICAgQWxlcnRhc0NvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBMaXN0QWRtaW5pc3RyYWRvcmVzQ29tcG9uZW50LFxuICAgIExpc3REaXJlY3RvcmVzQ29tcG9uZW50LFxuICAgIExpc3RQZXJzb25hbFJyaGhDb21wb25lbnQsXG4gICAgQWdyZWdhclVzdWFyaW9Db21wb25lbnQsXG4gICAgRGlhbG9nQWRtaW5pc3RyYWRvcmVzQ29tcG9uZW50LFxuICAgIERpYWxvZ0FsZXJ0YXNDb21wb25lbnQsXG4gICAgRGlhbG9nTGlzdERpcmVjdG9yZXNDb21wb25lbnQsXG4gICAgRGlhbG9nTGlzdFBlcnNvbmFsUnJoaENvbXBvbmVudCxcbiAgICBEaWFsb2dDYW1iaWFyQ2xhdmVDb21wb25lbnQsXG4gICAgQ2FyZ2FyTGljZW5jaWFBbnVhbENvbXBvbmVudCxcbiAgICBDYXJnYXJMaWNlbmNpYU1lZGljYUNvbXBvbmVudCxcbiAgICBDYXJnYXJBcnRDb21wb25lbnQsXG4gICAgTW9kaWZpY2FyRmFsdGFzQ29tcG9uZW50LFxuICAgIERpYWxvZ0NhcmdhckFydENvbXBvbmVudCxcbiAgICBEaWFsb2dDYXJnYXJMaWNlbmNpYUFudWFsQ29tcG9uZW50LFxuICAgIERpYWxvZ0NhcmdhckxpY2VuY2lhTWVkaWNhQ29tcG9uZW50LFxuICAgIERpYWxvZ01vZGlmaWNhckZhbHRhc0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgTmdQcmltZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgRGlhbG9nVGFibGVDb21wb25lbnQsXG4gICAgRGlhbG9nSGlzdG9yaWNvQ29tcG9uZW50LFxuICAgIERpYWxvZ0FkbWluaXN0cmFkb3Jlc0NvbXBvbmVudCxcbiAgICBEaWFsb2dBbGVydGFzQ29tcG9uZW50LFxuICAgIERpYWxvZ0xpc3REaXJlY3RvcmVzQ29tcG9uZW50LFxuICAgIERpYWxvZ0xpc3RQZXJzb25hbFJyaGhDb21wb25lbnQsXG4gICAgRGlhbG9nQ2FtYmlhckNsYXZlQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19