"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var empleado_service_1 = require("./libreria/servicios/empleado.service");
var sidebar_services_1 = require("./libreria/servicios/sidebar.services");
var material_1 = require("@angular/material");
var dialog_cambiar_clave_component_1 = require("./dialogs-app.component/dialog-cambiar-clave/dialog-cambiar-clave.component");
var AppComponent = (function () {
    function AppComponent(dialog, _empleadoService, _sidenavService) {
        this.dialog = dialog;
        this._empleadoService = _empleadoService;
        this._sidenavService = _sidenavService;
        this.dialogResult = '';
        this.tipoUsuario = "personal-rrhh";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.empleados = this._empleadoService.getEmpleados();
        if (this.tipoUsuario == "Director") {
            this.menuSidenavNombre = this._sidenavService.getSidenavDirector().accordionNombre;
            this.accordionOpciones = this._sidenavService.getSidenavDirector().accordionOpciones;
            this.buttonsOpciones = this._sidenavService.getSidenavDirector().buttonsOpciones;
            this.direccion = "Direccion de Gestion Informatizada";
            this.cantAlertas = 0;
            for (var i in this.empleados) {
                if (this.empleados[i].cantFaltasMensual > 2) {
                    this.cantAlertas = this.cantAlertas + 1;
                }
            }
        }
        else {
            if (this.tipoUsuario == "AdminGlobal") {
                this.menuSidenavNombre = this._sidenavService.getSidenavAdminGlobal().accordionNombre;
                this.accordionOpciones = this._sidenavService.getSidenavAdminGlobal().accordionOpciones;
                this.buttonsOpciones = this._sidenavService.getSidenavAdminGlobal().buttonsOpciones;
                this.direccion = "Administracion General del Sistema";
            }
            else {
                if (this.tipoUsuario == "Admin") {
                    this.menuSidenavNombre = this._sidenavService.getSidenavAdmin().accordionNombre;
                    this.accordionOpciones = this._sidenavService.getSidenavAdmin().accordionOpciones;
                    this.buttonsOpciones = this._sidenavService.getSidenavAdmin().buttonsOpciones;
                    this.direccion = "Administracion del Sistema";
                }
                else {
                    if (this.tipoUsuario == "personal-rrhh") {
                        this.buttonsOpciones = this._sidenavService.getSidenavRRHHGLOBAL().buttonsOpciones;
                        this.direccion = "Administracion de Recursos Humanos";
                    }
                }
            }
        }
    };
    AppComponent.prototype.onCambiarClave = function () {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_cambiar_clave_component_1.DialogCambiarClaveComponent, {
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            _this.dialogResult = result;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [empleado_service_1.EmpleadoService, sidebar_services_1.SidenavService]
        }),
        __metadata("design:paramtypes", [material_1.MatDialog,
            empleado_service_1.EmpleadoService,
            sidebar_services_1.SidenavService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFDbEQsMEVBQXdFO0FBQ3hFLDBFQUF1RTtBQUd2RSw4Q0FBOEM7QUFDOUMsOEhBQTBIO0FBUTFIO0lBZ0JFLHNCQUNTLE1BQWlCLEVBQ2hCLGdCQUFpQyxFQUNqQyxlQUErQjtRQUZoQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBTHpDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBUWhCLElBQUksQ0FBQyxXQUFXLEdBQUMsZUFBZSxDQUFDO0lBQ25DLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxVQUFVLENBQUMsQ0FBQSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ25GLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDckYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ2pGLElBQUksQ0FBQyxTQUFTLEdBQUMsb0NBQW9DLENBQUM7WUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFFckIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDSCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLGFBQWEsQ0FBQyxDQUFBLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUN0RixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUN4RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQ3BGLElBQUksQ0FBQyxTQUFTLEdBQUMsb0NBQW9DLENBQUM7WUFDcEQsQ0FBQztZQUNELElBQUksQ0FBQSxDQUFDO2dCQUNILEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLENBQUEsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUNoRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDbEYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDOUUsSUFBSSxDQUFDLFNBQVMsR0FBQyw0QkFBNEIsQ0FBQztnQkFDOUMsQ0FBQztnQkFDRCxJQUFJLENBQUEsQ0FBQztvQkFDSCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLGVBQWUsQ0FBQyxDQUFBLENBQUM7d0JBRXRDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLGVBQWUsQ0FBQzt3QkFDbkYsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQ0FBb0MsQ0FBQztvQkFDdEQsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBR0QscUNBQWMsR0FBZDtRQUFBLGlCQVNDO1FBUkMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNERBQTJCLEVBQUU7WUFDOUQsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTVFVSxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2xDLFNBQVMsRUFBRSxDQUFFLGtDQUFlLEVBQUUsaUNBQWMsQ0FBRTtTQUMvQyxDQUFDO3lDQWtCaUIsb0JBQVM7WUFDRSxrQ0FBZTtZQUNoQixpQ0FBYztPQW5COUIsWUFBWSxDQTZFdEI7SUFBRCxtQkFBQztDQUFBLEFBN0VILElBNkVHO0FBN0VVLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVtcGxlYWRvU2VydmljZSB9IGZyb20gJy4vbGlicmVyaWEvc2VydmljaW9zL2VtcGxlYWRvLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2lkZW5hdlNlcnZpY2UgfSBmcm9tICcuL2xpYnJlcmlhL3NlcnZpY2lvcy9zaWRlYmFyLnNlcnZpY2VzJztcbmltcG9ydCB7IGFjY29yZGlvbk9wdGlvbiwgYnV0dG9uc09wdGlvbiB9IGZyb20gJy4vbGlicmVyaWEvbW9kZWxzL3NpZGViYXInO1xuXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBEaWFsb2dDYW1iaWFyQ2xhdmVDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZ3MtYXBwLmNvbXBvbmVudC9kaWFsb2ctY2FtYmlhci1jbGF2ZS9kaWFsb2ctY2FtYmlhci1jbGF2ZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hcHAuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFsgRW1wbGVhZG9TZXJ2aWNlLCBTaWRlbmF2U2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIGVzdGFkb0Jvb2xlYW46Ym9vbGVhbjtcbiAgcHVibGljIGNzc0VzdGFkbzpzdHJpbmc7XG4gIHB1YmxpYyBkaXJlY2Npb246c3RyaW5nO1xuICBwdWJsaWMgZW1wbGVhZG9zO1xuXG4gIC8vIFZhcmlhYmxlIHBhcmEgaW55ZWN0YXIgZWwgbWVudVxuICBwdWJsaWMgdGlwb1VzdWFyaW86c3RyaW5nO1xuICBwdWJsaWMgbWVudVNpZGVuYXZOb21icmU6c3RyaW5nO1xuICBwdWJsaWMgYWNjb3JkaW9uT3BjaW9uZXM6IGFjY29yZGlvbk9wdGlvbltdO1xuICBwdWJsaWMgYnV0dG9uc09wY2lvbmVzOiBidXR0b25zT3B0aW9uW107XG4gIGNhbnRBbGVydGFzOm51bWJlcjtcblxuICAvLyBSZXN1bHRhZG8gZGUgZGlhbG9nXG4gIGRpYWxvZ1Jlc3VsdCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIF9lbXBsZWFkb1NlcnZpY2U6IEVtcGxlYWRvU2VydmljZSxcbiAgICBwcml2YXRlIF9zaWRlbmF2U2VydmljZTogU2lkZW5hdlNlcnZpY2VcbiAgKXtcbiAgICAvLyBWYXJpYWJsZSBxdWUgcmVjaWJlIGVsIHRpcG8gZGUgdXN1YXJpbyBsb2d1ZWFkb1xuICAgIHRoaXMudGlwb1VzdWFyaW89XCJwZXJzb25hbC1ycmhoXCI7XG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuZW1wbGVhZG9zID0gdGhpcy5fZW1wbGVhZG9TZXJ2aWNlLmdldEVtcGxlYWRvcygpO1xuICAgIC8vIE9wY2lvbmVzIGRlbCBTaWRlbmF2IGRlcGVuZGllbmRvIGRlbCB0aXBvIGRlIHVzdWFyaW8gbG9ndWVhZG9cbiAgICBpZiAodGhpcy50aXBvVXN1YXJpbyA9PSBcIkRpcmVjdG9yXCIpe1xuICAgICAgdGhpcy5tZW51U2lkZW5hdk5vbWJyZSA9IHRoaXMuX3NpZGVuYXZTZXJ2aWNlLmdldFNpZGVuYXZEaXJlY3RvcigpLmFjY29yZGlvbk5vbWJyZTtcbiAgICAgIHRoaXMuYWNjb3JkaW9uT3BjaW9uZXMgPSB0aGlzLl9zaWRlbmF2U2VydmljZS5nZXRTaWRlbmF2RGlyZWN0b3IoKS5hY2NvcmRpb25PcGNpb25lcztcbiAgICAgIHRoaXMuYnV0dG9uc09wY2lvbmVzID0gdGhpcy5fc2lkZW5hdlNlcnZpY2UuZ2V0U2lkZW5hdkRpcmVjdG9yKCkuYnV0dG9uc09wY2lvbmVzO1xuICAgICAgdGhpcy5kaXJlY2Npb249XCJEaXJlY2Npb24gZGUgR2VzdGlvbiBJbmZvcm1hdGl6YWRhXCI7XG4gICAgICB0aGlzLmNhbnRBbGVydGFzID0gMDtcbiAgICAgIC8vIFNlIHV0aWxpemEgcGFyYSBzYWJlciBjdWFudGFzIHBlcnNvbmFzIGNvbiBleGVkZW50ZSBkZSBmYWx0YXNcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5lbXBsZWFkb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuZW1wbGVhZG9zW2ldLmNhbnRGYWx0YXNNZW5zdWFsID4gMil7XG4gICAgICAgICAgdGhpcy5jYW50QWxlcnRhcyA9IHRoaXMuY2FudEFsZXJ0YXMgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBpZih0aGlzLnRpcG9Vc3VhcmlvID09IFwiQWRtaW5HbG9iYWxcIil7XG4gICAgICB0aGlzLm1lbnVTaWRlbmF2Tm9tYnJlID0gdGhpcy5fc2lkZW5hdlNlcnZpY2UuZ2V0U2lkZW5hdkFkbWluR2xvYmFsKCkuYWNjb3JkaW9uTm9tYnJlO1xuICAgICAgdGhpcy5hY2NvcmRpb25PcGNpb25lcyA9IHRoaXMuX3NpZGVuYXZTZXJ2aWNlLmdldFNpZGVuYXZBZG1pbkdsb2JhbCgpLmFjY29yZGlvbk9wY2lvbmVzO1xuICAgICAgdGhpcy5idXR0b25zT3BjaW9uZXMgPSB0aGlzLl9zaWRlbmF2U2VydmljZS5nZXRTaWRlbmF2QWRtaW5HbG9iYWwoKS5idXR0b25zT3BjaW9uZXM7XG4gICAgICB0aGlzLmRpcmVjY2lvbj1cIkFkbWluaXN0cmFjaW9uIEdlbmVyYWwgZGVsIFNpc3RlbWFcIjtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGlmKHRoaXMudGlwb1VzdWFyaW8gPT0gXCJBZG1pblwiKXtcbiAgICAgICAgICB0aGlzLm1lbnVTaWRlbmF2Tm9tYnJlID0gdGhpcy5fc2lkZW5hdlNlcnZpY2UuZ2V0U2lkZW5hdkFkbWluKCkuYWNjb3JkaW9uTm9tYnJlO1xuICAgICAgICAgIHRoaXMuYWNjb3JkaW9uT3BjaW9uZXMgPSB0aGlzLl9zaWRlbmF2U2VydmljZS5nZXRTaWRlbmF2QWRtaW4oKS5hY2NvcmRpb25PcGNpb25lcztcbiAgICAgICAgICB0aGlzLmJ1dHRvbnNPcGNpb25lcyA9IHRoaXMuX3NpZGVuYXZTZXJ2aWNlLmdldFNpZGVuYXZBZG1pbigpLmJ1dHRvbnNPcGNpb25lcztcbiAgICAgICAgICB0aGlzLmRpcmVjY2lvbj1cIkFkbWluaXN0cmFjaW9uIGRlbCBTaXN0ZW1hXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBpZih0aGlzLnRpcG9Vc3VhcmlvID09IFwicGVyc29uYWwtcnJoaFwiKXtcbiAgICAgICAgICAgIC8vIEVzdGUgdGlwbyBkZSB1c3VhcmlvIG5vIHRpZW5lIG9wY2lvbmVzIHRpcG8gYWNjb3JkaW9uLCBzb2xvIGJvdG9ucy5cbiAgICAgICAgICAgIHRoaXMuYnV0dG9uc09wY2lvbmVzID0gdGhpcy5fc2lkZW5hdlNlcnZpY2UuZ2V0U2lkZW5hdlJSSEhHTE9CQUwoKS5idXR0b25zT3BjaW9uZXM7XG4gICAgICAgICAgICB0aGlzLmRpcmVjY2lvbj1cIkFkbWluaXN0cmFjaW9uIGRlIFJlY3Vyc29zIEh1bWFub3NcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEaWFsb2cgZGUgY2FtYmlhciBjbGF2ZVxuICBvbkNhbWJpYXJDbGF2ZSgpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0NhbWJpYXJDbGF2ZUNvbXBvbmVudCwge1xuICAgICAgd2lkdGg6ICc2MDBweCdcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2coYERpYWxvZyBjbG9zZWQ6IGAgKyByZXN1bHQpO1xuICAgICAgdGhpcy5kaWFsb2dSZXN1bHQgPSByZXN1bHQ7XG4gICAgfSk7XG4gIH1cbiAgfVxuXG4iXX0=